// Step 1: Select Elements
const clickBox = document.getElementById("clickBox");
const hoverBox = document.getElementById("hoverBox");
const doubleBox = document.getElementById("doubleBox");
const resetBtn = document.getElementById("resetBtn");
const simulateBtn = document.getElementById("simulateBtn");
const log = document.getElementById("log");
const usernameInput = document.getElementById("usernameInput");
const formSubmitBtn = document.getElementById("formSubmitBtn");

// Utility function to log events
function logEvent(message) {
  const entry = document.createElement("div");
  entry.textContent = message;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
}

// Step 2: Handle Click
let clickCount = 0;
clickBox.addEventListener("click", () => {
  clickCount++;
  clickBox.style.backgroundColor = "#9be7ff"; //changing the background each interaction
  clickBox.textContent = `Clicked ${clickCount}`; //what's displayed on plain text
  logEvent(`Clicked box ${clickCount} time(s)`); //logged information for each interaction
});

// Step 3: Handle Hover (mouseenter + mouseleave)
hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "yellow";
  hoverBox.textContent = "Hovered!";
  logEvent("Mouse entered hover box");
});
hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.backgroundColor = "lightgray";
  hoverBox.textContent = "Hover Me";
  logEvent("Mouse left hover box");
});

// Step 4: Handle Double Click
doubleBox.addEventListener("dblclick", () => {
  doubleBox.style.backgroundColor = "lightgreen";
  doubleBox.textContent = "Double Clicked!";
  logEvent("Double click detected on doubleBox");
});

// Step 5: Reset Button
resetBtn.addEventListener("click", () => {
  clickCount = 0;
  clickBox.style.backgroundColor = hoverBox.style.backgroundColor = doubleBox.style.backgroundColor = "lightgray";
  clickBox.textContent = "Click Me";
  hoverBox.textContent = "Hover Me";
  doubleBox.textContent = "Double Click Me";
  log.innerHTML = "";
  logEvent("Reset all boxes and logs");
});

// Step 6: Username Input — log key presses
usernameInput.addEventListener("keydown", (event) => {
  logEvent(`Key pressed: ${event.key}`);
});

// Bonus: Detect Enter key to submit
usernameInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    logEvent("Enter pressed — submitting form...");
    handleFormSubmit();
  }
});

// Step 7: Submit Button
formSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // prevent form reload
  handleFormSubmit();
});

function handleFormSubmit() {
  const username = usernameInput.value.trim();
  if (username) {
    logEvent(`Form Submitted! Username: ${username}`);
  } else {
    logEvent("Form Submitted! (No username entered)");
  }
}

// Step 8: Simulate Events Programmatically
simulateBtn.addEventListener("click", () => {
  logEvent("Simulating click + hover + dblclick...");
  clickBox.click();
  hoverBox.dispatchEvent(new Event("mouseenter"));
  hoverBox.dispatchEvent(new Event("mouseleave"));
  doubleBox.dispatchEvent(new Event("dblclick"));
  formSubmitBtn.dispatchEvent(new Event("click"));
  logEvent("Simulation complete ✅");
});
