//1: Arrow Functionss
const testNames = ["Login", "Search", "Logout"];
const reportName = "Test Passed";
const reportNameTwo = "Test Failed";

// // Function to simulate running tests
const runTest = testName => {
  console.log(`✅ Starting ${testName}`);
  console.log(`🔎 Running ${testName}`);
  console.log(`✌🏽 Finishing ${testName}`);
};

// // Arrow function to report test status
const reportStatus = (status, testName) => {
  console.log(`📈 ${status}: ${testName}`);
};

// Loop through all tests
testNames.forEach(test => {
  runTest(test);

  // You can simulate pass/fail dynamically if you want
  const passed = Math.random() > 0.5; // random pass/fail
  if (passed) {
    reportStatus("✅ Test Passed", test);
  } else {
    reportStatus("❌ Test Failed", test);
  }

  console.log('------------------------');
});

// //2: Template Literals
let user = "Jason";
let env = "Staging";
let totalTests = 5;
let browser = 'chronium';

console.log(`Running ${totalTests} tests for ${user} in the ${env} environment.`);
console.log(`Executing all ${totalTests} test cases in ${browser} on ${env} environment.`)

// //3: Destructuring
const config = { baseURL: "https://qa-app.com", timeout: 3000, retries: 2, newbrowser: 'Firefox' };
const { baseURL, timeout, newbrowser } = config;

console.log(`Base URL: ${baseURL}, Timeout: ${timeout}ms`, {newbrowser});

// //4: Spread Operator
const uiTests = ["Login Test", "Profile Update Test"];
const apiTests = ["API Response Test", "Token Validation Test"];
const allTests = [...uiTests, ...apiTests, "Final Report Generation"];
const securityTests = ["Auth Bypass Test", "Data Encryption Test"];
const completeTests = [...uiTests, ...apiTests, allTests, securityTests]

console.log(completeTests);

// //5: Default Parameters
function executeTest(testName = "Unnamed Test", browser = "Chromium", timeout = 5000) {
  console.log(`Running ${testName} on ${browser} with ${timeout}ms timeout`);
}

executeTest();
executeTest("Login Flow", "Firefox");

// //6. Enhanced Literals
const username = "qaUser";
const password = "test@123";
const successLogin = "🎉User Successfully Logged In!"

const credentials = { username, password };
console.log(credentials, successLogin);

//Combined Challenge - ES6 Test Runner

//Variables
const testEnv = ["dev", "sit", "uat"];
const testingNames = ["Login", "Log Out", "Customer Functionality", "Vendor Functionality"];
const successReport = ["Test Passed"];
const failedReport = ["Test Failed"];
let username1 = "john_smith";
let mainPassword = "successtest1";
const mainCredentials = {username1, mainPassword};
const mainBrowser = ['chronium', 'firefox', 'webkit', 'edge'];
const mainURL = "https://testamplify.com"

//Arrow Function
const runTests = testingNames => {
  console.log(`✅ Running ${testingNames} in ${testEnv}`)
}

//Template Literals
console.log(`Run all ${testingNames} in the main ${testEnv} and in mainBrowser: 'firefox' for the current sprint`);

//Destructuring
console.log(`Log the ${successReport} and ${failedReport} in the mainBrowser: 'chronium'`);

//Default Parameters
console.log(`Running all ${successReport}`);

//Enhanced Literals
console.log(mainCredentials, mainURL);