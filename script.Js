let box = document.getElementById("box");
let scoreText = document.getElementById("score");
let score = 0;

box.addEventListener("click", () => {
  score++;
  scoreText.innerText = score;

  let x = Math.random() * (window.innerWidth - 120);
  let y = Math.random() * (window.innerHeight - 120);

  box.style.left = x + "px";
  box.style.top = y + "px";
});