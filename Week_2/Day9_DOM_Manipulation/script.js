document.addEventListener("DOMContentLoaded", () => {
  const headerText = document.getElementById("headerText");
  const paragraphText = document.querySelector("#paragraphText");
  const changeColorBtn = document.getElementById("changeColorBtn");
  const changeTextBtn = document.getElementById("changeTextBtn");
  const addItemBtn = document.getElementById("addItemBtn");
  const QATestingList = document.querySelector("#QATestingList");
  const refreshMotivationBtn = document.getElementById("refreshMotivationBtn");

  const colors = ["#A3D9FF", "#FFB6C1", "#B19CD9", "#A0E7E5", "rgba(117, 18, 171, 0.27)"];
  
   const headers = [
    "QA Automation Rocks 🚀",
    "Keep Going — Automation Awaits 🔧",
    "<em>Day by Day</em>, Test by Test!",
    "You're <strong>Crushing</strong> Your Automation Goals! 💪"
  ];

  const messages = [
    "<strong>You are learning QA Automation</strong> with consistent practice!",
    "<i>Keep pushing you'll get better with Automation each day 💪</i>",
    "<em>Every click</em> is a step closer to mastery!</em>"
  ];

  //Change Header, background, and paragraph
  refreshMotivationBtn.addEventListener("click", () => {
    const randomHeader = headers[Math.floor(Math.random() * headers.length)];

    headerText.innerHTML = randomHeader;
  });

  // Change background color
  changeColorBtn.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });

  // Change paragraph text
  changeTextBtn.addEventListener("click", () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    paragraphText.innerHTML = randomMessage;
  });

  // Add new list item
  addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.innerHTML = "New QA Skill Added!";
    QATestingList.appendChild(newItem);
  });
});