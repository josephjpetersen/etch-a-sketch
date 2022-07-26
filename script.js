const container = document.getElementById("container");
let gridItems = Array.from(document.querySelectorAll('.grid-item'));

function makeGrid(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-colums', columns);
  for (i = 0; i < (rows * columns); i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  };

  gridItems = Array.from(document.querySelectorAll('.grid-item'));

  gridItems.forEach((gridItem) =>
    gridItem.addEventListener('mouseover',
      e => e.target.classList.add('black-background')
    )
  )
};

makeGrid(16, 16);




