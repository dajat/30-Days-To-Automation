//Arrow Functions
const arrowLogin = (username, password) => {
    return `Logging In ${username} with password ${password}`;
}
// Arrow function short hand
const shortLogin = (username, password) => `Logging in ${username} with password ${password}`;

//Template Literals
const testUser ='john_doe';
const testEnv ='staging';
const testCount = 5;

//Short Hand
const newMessage = `Running ${testCount} tests for user ${testUser} in ${testEnv}`;

//Deconstructing
const testConfig = {
    baseURL: 'https://testapp.com',
    timeout: 30000,
    retries: 3,
    browser: 'chronium',
}

//Short Hand
const {baseURL, timeout} = testConfig;
console.log(baseURL, timeout);

//Spread Operator and merge objects(...)
const basicTests =['login', 'logout'];
const advancedTests =['api_test', 'performance_test'];

//Short Hand
const AllTests = [...basicTests, ...advancedTests, 'securityTests'];
console.log(AllTests);

//Merge objects
const defaultConfig = {timeout: 30000, retries: 3};
const customConfig = {...defaultConfig, browser: 'firefox'};
console.log(customConfig);