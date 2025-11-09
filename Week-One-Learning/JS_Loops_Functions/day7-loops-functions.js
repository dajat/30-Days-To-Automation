//For Loop - repeating a known number -- assigning 1 to variable i. Step incrementally adds.
// for(let i = 1; i <= 3; i++) {
//     console.log(i)
// }

//While Loop - repeats condition until it is false
// let count = 1;
// while(count <=3) {
//     console.log(count);
//     count++;
// }

//Do While Loop - want to run an action at least once, even if the condition is false.
// let num = 5;
// do{
//     console.log("Do once");
//  } while (num < 3);

//  // Looping for array
// let fruits = ["apple", "banana", "mango"]
// fruits.forEach((fruit) => {
//     console.log(fruit)
// });

//Functions - use parameters (e.g. placeholder to define the function) and arguments (e.g. values)
// function add(a, b=0){
//     return a+b;
// }

// let sum = add(2, 3);
// console.log(sum)

//Function taking parameters for testLogin
function testLogin (username, password){
    const valid = username === "admin" && password === "Test1";
    return valid ? "success ✅" : "error ❌"  
    //valid is condition that's true or false. If valid is true then return success. If false, return error.
}

let testResult = testLogin("admin", "Test1")
console.log(testResult)