import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { MenuItem, Ingredient, ShoppingList } from "../interfaces";
import { Observable } from 'rxjs';
import { getNextNumberOfDays, formatDate } from '../export-functions';
import { MatDialog } from '@angular/material';
import { GenerateShoppingListComponent } from '../generate-shopping-list/generate-shopping-list.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  shoppingList: Observable<ShoppingList>;
  shoppingListToDisplay: ShoppingList;

  constructor(private dbService: DatabaseService, private dialog: MatDialog) {
    this.shoppingList = this.dbService.shoppingList.valueChanges();
    this.shoppingList.subscribe(list => {
      this.shoppingListToDisplay = list
    });
  }

  openGenerateShoppingList() {
    this.dialog.open(GenerateShoppingListComponent);
  }

  showOptions(event, ingIndex) {
    this.dbService.toggleIngredient(ingIndex, event.checked);
  }

}

