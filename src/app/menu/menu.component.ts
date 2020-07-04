import { Component, OnInit, } from '@angular/core';
import { getNextNumberOfDays, getDayStrings, formatDate } from '../export-functions';
import { DatabaseService } from '../database.service'
import { Observable } from 'rxjs';
import { MenuItem } from "../interfaces";
import { MatDialog } from '@angular/material/dialog';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dayStringArr: Array<string> = [];
  timestampArr: Array<number> = [];
  observableArr: Array<Observable<MenuItem[]>> = [];
  numOfWeeksFromNow: number = 0;
  displayedColumns: string[] = ['Date', 'Food'];
  daysToDisplay: number = 7;

  constructor(private dbService: DatabaseService, public dialog: MatDialog) { }

  ngOnInit() {
    this.initiateDays();
    //NEED FIXED
    setTimeout(() => this.initiateObservables(), 100);
  }

  initiateDays(weeksFromNow: number = 0) {
    this.timestampArr = getNextNumberOfDays(weeksFromNow, this.daysToDisplay);
    this.dayStringArr = getDayStrings(this.timestampArr);
  }

  initiateObservables() {
    this.timestampArr.forEach(timestamp => {
      this.observableArr.push(this.dbService.getMenuDay(formatDate(timestamp)).valueChanges())
    });
  }

  openRecipeSelect(timestamp: number) {
    const dialogRef = this.dialog.open(RecipeListComponent);
    let instance = dialogRef.componentInstance;
    instance.selectedTimestamp = timestamp;
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

