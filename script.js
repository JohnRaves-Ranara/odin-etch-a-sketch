const drawingboard = document.querySelector(".drawingboard");

function random(number) {
  return Math.floor(Math.random() * number + 1);
}

function buildGrid(gridSize) {
  
  let newRow;
  let box;
  let isMousePressed = false

  //handling mouse events for drawing
  function handleMouseDown() {
    isMousePressed = true;
  }
  
  function handleMouseUp() {
    isMousePressed = false;
  }
  
  function handleMouseHover() {
    if (isMousePressed) {
      this.style["background-color"] = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    }
  }

  //start grid build
  for (let i = 0; i < gridSize; i++) {
    newRow = document.createElement("div");
    newRow.style.cssText = "display: flex; flex: 1;";

    for (let j = 0; j < gridSize; j++) {
      box = document.createElement("div");
      box.style.cssText = "flex:1; border: 0.5px solid hsl(0, 0%, 60%);";
      box.addEventListener("mousedown", handleMouseDown);
      box.addEventListener("mouseup", handleMouseUp);
      box.addEventListener("mouseover", handleMouseHover);
      newRow.append(box);
    }
    
    drawingboard.append(newRow);
  }
}



function removeGrid(){
    drawingboard.innerHTML = '';
}

function rebuildGrid(gridSize){
    removeGrid()
    gridSizeLabel.textContent = `Grid Size: ${gridSlider.value} x ${gridSlider.value}`;
    buildGrid(gridSize)
}

const gridSlider = document.querySelector("#grid-slider");
const gridSizeLabel = document.querySelector(".grid-selector p");
gridSlider.value = 10;
gridSizeLabel.textContent = `Grid Size: ${gridSlider.value} x ${gridSlider.value}`;

gridSlider.addEventListener("input", () => {
    rebuildGrid(gridSlider.value)
  });

buildGrid(gridSlider.value)


