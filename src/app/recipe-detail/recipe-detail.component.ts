import { Component, Input, OnChanges } from "@angular/core";
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
  isEdit: boolean = false;
  ingredientList: Array<string> = [];

  constructor(private dbService: DatabaseService) {}

  ngOnChanges() {
    this.updateVariables();
  }

  addIngredientInput() {
    this.ingredientList.push("");
  }

  removeIngredient(index: number): void {
    this.ingredientList.splice(0, 1)
  }

  processForm(form: NgForm): void {
    let j = form.value;
    let newRecipe = new Recipe(j.name, j.prepTime, j.cookTime, j.servings, j.directions, j.notes)
    this.dbService.deleteRecipe(this.recipe);
    this.recipe = newRecipe;
    this.dbService.addRecipe(newRecipe);
    this.dbService.setRecipeIngredients(this.recipe, this.ingredientList);
    this.isEdit = false
  }

  deleteRecipe() {
    this.dbService.deleteRecipe(this.recipe);
    this.isEdit = false
  }

  trackByFn(index: any, item: any): number {
    return index;
  }

  updateVariables() {
    if(this.recipe) {
      if(this.recipe.ingredients) {
        this.ingredientList = this.recipe.ingredients;
      } else {
        this.ingredientList = [];
      }
      if (this.recipe.name === 'New Recipe') {
        this.isEdit = true;
      }
      this.recipeObs = this.dbService.getRecipe(this.recipe).valueChanges();
    } else {
      this.recipeObs = null;
    }
  }

}
