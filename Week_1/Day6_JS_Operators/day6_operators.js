// Operations and Conditionals for automated test scripts
// let userName = "testUser123";
// let password = "correctPass";
// let loginAttempts = 0;
// let maxAttempts = 3;

// //Arthimetic Operators
// loginAttempts = loginAttempts + 1; //Addition
// let remainingAttempts = maxAttempts - loginAttempts; //Subtraction
// let totalTests = 5 * 3; //Multiplication
// let averageTime = 150 / 5; //Division

// console.log('Login Attempts:', loginAttempts);
// console.log('Remaining Attempts:', remainingAttempts);
// console.log('Total Tests:', totalTests);
// console.log('Average Time:', averageTime);

// //Comparison Operators
// let expectedTitle = 'Dashboard';
// let actualTitle = 'Dashboard';
// let expectedCount = 5;
// let actualCount = 5;

// // Equality Checks
// console.log('Titles match:', actualTitle === expectedTitle); //true
// console.log('Counts match:', actualCount === expectedCount); //true

// //Other Comparisions
// console.log('Attempts less than max:', loginAttempts < maxAttempts); //true
// console.log('Attempts greater than 0:', loginAttempts > 0); //true
// console.log('Passwords not empty:', password !== ''); //true

// //Used for equality checks!
// // = - used for assignment
// // == -  used to convert the type
// // === - used for strict equality

// //The difference between == and ===
// console.log('5 == \"5\":', 5 == '5'); //true (converts types - converts number to text)
// console.log('5 == \"5\":', 5 === '5'); //false (strict comparisons)

// //Conditional Logic -- making decisions. If/Else Statement
// if(userName === 'testUser123' && password === 'correctPass') {
//   console.log('✅ Login successful - proceeding to dashboard');
//   let isLoggedIn = true;
// } else if (loginAttempts >= maxAttempts) {
//   console.log('❌ Too many failed attempts - account locked');
// } else {
//   console.log('⚠️ Invalid credentials - try again');
// }

// //Switch Statement
// let testResult = "passed";
// switch (testResult) {
//       case "passed":
//           console.log('✅ Test passed - continuing test suite');
//           break;
//       case "failed":
//           console.log("❌ Test failed - taking screenshot");
//           break;
//       case "skipped":
//           console.log("⏩ Test skipped - moving to next test");
//           break;
//       default:
//           console.log("❓ Unknown test result");
// }

// //Logical Operators - combining conditions
// let pageLoaded = true;
// let elementVisible = true;
// let dataReady = false;

// //AND Operator -- all conditions must be true
// if (pageLoaded && elementVisible && dataReady) {
//   console.log('✅ Ready to run test');
// } else {
//   console.log('⏳ Waiting for conditions...');
// }

// //OR operator - at least one condition must be true
// if (userName ==='admin' || userName === 'testUser123') {
//   console.log('✅Authorized User');
// }

// //NOT operator - reverse the condition
// if (!dataReady) {
//   console.log('⏳Still loading data...');
// }

//Creating Operators and Conditions Challenge #1
// let loginAttempts = 3;
// let maxRetries = 1;
// let testResult = "Passed";

// switch (testResult.toLowerCase()) {
//   case "passed":
//     console.log("✅ All tests passed");
//     break;

//   case "failed":
//     console.log("❌ All tests failed");
//     break;

//   case "unknown":
//     console.log("⚠️ Unknown Error");
//     break;

//   default:
//     console.log("🤔 Unrecognized test result");
//     break;
// }

//Operators and Conditionals Challenge #2
let cartItems = 4;
let paymentSuccess = false;
let paymentFailed = true;

if (cartItems > 0) {
  console.log("🛒 Checkout started...");

  if (paymentSuccess) {
    console.log("✅ Order confirmed!");
  } else {
    console.log("❌ Payment failed — please try again.");
  }

} else {
  console.log("⚠️ No items in cart — add something first.");
}

if (paymentFailed) {
  console.log("⚠️ Payment Not Successful");
}