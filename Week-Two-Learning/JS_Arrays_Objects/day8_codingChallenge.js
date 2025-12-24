// Defining Test Users
const testUsers = [
  { username: "testUser", role: "tester", isActive: true },
  { username: "testUser2", role: "automation_engineer", isActive: true },
  { username: "testUser3", role: "qa_tester", isActive: true },
  { username: "testUser4", role: "manual_tester", isActive: false }
];

// Test Configuration Object
const testConfig = {
  baseURL: "https://google.com",
  browsers: ["chromium", "edge", "webkit", "firefox"],
  environments: ["staging", "production", "UAT"],
  defaultEnv: "UAT",
};

// Display Active Users
console.log("=== Active Users ===");
testUsers.forEach(user => {
  if (user.isActive) {
    console.log(`${user.username} - ${user.role}`);
  }
});

// Conditional Logic
if (testConfig.defaultEnv === "production") {
  console.log("⚠️ Stop, you're logging in Production");
} else {
  console.log("✅ You're running tests in the UAT and staging environments");
}

// Looping Browsers
console.log("=== Browser Testing ===");
for (const browser of testConfig.browsers) {
  console.log(`Running tests on ${browser}`);
}

// Test Summary
testConfig.summary = function () {
  const activeCount = testUsers.filter(u => u.isActive).length;
  console.log(`Base URL: ${this.baseURL}`);
  console.log(`Environments Available: ${this.environments.join(", ")}`);
  console.log(`Total Active Users: ${activeCount}`);
};

// Run Summary
console.log("=== Test Summary ===");
testConfig.summary();