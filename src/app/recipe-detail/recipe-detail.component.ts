import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Recipe } from "../interfaces";
import { DatabaseService } from '../database.service'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnChanges {
  @Input() recipe: Recipe;

  recipeObs: Observable<Recipe>;
  isEdit = false;
  ingredientList: Array<string> = [];

  constructor(private dbService: DatabaseService) {
    
  }

  ngOnChanges() {
    if(this.recipe.ingredients) {
      this.ingredientList = this.recipe.ingredients;
    }
    this.recipeObs = this.dbService.getRecipe(this.recipe.name).valueChanges();
  }

  addIngredientInput() {
    this.ingredientList.push("");
  }

  removeIngredient(index: number) {
    this.ingredientList.splice(0, 1)
  }

  trackByFn(index: any, item: any) {
    return index;
 }

  processForm(form: NgForm) {
    console.log(this.recipe);
    let myJson = form.value;
    let newRecipe: Recipe = {
      name: myJson.name,
      prepTime: myJson.prepTime,
      cookTime: myJson.cookTime,
      servings: myJson.servings,
      directions: myJson.directions,
      notes: myJson.notes
    };
    this.dbService.getRecipeList().remove(this.recipe.name);
    console.log(newRecipe);
    this.recipe = newRecipe;
    this.dbService.getRecipeList().update(this.recipe.name, newRecipe);
    this.dbService.getRecipe(this.recipe.name).update({ingredients: this.ingredientList});
    this.isEdit = false
  }

  deleteRecipe() {
    this.dbService.getRecipeList().remove(this.recipe.name);
    this.isEdit = false
  }

}
