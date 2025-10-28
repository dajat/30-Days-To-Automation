// Day 6 - Operators & Conditionals Practice

let totalTests = 150;          // total number of test cases
let passedTests = 145;         // passed count
let failedTests = totalTests - passedTests;
let passRate = (passedTests / totalTests) * 100;

let environment = "production";  // can be "staging" or "production"
let isStable = true;          // true or false

console.log("📊 Test Summary:");
console.log("Total:", totalTests, "| Passed:", passedTests, "| Failed:", failedTests);
console.log("Pass Rate:", passRate + "%");

// Conditional Logic
if (passRate >= 90 && isStable && environment === "production") {
  console.log("✅ Build Approved for Production Deployment");
} else if (passRate >= 75 && environment === "staging") {
  console.log("⚠️ Build Acceptable for Staging - Needs Further Testing");
} else if (passRate >= 50 || isStable) {
  console.log("🟡 Partial Pass - Proceed with Caution");
} else {
  console.log("❌ Build Failed QA Validation");
}