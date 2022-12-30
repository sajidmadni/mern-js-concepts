// Callback hell

firstFunction( parameter, function(){
    // some stuff here
    secondFunction(paramter2, function(){
        // some more calculations here
        thirdFunction(paramter2, function(){
            // ....
        })
        // and so on
    })
})

// Code looks ugly, difficult to read and debug
// Used the Promises
// Promises has 3 states: pending, fulfilled and rejected

const myPromise = new Promise((resolve, rejected) => {
    const error = false;
    if(!error){
        resolve("Promise has been resolved successfully")
    } else {
        rejected("Promises didn't fulfilled and rejected")
    }
})

console.log(myPromise);

// This above acutally doesn't get he real value of promise, instead this get the state of promise
// So what we need to do to get the value of promise? use the thenable concept. So, what does it mean, let's take the following code
myPromise
.then( value => {
    console.log("Value of promise is: ", value)
    return 10;
})
// Even we can use multiple then 
.then(newValue => {
    console.log("Another promise then: ", newValue + 20);
})
// What if we change the error value to true on line #19
// Since promises didn't fulfilled and rejected but above we are actually expecting that promise was fulfilled. So, in order to solve the 
// problem use catch to catch the error
.catch(error => {
    console.log("Catch the error here: ", error)
})
