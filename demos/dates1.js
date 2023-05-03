// let date = {
//     month: 1,
//     year: 1987,
//     day: 21,
//     weekday: 0,
//     toString: function(){
//         return ` month, year, date`
//     },
//     toUTCString: function(){
//         return ` month, year, date`
//     }

// };

let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toUTCString());
console.log(date.toDateString());

console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());