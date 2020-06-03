import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Recipe} from "../interfaces";
import { DatabaseService } from '../database.service'
import { Observable } from 'rxjs';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent {

  @Output() addedMenuItem: EventEmitter<boolean> = new EventEmitter();
  @Input() inputSelectedDate: number;

  selectedRecipeForDetail: Recipe;
  recipeGoingToMenu: Recipe;
  recipeList: Observable<Recipe[]>;
  isAddingToMenu: boolean = false;

  constructor(private dbService: DatabaseService) {
    //NEED FIXED LOOK INTO SUBSCRIPTION PROMISES
    setTimeout(() => {this.recipeList = this.dbService.getRecipeList().valueChanges()}, 100);
  }

  onSelectRecipeForDetails(recipe: Recipe) {
    this.selectedRecipeForDetail = recipe;
  }

  newRecipe() {
    let recipe: Recipe = new Recipe('New Recipe');
    this.dbService.addRecipe(recipe);
    this.onSelectRecipeForDetails(recipe);
  }

  selectedRecipeToMenu(recipe: Recipe) {
    this.recipeGoingToMenu = recipe;
    if (this.inputSelectedDate) {
      this.onSelectedDay(this.inputSelectedDate);
    } else {
      this.isAddingToMenu = true;
    }
  }

  onSelectedDay(timestamp: number) {
    let menuItem = this.dbService.buildMenuItem(this.recipeGoingToMenu, timestamp);
    this.dbService.addMenuItem(menuItem);
    this.isAddingToMenu = false;
    this.addedMenuItem.emit(false);
  }

}
