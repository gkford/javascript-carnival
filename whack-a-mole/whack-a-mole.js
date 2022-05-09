// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// UTILS //

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

// MAIN CODE //

console.log('Whack-a-Mole!')

// Make the game board
const board = [...Array(5)].map((cell) => Array(5))

// Make the mole element

const mole = document.createElement('img')
mole.src = 'mole.PNG'
mole.style = 'width: 100%'

function getCell(rowNum, colNum) {
  let rows = document.getElementsByTagName('TR')
  let cells = rows[rowNum].getElementsByTagName('TD')
  let cell = cells[colNum]
  return cell
}

for (let row = 0; row < board.length; row++) {
  for (let col = 0; col < board[row].length; col++) {
    board[row][col] = getCell(row, col)
    board[row][col].onclick = cellClicked
  }
}

function addMole() {
  let rowNum = getRandomInt(0, 5)
  let colNum = getRandomInt(0, 5)
  targetCell = board[rowNum][colNum]
  targetCell.appendChild(mole)
  console.log(targetCell)
}

//for each  cell,
//create an onclick function linking to cellclicked

function playSound() {
  const audio = new Audio()
  audio.src = 'whack-audio.wav'
  audio.play()
}

function cellClicked(e) {
  targetCell = e.target.closest('TD')
  if (targetCell.children[0] == mole) {
    targetCell.removeChild(mole)
    playSound()
    addMole()
  }
}

// Add the mole to start the game
addMole()
