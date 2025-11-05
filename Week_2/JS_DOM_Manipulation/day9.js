document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  const mainTitle = document.getElementById("mainTitle");
  const demoText = document.querySelector("#demoText");
  const changeTextBtn = document.querySelector("#changeText");
  const testList = document.querySelector("#testList");
  const allElementsBtn = document.querySelectorAll("allElements");

  console.log("Element found:", { mainTitle, demoText, changeTextBtn, testList, allElementsBtn });

  const messages = [
    "Text updated successfully!",
    "Perfect for automation testers!",
    "Now the DOM feels alive!",
    "Dynamic updates achieved!"
  ];

  changeTextBtn.addEventListener("click", function() {
    console.log("Change Text button clicked!");
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]; //return values each time the changed button is clicked
    demoText.textContent = randomMessage;
  });
});

document.body.style.backgroundColor = "dark gray";