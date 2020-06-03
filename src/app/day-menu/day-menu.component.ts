import { Component, Input, OnChanges } from '@angular/core';
import { MenuItem } from "../interfaces";
import { Observable } from 'rxjs';
import { DatabaseService } from '../database.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-day-menu',
  templateUrl: './day-menu.component.html',
  styleUrls: ['./day-menu.component.css']
})
export class DayMenuComponent implements OnChanges {

  @Input() menu: Observable<MenuItem[]>;

  menuItems: Array<any> = [];
  selectedRecipe: MenuItem;

  constructor(private dbService: DatabaseService) {}

  ngOnChanges() {
    this.organizeMenu()
  }

  organizeMenu() {
    if (this.menu && this.menuItems.length === 0) {
      this.menu.subscribe(results => {
        this.menuItems = results;
      })
    }
  }

  onSelect(recipe: MenuItem) {
    this.selectedRecipe = recipe;
  }

  removeMenuItem(menuItem: MenuItem) {
    this.dbService.removeMenuItem(menuItem);
  }

  onDrop(event: CdkDragDrop<MenuItem[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.dbService.setEntireMenuDay(this.menuItems);
  }

}

