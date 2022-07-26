const container = document.getElementById("container");
const sizeValue = document.getElementById("size-value");
const sizeSlider = document.getElementById("size-slider");

let gridItems = Array.from(document.querySelectorAll('.grid-item'));

function makeGrid(rows, columns, color) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-colums', columns);
  for (i = 0; i < (rows * columns); i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  };

  gridItems = Array.from(document.querySelectorAll('.grid-item'));

  gridItems.forEach((gridItem) =>
    gridItem.addEventListener('mouseover',
      e => e.target.style.backgroundColor = color)
  )
};

makeGrid(16, 16, 'black');

sizeSlider.oninput = function() {
  sizeValue.innerText = `${this.value} x ${this.value}`;
};




