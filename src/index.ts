// let age: number = 25
// if (age < 50)
//     age +=10
let nickName: string = "Alex"
// let total = age + nickName
let price: number = 1234543234543
let book: string = 'turn left at orion'
let is_published: boolean = false;
let level;
let presentYear = 2022;

function printName(name: string) {
    console.log(name);
}

printName("eeee alex")
let ages: number[] = [10, 20, 30, 35, 67]
let names: string[] = ["alex", "isaac", "monkey"]

function calculateAge(birthYear: number) { 
    let age = presentYear - birthYear;
    return age;
}


let age: number = calculateAge(2011)
console.log(age)


console.log(calculateAge(1980)+22)

console.log(7 + 8);
console.log("7" + "8")


let person: {
    name: string,
    height: number,
    address: string,
} = {
    name: "isaac",
    height: 150,
    address: "15481 18ave"
};

console.log(person.address);
console.log(person.height);


let car: {
    maker: string,
    wheels: number,
    length: number,
    owner: string
}
    = {
    maker: "telsa",
    wheels: 4,
    length: 3,
    owner: "isaac"
};

console.log(car.maker)
console.log(car.owner)
const number1 = 5;
const number2 = 12893;
