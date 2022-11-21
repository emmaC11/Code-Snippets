//my function with 2 param

const sumNums = (a,b) => a+b
console.log(sumNums(2,2))

// here the extra parameter is ignored
console.log(sumNums(2,2,2));

// to bypass this we use the rest parameter
// create function using the rest parameter

const sumRest = (a,b, ...rest) => {
    let sum = a + b;

    for(let i of rest){
        sum += i
    }
   
    return sum
}

console.log(sumRest(2,2,2,2,2,2))