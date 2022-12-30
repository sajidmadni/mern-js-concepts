// Var scope
function addTwoNumbersWithVar(){
    const i =0
    for(let i=2; i < 5; i++){
        console.log(i);
    }
    console.log("Outside of for loop", i)
}
addTwoNumbersWithVar();
console.log("================")

// // let scope
function addTwoNumbersWithLet(){
    for(let i=0; i < 5; i++){
        console.log(i);
    }
    console.log("Outside of for loop", i)
}
addTwoNumbersWithLet();

// Template literals OR String interpolation
let varA = 10;
let varB = 20;
let sum = varA + varB;
let output = "Sum of " +varA+ " and " +varB+ " is " + sum;
let output2 = `Sum of ${varA} and ${varB} is ${sum}`;
console.log(output)

const myArr = [1,2,3,4,5];
// Map method. This will iterate each element of array and return new array i.e. old array will intact.
myArr.map(value =>{
    return value;
})

// Reduce method
const reduceArr = [100,25]
reduceArr.reduce(myFunc);

function myFunc(a, b){
    return a + b;
}

// Spread Operator
const myArr1 = [1,2,3];
const myArr2 = [4,5,6];
// These are old ways to modify elements of array
myArr1.unshift(0)    // this will insert element at first location i.e. begining of array
myArr1.push(8)   // add element to end of an array
myArr2.push(7)
console.log(myArr1.concat(myArr2))
// Newest ways i.e. spread operator 
const newArray = [0,...myArr1,"MERN", ...myArr2, "sjdhfljask"];
console.log(newArray)


// Array destructuring
const stringArr = ["First", "Second"]
// Old way to get elements of array
console.log(stringArr[0])
let firstElement = stringArr[0]
let secondEle = stringArr[1]
// New way to get array elements using array destructuring
const [first, second] = stringArr;
console.log(first);
console.log(second);

// Object destructuring
const myObj = {
    id: 1,
    studnetName: "Ali",
    studnetClass: "Mern"
}
// old way to access object values
let stdId = myObj.id;
let nameVal = myObj.studnetName;
let className = myObj.studnetClass;
console.log(stdId);
console.log(nameVal);
console.log(className);
// New way using object destructuring
const {id, studnetName: std, studnetClass} = myObj;
console.log(id);
console.log(std);
console.log(studnetClass);
