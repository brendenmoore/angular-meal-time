import { Component, Input, OnChanges } from '@angular/core';
import { MenuItem } from "../interfaces";
import { Observable } from 'rxjs';
import { DatabaseService } from '../database.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MenuComponent } from '../menu/menu.component'

@Component({
  selector: 'app-day-menu',
  templateUrl: './day-menu.component.html',
  styleUrls: ['./day-menu.component.css']
})
export class DayMenuComponent implements OnChanges {

  @Input() menu: Observable<MenuItem[]>;
  menuItems: Array<MenuItem> = [];
  displayedColumns: string[] = ['Name']

  constructor(private dbService: DatabaseService, private menuComp: MenuComponent) {}

  ngOnChanges() {
    this.organizeMenu()
    this.menuComp.dialog.closeAll()
  }

  organizeMenu() {
    if (this.menu && this.menuItems.length === 0) {
      this.menu.subscribe(results => {
        this.menuItems = results;
        this.menuItems.pop();
        this.menuComp.dialog.closeAll()
      })
    }
  }

  removeMenuItem(menuItem: MenuItem) {
    this.dbService.removeMenuItem(menuItem);
  }

  onDrop(event: CdkDragDrop<MenuItem[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.dbService.setEntireMenuDay(this.menuItems);
  }
}