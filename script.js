const container = document.querySelector(".container");
const playButton = document.querySelectorAll(".playButton");
const playDiv = document.querySelectorAll(".default");
let area;
let div;
let keepGoing = false;

function createDivs(area) {
  if (area > 100 || Number(!area)) return; 
  container.setAttribute("style", "grid-template-columns: repeat(" + area + ", auto);");

  for (let i = 0; i < (area * area); i++) {
    div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("default");
  }
}

// event listener for mouse over
//   when div is moused over 
//     change background color of div

function playSketch() {
  while (keepGoing === true) {
    playDiv.addEventListener("mouseover", () => {
      playDiv.classList.add("sketched");
      console.log("Hello");
    });
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
    createDivs(area);
    playButton.textContent = "Reset Sketch";
    playButton.classList.toggle("play");
    playButton.classList.toggle("reset");
    keepGoing = true;
    playSketch();
  }
});