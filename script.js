let size = 16;
const grid = document.querySelector("#grid");

for (i = 0; i < size; i++){

    for (j = 0; j < size; j++){
        let square = document.createElement("div");
        square.classList.add('square');
        grid.appendChild(square);
    }
}

const squareSizePercentage = 100 / size;
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.style.flex = `1 1 calc(${squareSizePercentage}% - 4px)`;
});