// The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
// a condition followed by a question mark (?)
// then an expression to execute if the condition is truthy followed by a colon (:), 
// and finally the expression to execute if the condition is falsy.
// This operator is frequently used as an alternative to an if...else statement.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator


//ternary operator sample 1.1
function club(isMember){
    return(isMember ? "yes" : "no");

}
const isMember = false
console.log(club(isMember))

//if else sample 1.1
const isMemberSample = true
function clubSample(isMemberSample){
    if (isMemberSample == true){
        return "yes-if"
    }
    else{
        return "no-if"
    }
}

console.log(clubSample(isMemberSample));