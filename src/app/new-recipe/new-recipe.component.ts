import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Recipe } from '../interfaces';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  recipe: Recipe;
  ingredientList: Array<string> = [];

  constructor(public dialogRef: MatDialogRef<NewRecipeComponent>, public dbService: DatabaseService) { }

  ngOnInit() {
  }

  onSave(form: NgForm): void {
    let j = form.value;
    this.recipe = new Recipe(j.name, j.prepTime, j.cookTime, j.servings, j.directions, j.notes)
    this.dbService.addRecipe(this.recipe);
    this.dialogRef.close();
    this.dbService.setRecipeIngredients(this.recipe, this.ingredientList);
  }

  addIngredientInput() {
    this.ingredientList.push("");
  }

  removeIngredient(index: number): void {
    this.ingredientList.splice(index, 1)
  }

  trackByFn(index: any, item: any): number {
    return index;
  }

}
