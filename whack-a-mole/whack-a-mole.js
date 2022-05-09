// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//- The ability to store or get references to the cells in the HTML table.
//- A function to randomly select which cell should show the mole.
//- A way to show a mole in the chosen cell.

function getCell(rowNum, colNum) {
  let rows = document.getElementsByTagName('TR')
  let cells = rows[rowNum].getElementsByTagName('TD')
  let cell = cells[colNum]
  return cell
}

const board = [...Array(5)].map((cell) => Array(5))

//console.log(board)

for (let row = 0; row < board.length; row++) {
  for (let col = 0; col < board[row].length; col++) {
    board[row][col] = getCell(row, col)
    board[row][col].onclick = cellClicked
  }
}

function addMole() {
  let rowNum = getRandomInt(0, 5)
  let colNum = getRandomInt(0, 5)
  console.log(rowNum, colNum)
  targetCell = board[rowNum][colNum]
  const image = document.createElement('img')
  image.src = 'mole.PNG'
  image.style = 'width: 100%'
  targetCell.appendChild(image)
}

addMole()
console.log(board)
//for each  cell,
//create an onclick function linking to cellclicked

function cellClicked(e) {
  cell = e.target
  console.log('click')
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

function getRandomCell(numRows, numCols) {
  return [rownNum, colNum]
}

function newMole() {
  let rowNum = getRandomInt(1, numRows + 1)
  let colNum = getRandomInt(1, numCols + 1)
}
