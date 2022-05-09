// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//- The ability to store or get references to the cells in the HTML table.
//- A function to randomly select which cell should show the mole.
//- A way to show a mole in the chosen cell.

//get the tr items
//get the td items inside the tr items
//

let rows = document.getElementsByTagName('TR')

//for each row,
let board = []
let x = Array.isArray(board)
console.log(x == undefined)
//board.push([])
console.log(board)
for (let i = 0; i < rows.length; i++) {
  board[i] = []
  let cells = rows[i].getElementsByTagName('TD')
  for (let j = 0; j < cells.length; j++) {
    board[i][j] = []
    cells[j].onclick = cellClicked
  }
}

console.log(board)
//for each  cell,
//create an onclick function linking to cellclicked

function cellClicked(e) {
  let cell = e.target
  cell.innerHTML = 'x'
  console.log('click!')
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}
