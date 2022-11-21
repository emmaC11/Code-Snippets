
// VANILLA JS
// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// let sum = addTwoNumbers(1,2)
// console.log(sum)

// ARROW FUNCTION W PARAMETERS

// we replace the keyword function with const
// then equal relates to the parameters
// then the arror keyword with the code block below

const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

let sum = addTwoNumbers(3,2)
console.log(sum)


const multiplyNums = (a,b,c) =>{
    return a*b*c
}
console.log(multiplyNums(2,1,1));

// SINGLE LINE ARROW FUNCTIONS - will use these when simple function etc, will need parenthesis like above if more complex
const addThreeNumbers = (x,y,z) => x + y + z
console.log(addThreeNumbers(1,2,3))

const addingTwoNumbers = (a,b) => a + b;
console.log(addingTwoNumbers(2,2));

const multiplyingNums = (num1, num2, num3) => num1*num2*num3;
console.log(multiplyingNums(1,1,1))

// IMPLICIT RETURNS
const userAge = (age) => console.log(`age is ${age}`);
userAge(21)

const message = () => console.log("hello there");
message()



