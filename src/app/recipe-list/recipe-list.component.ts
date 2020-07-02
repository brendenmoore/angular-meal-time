import { Component, OnInit } from "@angular/core";
import { Recipe } from "../interfaces";
import { RECIPES } from "../fake-recipes";
import { DatabaseService } from '../database.service'
import { AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;
  recipeList: Observable<Recipe[]>;

  constructor(private dbService: DatabaseService) {
    this.recipeList = this.dbService.getRecipeList().valueChanges();
    this.dbService.getRecipeList().valueChanges()
  }

  ngOnInit() { }

  onSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  newRecipe(name: string) {
    let recipe: Recipe = {
      name: name
    }
    this.dbService.addRecipe(recipe);
  }

  // getRecipes() {
  //   // console.log(this.dbService.getRecipeList());
  //   // this.dbService.getRecipeList().snapshotChanges().pipe(map(changes =>
  //   //   changes.map(c => 
  //   //     ({key: c.payload.key, ...c.payload.val()})
  //   //     ))).subscribe(items => {
  //   //       return items;
  //   //     })
  // }

  

}
