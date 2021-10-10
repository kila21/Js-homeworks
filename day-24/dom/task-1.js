const highlitedDiv = document.getElementById("textBox");
const boldedWords = document.querySelectorAll("strong");
highlitedDiv.addEventListener("mouseenter", function () {
  boldedWords.forEach((value) => {
    value.style.color = "green";
    value.style.fontSize = "20px";
  });
});

highlitedDiv.addEventListener("mouseleave", function () {
  boldedWords.forEach((value) => {
    value.style.color = "black";
    value.style.fontSize = "";
  });
});
