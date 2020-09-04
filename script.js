const container = document.getElementById('container');
let rows = 16;
let cell;
let color = "black";

// Create grid function 
function createGrid (row) {
    container.textContent = "";
    container.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
    let square = row * row;
    for (let i=0; i<square; i++) {
        cell = document.createElement('div');
        cell.classList.add("content");
        container.appendChild(cell);
    }
}

// Initial grid load
createGrid(rows);

// Change size
function changeSize() {
    rows = prompt("Enter how many rows you want between 1 and 64");
    createGrid(rows);
    cellDraw(color);
}

// Change to black
function black() {
    color = "black";
    cellDraw(color);
}

// Change to rainbow
function rainbow() {
    color = "rainbow";
    cellDraw(color);
}

// Get random numbers
function gR(min, max) {
    return Math.random() * (max - min) + min;
}

// Draw cells function
function cellDraw (tint) {
    if (tint === "black") {
        cell = document.getElementsByClassName('content');
        for (let i=0; i<cell.length; i++) {
            cell[i].addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "black";
            });
        }
    }
    else {
        cell = document.getElementsByClassName('content');
        for (let i=0; i<cell.length; i++) {
            cell[i].addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "rgb(" + gR(0,266) + "," + gR(0,266) + "," + gR(0,266) + ")";
            });
        }
    }
}

// Reset button
function reset() {
    window.location.reload();
}

// Paint black
cellDraw(color);