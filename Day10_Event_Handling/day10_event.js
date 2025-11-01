// Step 1: Target Elements
const clickBox = document.getElementById("clickBox");
const hoverBox = document.getElementById("hoverBox");
const resetBtn = document.getElementById("resetBtn");
const simulateBtn = document.getElementById("simulateBtn");
const eventLog = document.getElementById("eventLog");

let clickCount = 0;

// Utility Function to Log Messages
function logEvent(message) {
  const logEntry = document.createElement("div");
  logEntry.textContent = message;
  eventLog.appendChild(logEntry);
  eventLog.scrollTop = eventLog.scrollHeight;
}

// Click Event
clickBox.addEventListener("click", () => {
  clickCount++;
  clickBox.style.backgroundColor = "lightgreen";
  clickBox.textContent = `Clicked ${clickCount} time(s)`;
  logEvent(`Box clicked ${clickCount} time(s)`);
});

// Mouse Over Event
hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "yellow";
  hoverBox.textContent = "Mouse Over!";
  logEvent("Mouse entered hover box");
});

hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.backgroundColor = "lightgray";
  hoverBox.textContent = "Hover Over Me";
  logEvent("Mouse left hover box");
});

// Reset Event
resetBtn.addEventListener("click", () => {
  clickCount = 0;
  clickBox.style.backgroundColor = "lightgray";
  clickBox.textContent = "Click Me";
  hoverBox.style.backgroundColor = "lightgray";
  hoverBox.textContent = "Hover Over Me";
  eventLog.innerHTML = "";
  logEvent("Reset all elements");
});

// Simulate Event
simulateBtn.addEventListener("click", () => {
  logEvent("Simulating click + hover events...");
  clickBox.click();
  hoverBox.dispatchEvent(new Event("mouseenter"));
  hoverBox.dispatchEvent(new Event("mouseleave"));
  logEvent("Simulation complete");
});