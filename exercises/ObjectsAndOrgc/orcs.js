// const adventurer = {
//     name: "boubacar",
//     hitpoints: 10,
//     belongings: ["sword", "potion", "tums"],
//     companion: {
//         name: "peanut",
//         type: "corgi",
//         companion: {
//             name: "tick",
//             type: "parasite",
//             belongings: ["scuba tank", "rogan josh", "health insurance"]
//         }

//     }
// }

//console.log(adventurer.belongings[0]);

// for(let i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }
// console.log(adventurer.companion);
// console.log(adventurer.companion.name);
// console.log(adventurer.companion.name.type);

// console.log(adventurer.companion.companion.type);

// //Get health insurace

// console.log(adventurer.companion.companion.belongings[2]);

// const movies = [
//     {title: "Tokyo Story" },
//     {title: "Paul Blart: Mall Cop" },
//     {title: "L'Aveventura" },
// ];

// // console.log(movies); //my array of objects
// // console.log(movies[0]); //first object in the array
// // console.log(movies[0].title);

// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i]);
//     console.log(movies[i].title);
// }

// const foo = {
//     someArray: [1, 2, 3],
//     someObject: {
//         someProp: 'oh hai, mark'
//     },
//     someMethod: () => {
//         console.log("inside of method");
//     }
// }

// console.log(foo.someObject.someProp); // oh hai
// console.log(foo.someArray[0]); // [...]
// console.log(foo.someMethod());

// const foo = [
//     [1, 2, 3, 4], //0
//     [5, 6, 7, 8], //1
//     [9, 10, 11, 12] //2
// ]

// console.log(foo[1],[2]);
// const foo = [
//     1,
//     "hi",
//     () => {
//         console.log("fun");
//     }
// ];

// console.log(foo[2]() );

// const player = {
//     name: "Josh the Great",
//     health: 1000,
//     power: 1000,
//     stamina: 1000
// }

// const bigBadBoss = {
//     name: "Nagardo the Merciless",
//     health: 100000000,
//     power: 100000000,
//     stamina: "infinity"
// }

// const createEnemy = 

class Character {
    greet(otherCharacter) {
        console.log("hi " + otherCharacter + "!");
    }

}

const p1 = new Character();
const enemy = new Character();

console.log(p1.greet("bob"));