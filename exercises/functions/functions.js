
// console.log(one());

// //function declaration
// function one() {
//     return 'one'
// }


// //function expression
// const two = () =>{
//     return 2;
// }

// console.log(two());

// // const shortenedTwo = () => 2;

// const arielStitt = {
//     name: "ariel",
//     occupation: "Technical Instructor",
//     overTwentyOne: true,
//     age: 99
// }

// const increaseAge = (person) => {
//      //dot notation
//      person.age += 1;
//      console.log(`Hooray it's your ${person.age} birthdayyyyyyy`);
// }

// //call the function
// increaseAge(arielStitt);

// {
//     name: "Maria",
//     skills: ["html", "css",]
// }

// let maria = getDevObject("Maria", "HTML", "CSS", "JavaScript")

// function getDevObject(name, ...skills)
// return( )

// function getDevObject(name) {
//     let skills = [];
//     for(let i = 1; i < arguments.length; i++) {
//         skills.push(arguments[i]);
//     }

//     return {
//        devName: name,
//        jobskills: skills
//     }
// }

//console.log(getDevObject(maria))


// const sayName = (name) => {
//     //console.log('Hello my name is ' + name); //concatenation
//     console.log('Hello my name is ${name}');
// }

// sayName("Kadija");
// sayName("Max the Maverick");
// sayName("Overton");

const calculateArea = (num1, num2) => {
    console.log('The area of a triangle with a width of '+ num1 +'_ and a height of '+ num2 + '_ is '+  (num1 * num2)/2 +' square units.');
}

calculateArea(38, 18);