const container = document.querySelector(".container");
const playButton = document.querySelector(".playButton");
const colors = document.querySelectorAll(".color");
const input = document.querySelector(".colorInput");
const submit = document.querySelector(".colorSubmit");
let divColor;
let hexColor;
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
    
    if ((area > 100 || area < 0) || Number(!area)) return; 
    
    createDivs(area);
    playButton.textContent = "Reset Sketch";
    playButton.classList.toggle("play");
    playButton.classList.toggle("reset");
    playSketch();
  }
});

// This function displays the color when the sketch is moused over. 

function playSketch() {
  playDivs = document.querySelectorAll(".default");
  for (let i = 0; i < playDivs.length; i++) {
    let playDiv = playDivs[i];

    playDiv.addEventListener('mouseover', function () {
      if (hexColor !== "empty") {
          playDiv.classList.remove(...playDiv.classList);
          return playDiv.style.backgroundColor = "#" + hexColor;
      }

      if (divColor !== "empty") {
        playDiv.style.backgroundColor = "";
        playDiv.classList.remove(...playDiv.classList);
        playDiv.classList.add(divColor);
      }
      
      if (divColor == "empty") return;

      if (hexColor == "empty") return;
    });
  }
}

// Will listen to clicks on the colors then properly display the correct color
// and will add an active toggle to the current color selector.

colors.forEach(color => {
  color.addEventListener('click', () => {
    if (color.classList.contains("active")) {
      divColor = "empty";
      return color.classList.remove("active");
    }

    if (hexColor !== "empty")  {
      hexColor = "empty";
      submit.value = "Enter";
      return input.classList.remove("active");
    }
    
    divColor = color.classList[0];
    colors.forEach(color => color.classList.remove("active"));
    color.classList.add("active");
  });
});

// Will get the color code from input and correctly display in the workspace.

submit.addEventListener('click', () => {
  if (input.classList.contains("active")) {
    input.classList.remove("active");
    hexColor = "empty";
    return submit.value = "Enter";
  }

  if (input.value.length < 1) return;

  colors.forEach(color => color.classList.remove("active"));
  hexColor = input.value;
  input.classList.add("active");
  submit.value = "Reset";
  divColor = "empty";
});