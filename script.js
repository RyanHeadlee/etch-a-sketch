const container = document.querySelector(".container");
const playButton = document.querySelector(".playButton");
const buttons = document.querySelectorAll(".color");
let color;
let playDivs;
let area;
let div;

// Creates the workspace via the given area. 

function createDivs(area) {
  container.setAttribute("style", "grid-template-columns: repeat(" + area + ", auto);");

  for (let i = 0; i < (area * area); i++) {
    div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("default");
  }
}

// When button is clicked ask for the height or width of the workspace.
// Button changes between play (default) and reset which deletes the workspace.

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
    area = Number(prompt("Size of the workspace: " + ""));
    
    if ((area > 100 || area < 0)|| Number(!area)) return; 
    
    createDivs(area);
    playButton.textContent = "Reset Sketch";
    playButton.classList.toggle("play");
    playButton.classList.toggle("reset");
    keepGoing = true;
    playSketch();
  }
});

// This function displays the color when the sketch is moused over. 

function playSketch() {
  playDivs = document.querySelectorAll(".default");
  for (let i = 0; i < playDivs.length; i++) {
    let playDiv = playDivs[i];

    playDiv.addEventListener('mouseover', function () {
      if (color == "empty") return;

      playDiv.classList.remove(...playDiv.classList);
      
      playDiv.classList.add(color);
    });
  }
}

// Will listen to clicks on the colors then properly display the correct color
// and will add an active toggle to the current button.

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains("active")) {
      color = "empty";
      return button.classList.remove("active");
    }
    
    color = button.classList[0];
    buttons.forEach(button => button.classList.remove("active"));
    button.classList.add("active");
  });
});