import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Recipe} from "../interfaces";
import { DatabaseService } from '../database.service'
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { NewRecipeComponent } from '../new-recipe/new-recipe.component';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent {

  @Output() addedMenuItem: EventEmitter<boolean> = new EventEmitter();

  recipeList: Observable<Recipe[]>;
  recipeListToDisplay: Array<Recipe>;
  selectedTimestamp: number = null;

  constructor(private dbService: DatabaseService, private dialog: MatDialog) {
    this.recipeList = this.dbService.getRecipeList().valueChanges();
    this.recipeList.subscribe(recipes => this.recipeListToDisplay = recipes);
  }

  newRecipe() {
    const dialogRef = this.dialog.open(NewRecipeComponent);
  }

  search(searchTerm: string): void {
    this.recipeListToDisplay = [];
    this.recipeList.subscribe(list => {
      for (let recipe of list) {
        searchTerm = searchTerm.toLowerCase();
        if (recipe.name.toLowerCase().indexOf(searchTerm) >= 0) {
          this.recipeListToDisplay.push(recipe);
        }
      }
    })
  }

}

