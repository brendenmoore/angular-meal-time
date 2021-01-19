import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { Recipe } from '../interfaces';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  newRecipe: Recipe = {
    name: "New Recipe",
    prepTime: "",
    cookTime: "",
    servings: "",
    directions: "",
    notes: "",
    image: "",
    ingredients: [],

  };

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
  }

  processForm(): void {
    this.dbService.addRecipe(this.newRecipe);
  }

  trackByFn(index: any, item: any): number {
    return index;
  }

  removeIngredient(index: number): void {
    this.newRecipe.ingredients.splice(index, 1)
  }
}

