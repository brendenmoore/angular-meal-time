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
  recipeListToDisplay: Array<Recipe>;

  constructor(private dbService: DatabaseService) {
    //NEED FIXED LOOK INTO SUBSCRIPTION PROMISES
    setTimeout(() => {
      this.recipeList = this.dbService.getRecipeList().valueChanges();
      this.recipeList.subscribe(val => this.recipeListToDisplay = val);
    }, 30);
  }

  onSelectRecipeForDetails(recipe: Recipe) {
    if (this.selectedRecipeForDetail === recipe) {
      this.selectedRecipeForDetail = null;
    } else {
      this.selectedRecipeForDetail = recipe;
    }
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

  cancelSelectingDay() {
    this.isAddingToMenu = false;
  }

  onSelectedDay(timestamp: number) {
    let menuItem = this.dbService.buildMenuItem(this.recipeGoingToMenu, timestamp);
    this.dbService.addMenuItem(menuItem);
    this.isAddingToMenu = false;
    this.addedMenuItem.emit(false);
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
