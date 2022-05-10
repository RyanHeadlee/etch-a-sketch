const container = document.querySelector(".container");
const playButton = document.querySelector(".playButton");
const black = document.querySelector(".blackButton");
const red = document.querySelector(".redButton");
const grey = document.querySelector(".greyButton");
const green = document.querySelector(".greenButton");
const blue = document.querySelector(".blueButton");
const yellow = document.querySelector(".yellowButton");
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
      if (color == "black") {
        playDiv.classList.remove("green", "sketched", "blue", "eraser", "yellow", "red");
        playDiv.classList.add("black");
      }
      if (color == "red") {
        playDiv.classList.remove("green", "sketched", "blue", "eraser", "yellow", "black");
        playDiv.classList.add("red");
      }
      if (color == "grey") {
        playDiv.classList.remove("green", "red", "blue", "eraser", "yellow", "black");
        playDiv.classList.add("sketched");
      }
      if (color == "green") {
        playDiv.classList.remove("yellow", "sketched", "red", "blue", "eraser", "black");
        playDiv.classList.add("green");
      }
      if (color == "blue") {
        playDiv.classList.remove("green", "sketched", "red", "eraser", "yellow", "black");
        playDiv.classList.add("blue");
      }
      if (color == "yellow") {
        playDiv.classList.remove("green", "sketched", "red", "eraser", "blue", "black")
        playDiv.classList.add("yellow");
      }
      if (color == "eraser") {
        playDiv.classList.remove("green", "sketched", "blue", "red", "yellow", "black");
        playDiv.classList.add("eraser");
      } 
      if (color == "empty") return;
    });
  }
}

black.addEventListener('click', () => {
  if (black.classList.contains("active")) {
    color = "empty";
    return black.classList.remove("active");
  }
  color = "black";
  buttons.forEach(button => button.classList.remove("active"));
  black.classList.add("active");
});
red.addEventListener('click', () => {
  if (red.classList.contains("active")) {
    color = "empty";
    return red.classList.remove("active");
  }
  color = "red"
  buttons.forEach(button => button.classList.remove("active"));
  red.classList.add("active");
});
grey.addEventListener('click', () => {
  if (grey.classList.contains("active")) {
    color = "empty";
    return grey.classList.remove("active");
  }
  color = "grey"
  buttons.forEach(button => button.classList.remove("active"));
  grey.classList.add("active");
});
green.addEventListener('click', () => {
  if (green.classList.contains("active")) {
    color = "empty";
    return green.classList.remove("active");
  }
  color = "green"
  buttons.forEach(button => button.classList.remove("active"));
  green.classList.add("active");
});
blue.addEventListener('click', () => {
  if (blue.classList.contains("active")) {
    color = "empty";
    return blue.classList.remove("active");
  }
  color = "blue"
  buttons.forEach(button => button.classList.remove("active"));
  blue.classList.add("active");
});
yellow.addEventListener('click', () => {
  if (yellow.classList.contains("active")) {
    color = "empty";
    return yellow.classList.remove("active");
  }
  color = "yellow"
  buttons.forEach(button => button.classList.remove("active"));
  yellow.classList.add("active");
});
eraser.addEventListener('click', () => {
  if (eraser.classList.contains("active")) {
    color = "empty";
    return eraser.classList.remove("active");
  }
  color = "eraser"
  buttons.forEach(button => button.classList.remove("active")); 
  eraser.classList.add("active");
});