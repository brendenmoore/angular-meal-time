import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { getNextSevenDays, getDayStrings} from '../export-functions';

@Component({
  selector: 'app-day-select',
  templateUrl: './day-select.component.html',
  styleUrls: ['./day-select.component.css']
})
export class DaySelectComponent implements OnInit {

  @Output() selectedDay: EventEmitter<number> = new EventEmitter();
  dayStringArr: Array<string> = [];
  timestampArr: Array<number> = [];

  constructor() {}

  ngOnInit() {
    this.initiateDays()
  }

  initiateDays() {
    this.timestampArr = getNextSevenDays();
    this.dayStringArr = getDayStrings(this.timestampArr);
  }

  selectDay(timestamp: number) {
    this.selectedDay.emit(timestamp);
  }

}
