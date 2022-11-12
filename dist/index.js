"use strict";
let nickName = "Alex";
let price = 1234543234543;
let book = 'turn left at orion';
let is_published = false;
let level;
let presentYear = 2022;
function printName(name) {
    console.log(name);
}
printName("eeee alex");
let ages = [10, 20, 30, 35, 67];
let names = ["alex", "isaac", "monkey"];
function calculateAge(birthYear) {
    let age = presentYear - birthYear;
    return age;
}
let age = calculateAge(2011);
console.log(age);
console.log(calculateAge(1980) + 22);
console.log(7 + 8);
console.log("7" + "8");
let person = {
    name: "isaac",
    height: 150,
    address: "15481 18ave"
};
console.log(person.address);
console.log(person.height);
let car = {
    maker: "telsa",
    wheels: 4,
    length: 3,
    owner: "isaac"
};
console.log(car.maker);
console.log(car.owner);
const number1 = 5;
const number2 = 12893;
//# sourceMappingURL=index.js.map