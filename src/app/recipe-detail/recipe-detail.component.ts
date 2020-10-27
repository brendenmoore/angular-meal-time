import { Component, Input, OnChanges, ViewChild } from "@angular/core";
import { Recipe } from "../interfaces";
import { DatabaseService } from '../database.service'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnChanges {
  
  @Input() recipeObj;
  @ViewChild('picker', {read: undefined, static: false}) datePicker: MatDatepicker<Date>;

  recipe: Recipe;
  recipeObs: Observable<Recipe>;
  isEdit: boolean = false;
  dateSelectedForMenu;
  ingredientList: Array<string> = [];

  constructor(private dbService: DatabaseService) {}

  ngOnChanges() {
    this.updateVariables();
  }

  addIngredientInput() {
    this.ingredientList.push("");
  }

  removeIngredient(index: number): void {
    this.ingredientList.splice(index, 1)
  }

  processForm(form: NgForm): void {
    let j = form.value;
    this.dbService.deleteRecipe(this.recipe);
    this.recipe = new Recipe(j.name, j.prepTime, j.cookTime, j.servings, j.directions, j.notes)
    this.dbService.addRecipe(this.recipe);
    this.dbService.setRecipeIngredients(this.recipe, this.ingredientList);
  }

  onDateSelected () {
    this.dateSelectedForMenu ? this.addToMenu(this.dateSelectedForMenu) : this.datePicker.open();
  }

  addToMenu(timestamp: number) {
    let menuItem = this.dbService.buildMenuItem(this.recipe, timestamp);
    this.dbService.addMenuItem(menuItem);
    this.dateSelectedForMenu = null;
  }

  deleteRecipe() {
    this.dbService.deleteRecipe(this.recipe);
    this.isEdit = false
  }

  trackByFn(index: any, item: any): number {
    return index;
  }

  updateVariables() {
    this.dateSelectedForMenu = this.recipeObj.timestamp;
    this.recipe = this.recipeObj.recipe;
    this.recipeObs = this.dbService.getRecipe(this.recipe).valueChanges();
    if(this.recipe.ingredients) {
      this.ingredientList = this.recipe.ingredients;
    } else {
      this.ingredientList = [];
    }
  }
  
}

