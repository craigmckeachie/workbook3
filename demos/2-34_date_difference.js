let date1 = new Date();
let date2 = new Date("June 30, 2023");
let msec_per_day = 1000 * 60 * 60 * 24;
let elapsedMilliseconds = date2.getTime() - date1.getTime();
let dayDiff = elapsedMilliseconds / msec_per_day;
let numDays = Math.round(dayDiff);
console.log("The number of days between dates is " + numDays);