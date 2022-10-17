
console.log(one());

//function declaration
function one() {
    return 'one'
}


//function expression
const two = () =>{
    return 2;
}

console.log(two());

// const shortenedTwo = () => 2;

const arielStitt = {
    name: "ariel",
    occupation: "Technical Instructor",
    overTwentyOne: true,
    age: 99
}

const increaseAge = (person) => {
     //dot notation
     person.age += 1;
     console.log(`Hooray it's your ${person.age} birthdayyyyyyy`);
}

//call the function
increaseAge(arielStitt);