import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';
import { User, Recipe} from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnInit{

  userId: string = null

  users: AngularFireList<User> = null
  recipes: AngularFireList<Recipe> = null

  constructor(private db: AngularFireDatabase, private user: UserService) {
    this.user.uid.subscribe(uid => {
      this.userId = uid;
      this.recipes = this.db.list(`recipes/${this.userId}`);
    });
    
  }

  ngOnInit() {
    
    // this.users = this.db.list(`users`);
    // this.recipes = this.db.list(`recipes/${this.userId}`);
  }

  getUsersList(): AngularFireList<User> {
    return this.users;
  }

  createUser(uid: string) {
    this.users.update(uid, {uid: uid});
  }

  addRecipe(recipe: Recipe) {
    this.recipes.update(recipe.name, recipe);
  }

  getRecipeList() {
    return this.recipes;
  }

  getRecipe(recipeName: string) {
    return this.db.object(`recipes/${this.userId}/${recipeName}`);
  }

  deleteRecipe(recipeName: string) {
    this.recipes.remove(recipeName);
  }

}
