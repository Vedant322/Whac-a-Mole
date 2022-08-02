// Declare the constants and variables
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeleft = document.querySelector(".time-left");
const score = document.querySelector(".score");
const start = document.querySelector(".start");

let result = 0;
let hitPosition;
let currentTime = 20;
let timerId = null;

// Random Square
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

// Add eventlistener
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      console.log(result);
      score.textContent = result;
      hitPosition = null;
    }
  });
});

// Move Mole
function moveMole() {
  timerId = setInterval(randomSquare, 650);
}

// CountDown
function countDown() {
  currentTime--;
  timeleft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER! Your final score is: " + result);
    gsap.to(".grid", 1, {
      top: "-35%",
      ease: Expo.easeInOut,
    });
  }
}

let countDownTimerId = setInterval(countDown, 1000);

moveMole();
randomSquare();

var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

gsap.from(".grid", 2, {
  top: "-35%",
  ease: Expo.easeInOut,
});
