import { Days } from './enums'

export function formatDate(timestamp: number) {
  let d = new Date(timestamp);
  return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`
}

export function getNextSevenDays(weeksFromNow: number = 0): Array<number> {
  let days: Array<number> = []
  for (let i = weeksFromNow * 7; i < (weeksFromNow * 7) + 7; i++) {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i);
    days.push(currentDate.getTime());
  }
  return days;
}

// to replace getNextSevenDays - returns seven days always starting on Sunday rather than current day
export function getWeek(weeksFromNow: number = 0, numberOfDaysToDisplay: number = 7): Array<number> {
  let startOnSunday = true;
  let days: Array<number> = []
  let currentDate = new Date();
  // go to desired week
  currentDate.setDate(weeksFromNow * 7);
  // gets start of current week
  let diff = currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1);
  currentDate.setDate(diff - (startOnSunday ? 1 : 0));
  // add first day
  days.push(currentDate.getTime());
  for (let i = 0; i < numberOfDaysToDisplay - 1; i++) {
    currentDate.setDate(currentDate.getDate() + 1);
    days.push(currentDate.getTime());
  }
  console.log(days);
  return days;
}

export function getDayStrings(timestampArr: Array<number>): Array<string> {
  let dayStrings: Array<string> = []
  for (let timestamp of timestampArr) {
    let d = new Date(timestamp);
    dayStrings.push(`${Days[d.getDay()]} ${d.getMonth() + 1}/${d.getDate()}`);
  }
  return dayStrings;
}
