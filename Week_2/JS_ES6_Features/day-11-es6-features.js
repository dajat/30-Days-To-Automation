//1: Arrow Functions
const arrowLogin = (username, password) => {
    return `Logging In ${username} with password ${password}`;
}
// Arrow function short hand
const shortLogin = (username, password) => `Logging in ${username} with password ${password}`;

//2: Template Literals
const testUser ='john_doe';
const testEnv ='staging';
const testCount = 5;

//Short Hand
const newMessage = `Running ${testCount} tests for user ${testUser} in ${testEnv}`;

//3: Deconstructing
const testConfig = {
    baseURL: 'https://testapp.com',
    timeout: 30000,
    retries: 3,
    browser: 'chronium',
}

//Short Hand
const {baseURL, timeout} = testConfig;
console.log(baseURL, timeout);

//4: Spread Operator and merge objects(...)
const basicTests =['login', 'logout'];
const advancedTests =['api_test', 'performance_test'];

//Short Hand
const AllTests = [...basicTests, ...advancedTests, 'securityTests'];
console.log(AllTests);

//Merge objects
const defaultConfig = {timeout: 30000, retries: 3};
const customConfig = {...defaultConfig, browser: 'firefox'};
console.log(customConfig);

//5: Default Parameters
const runTest = (testName, browser = 'chronium', timeout = 30000) => {
    return `Running ${testName} on ${browser} with ${timeout}ms timeout`;
}
console.log(runTest('login_test'));
console.log(runTest('login_test', 'firefox')); //pararmeters are automatically defaulted 

//Enhanced Object Literals
const username = "test_user";
const password = "test_pass";

const user2 = {
    username,
    password
};
console.log(user2);

const user = {
    username: "admin",

    login: function() {
        return `${this.username} logged in`;
    },

    //New Way
    logout() {
        return `${this.username} logged out`;
    },
};

console.log(user.login());
console.log(user.logout());