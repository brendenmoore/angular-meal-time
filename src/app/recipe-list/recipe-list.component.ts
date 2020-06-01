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
  }

  ngOnInit() { }

  onSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  newRecipe() {
    let recipe: Recipe = {
      name: "New Recipe",
      prepTime: "",
      cookTime: "",
      servings: "",
      directions: "",
      notes: ""

    }
    this.dbService.addRecipe(recipe);
    this.onSelect(recipe);
  }

}
