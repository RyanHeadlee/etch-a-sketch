const container = document.querySelector(".container");
const playButton = document.querySelector(".playButton");
const red = document.querySelector(".redButton");
const grey = document.querySelector(".greyButton");
const green = document.querySelector(".greenButton");
const blue = document.querySelector(".blueButton");
const eraser = document.querySelector(".eraserButton");
const buttons = document.querySelectorAll(".color");
let color;
let playDivs;
let area;
let div;

function createDivs(area) {
  container.setAttribute("style", "grid-template-columns: repeat(" + area + ", auto);");

  for (let i = 0; i < (area * area); i++) {
    div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("default");
  }
}

playButton.addEventListener("click", () => {
  if (playButton.classList.contains("reset")) {
    while (container.childNodes.length > 0) {
      container.removeChild(container.firstChild);
    }
    playButton.textContent = "Click Here to Play!";
    playButton.classList.toggle("reset");
    playButton.classList.toggle("play")
    return;
  }
  
  if (playButton.classList.contains("play")) {
    area = Number(prompt("Size of sketch area:" + ""));
    
    if (area > 100 || Number(!area)) return; 
    
    createDivs(area);
    playButton.textContent = "Reset Sketch";
    playButton.classList.toggle("play");
    playButton.classList.toggle("reset");
    keepGoing = true;
    playSketch();
  }
});

function playSketch() {
  playDivs = document.querySelectorAll(".default");
  for (let i = 0; i < playDivs.length; i++) {
    let playDiv = playDivs[i];

    playDiv.addEventListener('mouseover', function () {
      if (color == "red") {
        playDiv.classList.remove("green", "sketched", "blue", "eraser");
        playDiv.classList.add("red");
      }
      if (color == "grey") {
        playDiv.classList.remove("green", "red", "blue", "eraser");
        playDiv.classList.add("sketched");
      }
      if (color == "green") {
        playDiv.classList.remove("sketched", "red", "blue", "eraser");
        playDiv.classList.add("green");
      }
      if (color == "blue") {
        playDiv.classList.remove("green", "sketched", "red", "eraser");
        playDiv.classList.add("blue");
      }
      if (color == "eraser") {
        playDiv.classList.remove("green", "sketched", "blue", "red");
        playDiv.classList.add("eraser");
      }
    });
  }
}

red.addEventListener('click', () => {
  color = "red"
  buttons.forEach(button => button.classList.remove("active"));
  red.classList.add("active");
});
grey.addEventListener('click', () => {
  color = "grey"
  buttons.forEach(button => button.classList.remove("active"));
  grey.classList.add("active");
});
green.addEventListener('click', () => {
  color = "green"
  buttons.forEach(button => button.classList.remove("active"));
  green.classList.add("active");
});
blue.addEventListener('click', () => {
  color = "blue"
  buttons.forEach(button => button.classList.remove("active"));
  blue.classList.add("active");
});
eraser.addEventListener('click', () => {
  color = "eraser"
  buttons.forEach(button => button.classList.remove("active")); 
  eraser.classList.add("active");
});