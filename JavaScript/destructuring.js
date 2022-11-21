// when trying to access items in an array we usually do the following:

let ages = [10,11,12]
let john = ages[0]
let mary = ages[1]
let colm = ages[2]
console.log(john)

// with destructuring we can do this in a single line of code
let ages2 = [13,14,15]
let [sarah, connie, rachel] = ages2
console.log(sarah)

// same approach for objects

let jobs = {
    mike: "designer",
    jill: "developer",
    maria: "assistant"
};

let mike = jobs.mike
let jill = jobs.jill
let maria = jobs.maria
console.log(maria)

// with destructuring we can do this in a single line of code
let jobs2 = {
    mikey: "designer",
    jillian: "developer",
    marianne: "assistant"
};

let {mikey, jillian, marianne} = jobs2

console.log(mikey)

// do not need to use every item in the array
let languages = ["english", "irish", "german", "italian"];
let [native, conversational] = languages;
console.log(native,conversational);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "irish",
    thirdLanguage: "german"
}

let {firstLanguage, thirdLanguage} = languages2
console.log(firstLanguage, thirdLanguage)

// can use commas to skip items in array
let teams = ["mclaren", "ferrari", "mercedes", "redbull"];
let [, ,team1,team2] = teams;
console.log(team1, team2);


// using the rest operator to create an array of remaining items

let fruits = ["apple", "banana", "grape", "raisin", "orange"]
let [fruit1, fruit2, ...rest] = fruits
console.log(fruit1, fruit2)
console.log(rest)

