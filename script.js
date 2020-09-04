const container = document.getElementById('container');
let rows = 16;
let cell;

// Create grid function 
function createGrid (row) {
    container.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
    let square = row * row;
    for (let i=0; i<square; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    }
}

// Initial grid load
createGrid(rows);

// Draw cells function
function cellDraw () {
    cell = document.getElementsByClassName('content');
    for (let i=0; i<cell.length; i++) {
        cell[i].addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
        });
    }
}

// Paint black
cellDraw();