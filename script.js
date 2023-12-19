const drawingboard = document.querySelector(".drawingboard");
function buildGrid(gridSize) {
  
  let newRow;
  let box;
  for (let i = 0; i < gridSize; i++) {
    newRow = document.createElement("div");
    newRow.style.cssText = "display: flex; flex: 1;";

    for (let j = 0; j < gridSize; j++) {
      box = document.createElement("div");
      box.style.cssText = "flex:1; border: 0.5px solid hsl(0, 0%, 60%);";
      function addClickEvent(currentBox) {
        currentBox.addEventListener("click", () => {
            currentBox.style["background"] = "black";
        });
    }

    // Call the function with the current box
    addClickEvent(box);
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


