import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe";
import { RECIPES } from "../fake-recipes";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = RECIPES;
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {}

  onSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
