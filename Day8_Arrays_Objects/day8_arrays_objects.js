//Arrays -- store multiple calues in a single variable
let grocery_list = ["eggs", "almond milk", "bread", "noodles"];

console.log(grocery_list[0])
console.log(grocery_list.length)

let testUsers = ["john doe", "jane doe", "admin user"];
let testPasswords = ["password1", "password25", "pass10"];

//push() - adding to end of array
//unshift() - adding to the beginning of array
//slice() - provides a subset
//includes() - check if a value exists

testUsers.push('new_tester');
console.log(testUsers);

//Objects - store data in key-value pairs
let card = {
    fullName: "Michael";
    email: "testeremail@email.com";
    phone: 5554565678;
}