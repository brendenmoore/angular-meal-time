import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { MenuItem, Ingredient } from "../interfaces";
import { Observable } from 'rxjs';
import { getNextNumberOfDays, formatDate } from '../export-functions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredientRefMap = new Map();
  shoppingListMap = new Map();
  timestampArr: Array<number> = [];
  observableArr: Array<Observable<MenuItem[]>> = [];

  constructor(private dbService: DatabaseService) {
    this.initiateDays();
    setTimeout(() => {
      this.initiateObservables();
      this.constructShoppingList();
    }, 100);
  }

  initiateDays(weeksFromNow: number = 0) {
    this.timestampArr = getNextNumberOfDays(weeksFromNow);
  }

  initiateObservables() {
    for (let i = 0; i < this.timestampArr.length; i++) {
      let day = formatDate(this.timestampArr[i]);
      this.observableArr.push(this.dbService.getMenuDay(day).valueChanges());
    }
  }

  onChecked(ingredientRefKey) {
    this.ingredientRefMap.get(ingredientRefKey).val.forEach(ref => {
      let ingredients = ref.menuItem.ingredients;
      this.dbService.changeIngredientChecked(ingredients.indexOf(ref.ingredient), ref.menuItem);
    })
  }

  constructShoppingList() {
    for (let observable of this.observableArr) {
      let ob = observable.subscribe(menuItems => {
        menuItems.forEach(menuItem => {
          if (menuItem.ingredients) {
            menuItem.ingredients.forEach(ing => {
              this.incrementIngredientCount(ing)
              this.constructReferenceMap(menuItem, ing);
            });
          }
        })
        ob.unsubscribe();
      })
    }
  }

  incrementIngredientCount(ingredient: Ingredient) {
    this.shoppingListMap.has(ingredient.name) ? this.shoppingListMap.get(ingredient.name).val++ : this.shoppingListMap.set(ingredient.name, { val: 1 });
  }

  constructReferenceMap(menuItem: MenuItem, ingredient: Ingredient) {
    let ingredientRef = { menuItem: menuItem, ingredient: ingredient };
    if (this.ingredientRefMap.has(ingredient.name)) {
      this.ingredientRefMap.get(ingredient.name).val.push(ingredientRef);
    } else {
      this.ingredientRefMap.set(ingredient.name, { val: [ingredientRef] });
    }
  }

}

