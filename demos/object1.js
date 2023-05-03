// let d = new Date();

// function getFullYear() {
//   return 2023;
// }

// let x = getFullYear
// console.log(x);

// let y = getFullYear();
// console.log(y);

// function catchBall(){
//     return "ball";
// }

// let object = catchBall();
// console.log(object);

// function setFullYear(year, shouldIDanceWhileImDoingThis) {
//     if(shouldIDanceWhileImDoingThis){
//         console.log(`dance, dance, dance`);
//     }
//     let storedYear = `stored: ${year}`;
//     return storedYear;
// }

// let value = 1994;
// let returnValue = setFullYear(value, true);

// console.log(returnValue);
// console.log(value);

//  let d = new Date();

class Date1 {
  year;
  month;
  day;  
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  getFullYear() {
    return this.year;
  }
  setFullYear(year){
    this.year = year;
  }
  toLocaleString(){
    
  }
  toString() {
    return `${this.day}/${this.month}/${this.year}`;
  }
}



// let d = new Date1(2023, 4, 3);
// // console.log(d.toString());
// let year = d.getFullYear();
// console.log(year);



// function getFullYear() {
//   return 2023;
// }


class PersonFormatter{
    format(){

    }
}

class Person{
    first;
    last;
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    getFullName(){

        return `${this.first} ${this.last} `
    }
    toString(){
        return `${this.last}, ${this.first}   `
    }
}

let person = new Person("Jon","Tran");
let person1 = new Person("Amir","Branch");
// let person = Person.constructor("Jon","Tran")
console.log(person.first);
console.log(person1.first);


// console.log(person.toString());
console.log(person.getFullName());