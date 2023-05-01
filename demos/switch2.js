let dayNum = 3;
let dayName;
switch (dayNum) {
  case 0:
  case 6:
    dayName = "Weekend";
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    dayName = "Weekday";
    break;
  default:
    dayName = "<unknown>";
}

console.log(dayName);

