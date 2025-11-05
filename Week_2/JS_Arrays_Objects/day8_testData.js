// Arrays for Test Data
let testUsers = ['john_smith', 'mark_pencil', 'mike_parsons'];

let browsers = ['chromium', 'firefox', 'edge', 'webkit'];

let environments = ["staging", "uat", "production"];

//Adding one more item to each array using .push()
testUsers.push ('molly_square');
browsers.push('safari');
environments.push('dev');

//Logging new testUsers
console.log(testUsers);
console.log(browsers);
console.log(environments);

// //Logging array length
console.log(testUsers.length)
console.log(browsers.length)
console.log(environments.length)

//Print specific value for each array using the index
console.log(testUsers[1])
console.log(browsers[3])
console.log(environments[2])

//Creating Objects
let QAuser = {
    username: "QAUser1",
    password: "password24",
    role: "QA Tester",
    isActive: true,
};
console.log(QAuser.username);
console.log(QAuser.role);
console.log(QAuser.isActive);

let QAuser2 = {
    username: "QAUser2",
    password: "password25",
    role: "QA Tester II",
    isActive: true,
};
console.log(QAuser2.username);
console.log(QAuser2.role);
console.log(QAuser2.isActive);

let QAuser3 = {
    username: "QAUser3",
    password: "password26",
    role: "QA Tester III",
    isActive: false,
};
console.log(QAuser3.username);
console.log(QAuser3.role);
console.log(QAuser3.isActive);

//Master Object
let testConfig = {
  baseUrl: "https://shopapp.test",
  browsers: ["chromium", "firefox", "webkit"],
  credentials: {
    admin: { username: "QAUserr", password: "QA@123" },
    standardUsers: ["QAuser1", "QAuser2", "QAuser3"]
  }
};

//Access and print items from testConfig
console.log(testConfig.browsers[1]);
console.log(testConfig.credentials.admin.username);
console.log(testConfig.credentials.standardUsers[0]);

//Adding include()
testConfig.browsers.includes('safari') || testConfig.browsers.push('safari'); //safari is not included
console.log(testConfig.browsers);