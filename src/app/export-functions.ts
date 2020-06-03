import { Days } from './enums'

export function formatDate(timestamp: number) {
    let d = new Date(timestamp);
    return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`
}

export function getNextSevenDays(): Array<number> {
    let days: Array<number> = []
    for (let i = 0; i < 7; i++) {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate()+i);
        days.push(currentDate.getTime());
    }
    return days;
}

export function getDayStrings(timestampArr: Array<number>): Array<string> {
    let dayStrings: Array<string> = []
    for (let timestamp of timestampArr) {
        let d = new Date(timestamp);
        dayStrings.push(`${Days[d.getDay()]} ${d.getMonth()+1}/${d.getDate()}`);
    }
    return dayStrings;
}