//  NO SPREAD OPERATOR

let arr1 = [1,2,3]
let arr2 = arr1;
arr2.push(4);
console.log("Second Array: ", arr2);
console.log("First Array: ", arr1);
// issue is that the push method is new item into both arrays
// because arr2 is a new variale pointing to the same object arr1


// COPYING AN ARRAY
let arr3 = [4,5,6]
let arr4 = [...arr3]
arr4.push(7)
console.log("Thirs Array: ", arr3);
console.log("Fourth Array: ", arr4);
// the 3 dots in the syntax for the spread operator, it is spreading the value of arr3 into arr4
// giving a simple way to create an entirely new object

// COPYING OBJECTS
// syntax also works for copying objects

let object1 = {a:1, b:2, c:3};
let object2 = {...object1, d:4};
let object3 = {...object1, b:5}
console.log("Object 1 ", object1);
console.log("Object 2: ", object2);
console.log("Object 3 - overiding: ", object3);

//COPYING ONLY PART IF AN ARRAY/OBJECT
let arr5 = [...arr1, {...object1}, ...arr3, "hello"]
console.log(arr5)
