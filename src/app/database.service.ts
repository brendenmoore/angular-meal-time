import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database"; 
import { UserService } from './user.service';
import { User, Recipe, MenuItem} from './interfaces'
import { formatDate } from './export-functions'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService{

  userId: string = null
  users: AngularFireList<User> = null
  recipes: AngularFireList<Recipe> = null
  menu: AngularFireList<MenuItem> = null

  constructor(private db: AngularFireDatabase, private user: UserService) {
    this.user.uid.subscribe(uid => {
      this.userId = uid;
      this.recipes = this.db.list(`recipes/${this.userId}`);
      this.menu = this.db.list(`menu/${this.userId}`)
    });
  }

  //
  //User Data
  //
  createUser(uid: string) {
    this.users.update(uid, {uid: uid});
  }

  //
  //Recipe Data
  //  
  addRecipe(recipe: Recipe): void {
    this.recipes.update(recipe.name, recipe);
  }

  getRecipeList(): AngularFireList<Recipe> {
      return this.recipes;
  }

  getRecipe(recipe: Recipe): AngularFireObject<Recipe> {
    return this.db.object(`recipes/${this.userId}/${recipe.name}`);
  }

  deleteRecipe(recipe: Recipe): void {
    this.recipes.remove(recipe.name);
  }

  setRecipeIngredients(recipe: Recipe, newIngredients: Array<string>): void {
    this.db.object(`recipes/${this.userId}/${recipe.name}`).update({ingredients: newIngredients});
  }

  //
  //Menu data
  //
  addMenuItem(menuItem: MenuItem) {
    //currentIndex is used to name the next menuItem and gets incremented
    let currentIndex = null;
    let pushAtIndex = this.db.object(`menu/${this.userId}/${menuItem.date}/currentIndex`).snapshotChanges().subscribe(result => {
      currentIndex = result.payload.val();
      if (currentIndex) {
        menuItem.index = currentIndex;
        this.menu.update(`${menuItem.date}/${currentIndex}`, menuItem)
      } else {
        menuItem.index = 0;
        this.menu.update(`${menuItem.date}/0`, menuItem)
      }
      this.db.object(`menu/${this.userId}/${menuItem.date}`).update({currentIndex: currentIndex + 1});
      pushAtIndex.unsubscribe();
    });
  }

  getMenuDay(day: string): AngularFireList<any> {
    return this.db.list(`menu/${this.userId}/${day}`);
  }

  setEntireMenuDay(menuItems: Array<any>): void {
    for(let i=0; i<menuItems.length; i++) {
      menuItems[i].index = i;
    }
    this.db.object(`menu/${this.userId}/${menuItems[0].date}`).set(menuItems);
    this.getMenuDay(menuItems[0].date).set(`currentIndex`, menuItems.length)
  }

  removeMenuItem(menuItem: MenuItem): void {
    this.db.list(`menu/${this.userId}/${menuItem.date}`).remove(`${menuItem.index}`)
  }

  buildMenuItem(recipe: Recipe, timestamp: number) {
    let menuItem = new MenuItem(1, recipe.name, formatDate(timestamp), timestamp);
    if (recipe.ingredients) {
      for (let ingredient of recipe.ingredients) {
        menuItem.ingredients.push({
          name: ingredient,
          isChecked: false
        })
      }
    }
    return menuItem;
  }

  //
  //ShoppingList data
  //
  changeIngredientChecked(ingredientIndex: number, menuItem: MenuItem): void {
    let ob = this.db.object(`menu/${this.userId}/${menuItem.date}/${menuItem.index}/ingredients/${ingredientIndex}/isChecked`).valueChanges().subscribe(val => {
      let bool:boolean = !(val)
      this.db.object(`menu/${this.userId}/${menuItem.date}/${menuItem.index}/ingredients/${ingredientIndex}`).update({isChecked: bool});
      ob.unsubscribe();
    })
  }

}
