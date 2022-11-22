// used to execute a function on all elements

// using a for loop

let nums = [1,2,3,4,5];
let results = [];

for(let num of nums){
    results.push(num*2)
}
console.log(results)

// using the map method
const multiplyNums = (num) => num * 3

//now the multiply nums function will be called on every item in the array
let mapResults = nums.map(multiplyNums)
console.log(mapResults)

// easier way to complete instead of calling methd within map, can also call without arrow syntax
let mapResults2 = nums.map(num => num * 5)
console.log(mapResults2)

// using objects
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

  const studentsWithIds = students.map(student => [student.name, student.id]);
  console.log(studentsWithIds);

