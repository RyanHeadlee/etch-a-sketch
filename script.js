const container = document.querySelector(".container");
const playButton = document.querySelector(".playButton");
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
      playDiv.classList.add("sketched");
    });
  }
}