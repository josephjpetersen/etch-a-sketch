const container = document.getElementById("container");

function makeGrid(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-colums', columns);
  for (i = 0; i < (rows * columns); i++) {
    let cell = document.createElement('div');
    cell.innerText = (i + 1);
    container.appendChild(cell).className = 'grid-item';
  };
};

makeGrid(16, 16)