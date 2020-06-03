import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { MenuItem } from "../interfaces";
import { Observable } from 'rxjs';

enum Days {
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thur',
  'Fri',
  'Sat'
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  Days = Days
  dayArr: Array<string> = [];
  timestampArr: Array<number> = [];
  observableArr: Array<Observable<MenuItem[]>> = [];

  constructor(private dbService: DatabaseService) {
    this.initiateDays();
    this.initiateObservables();
  }

  ngOnInit() {
  }

  initiateDays() {
    let d = new Date().getDay();
    for (let i = d; i < 7; i++) {
      this.dayArr.push(Days[i]);
    }
    for (let i = 0; this.dayArr.length < 7; i++) {
      this.dayArr.push(Days[i]);
    }
    for (let i = 0; i < this.dayArr.length; i++) {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate()+i);
      this.dayArr[i] = `${this.dayArr[i]} ${currentDate.getMonth() + 1}/${currentDate.getDate()}`
      this.timestampArr.push(currentDate.getTime());
    }
  }

  initiateObservables() {
    for(let i = 0; i < this.timestampArr.length; i++) {
      let d = new Date(this.timestampArr[i]);
      let day = `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
      this.observableArr.push(this.dbService.getMenuDay(day).valueChanges());
    }
  }

  onChecked(e, ingredientIndex, menuItem) {
    let d = new Date(menuItem.timestamp);
    let day = `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
    this.dbService.changeIngredientChecked(e.target.checked, ingredientIndex, menuItem);
  }
}
