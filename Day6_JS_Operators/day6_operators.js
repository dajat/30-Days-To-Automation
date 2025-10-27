//Creating Operators and Conditions

let loginAttempts = 3;
let maxRetries = 1;
let testResult = "Passed";

switch (testResult.toLowerCase()) {
  case "passed":
    console.log("✅ All tests passed");
    break;

  case "failed":
    console.log("❌ All tests failed");
    break;

  case "unknown":
    console.log("⚠️ Unknown Error");
    break;

  default:
    console.log("🤔 Unrecognized test result");
    break;
}

