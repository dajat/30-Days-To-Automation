document.addEventListener("DOMContentLoaded", () => {
  const headerText = document.getElementById("headerText");
  const paragraphText = document.querySelector("#paragraphText");
  const changeColorBtn = document.getElementById("changeColorBtn");
  const changeTextBtn = document.getElementById("changeTextBtn");
  const addItemBtn = document.getElementById("addItemBtn");
  const QATestingList = document.querySelector("#QATestingList");

  const colors = ["#A3D9FF", "#FFB6C1", "#B19CD9", "#A0E7E5", "rgba(117, 18, 171, 0.27)"];
  const messages = [
    "You are learning QA Automation with consistent practice!",
    "Keep pushing you'll get better with Automation each day 💪",
    "Every click is a step closer to mastery!"
  ];

  // Change background color
  changeColorBtn.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });

  // Change paragraph text
  changeTextBtn.addEventListener("click", () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    paragraphText.textContent = randomMessage;
  });

  // Add new list item
  addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New QA Skill Added!";
    QATestingList.appendChild(newItem);
  });
});
