import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Ingredient, MenuItem } from '../interfaces';
import { formatDate } from '../export-functions'
import { Observable, forkJoin } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-generate-shopping-list',
  templateUrl: './generate-shopping-list.component.html',
  styleUrls: ['./generate-shopping-list.component.css']
})
export class GenerateShoppingListComponent implements OnInit {

  startDate: Date;
  endDate: Date;

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
  }

  generateList() {

    let end = new Date(this.endDate);
    let dateIterator = new Date(this.startDate);
    let obs: Array<Observable<any>> = [];

    while(dateIterator.getTime() <= end.getTime()) {
      obs.push(this.dbService.getMenuDay(formatDate(dateIterator.getTime())).valueChanges().pipe(take(1)))
      dateIterator.setDate(dateIterator.getDate()+1);
    }

    let ingredients: Array<Ingredient> = [];
    forkJoin(obs).subscribe(dataArr => {
      dataArr.forEach(recArr => {
        recArr.forEach(rec => {if(rec.ingredients) ingredients.push(...rec.ingredients)});
      })
      this.dbService.setShoppingList({
        createdOn: new Date(Date.now()).toLocaleString(),
        startDate: this.startDate.toLocaleDateString(),
        endDate: this.endDate.toLocaleDateString(),
        ingredients: this.groupIngredients(ingredients)
      })
    })

  }

  groupIngredients(ingredients: Array<Ingredient>) {
    let counter = {};
    ingredients.forEach(ing => {
      counter[ing.name] = counter[ing.name] ? counter[ing.name]+1 : 1;
    })
    let groupedIngredients: Array<Ingredient> = []
    for (const [key, value] of Object.entries(counter)) {
      groupedIngredients.push({name: `${key} x${value}`, isChecked: false})
    }
    return groupedIngredients;
  }

}
