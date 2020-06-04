import { Component, OnInit, } from '@angular/core';
import { getNextSevenDays, getDayStrings} from '../export-functions';
import { DatabaseService } from '../database.service'
import { Observable } from 'rxjs';
import { MenuItem } from "../interfaces";
import { formatDate } from '../export-functions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isAdding: boolean = false;
  isAddingToMenu: boolean = true;
  dayStringArr: Array<string> = [];
  timestampArr: Array<number> = [];
  selectedDay: number = null;
  observableArr: Array<Observable<MenuItem[]>> = [];
  numOfWeeksFromNow: number = 0;

  constructor(private dbService: DatabaseService) {
  }

  ngOnInit() { 
    this.initiateDays();
    this.initiateObservables();
  }

  initiateDays(weeksFromNow: number=0) {
    this.timestampArr = getNextSevenDays(weeksFromNow);
    this.dayStringArr = getDayStrings(this.timestampArr);
  }

  initiateObservables() {
    for(let i = 0; i < this.timestampArr.length; i++) {
      let day = formatDate(this.timestampArr[i]);
      this.observableArr.push(this.dbService.getMenuDay(day).valueChanges());
    }
  }

  addingToMenu(day: number) {
    this.isAdding = true;
    this.selectedDay = day;
  }

  finishedAdding(bool: boolean) {
    this.isAdding = bool;
  }

  goToNextWeek() {
    this.numOfWeeksFromNow++;
    this.initiateDays(this.numOfWeeksFromNow);
    this.observableArr = [];
    this.initiateObservables();
  }

  goToPrevWeek() {
    this.numOfWeeksFromNow--;
    this.initiateDays(this.numOfWeeksFromNow);
    this.observableArr = [];
    this.initiateObservables();
  }

}

