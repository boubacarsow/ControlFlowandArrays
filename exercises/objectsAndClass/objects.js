// const myCar = {
//     make: "Honda",
//     model: "accord",
//     year: 1990,
//     nickname: "kiki",
//     isLoud: true,
//     isRunning: false

// }
// console.log(myCar.nickname);
// console.log(myCar.model);

// const groceryList = ["chicken", "broccoli", "rice"];

// groceryList[0] //first item
// groceryList[1] //second item

// const chicken = {
//     wing: 2,
//     flavor: "mojo",
//     eat: () => {
//         console.log("nom nom nom");
//     }
// }
// const house = {
//     doors: 9
// }

// house.window = 30;

// console.log(house);

// house.bathrooms = 7;
// house.hasGarden = true

// console.log(house);

// house.bathrooms = 6;
// console.log(house);

// const myPet = {
//     name: "bobby",
//     age: 1,
//     fave: ["jumping", "crying"],
//     canSpeakFrench: false,
//     canSolveRubik: false,
//     myCar: "Mitsubishi"
// }

// console.log(myPet.name);

// myPet.age = 10; //this is allowed
// console.log(myPet);

class Vehicle {
    //constructor
    constructor(vin, make, model) {
        this.vin = vin;
        this.make = make;
        this.model = model;
    }
}

const plane = new Vehicle("gsajaakkakaka", "Boeing");
const myFirstCar = new Vehicle("gajajajkaka", "Honda");
const car = new Vehicle('A1234', 'Toyota', 'Camry');

console.log(car);