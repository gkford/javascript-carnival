// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

Number.prototype.mod = function (n) {
  return ((this % n) + n) % n
}

count = {
  head: 0,
  body: 0,
  shoes: 0,
  fc: 0,
}

getUniqueClassEl = (uniqueClass) =>
  document.getElementsByClassName(uniqueClass)[0]

const [headEl, bodyEl, shoesEl] = [
  getUniqueClassEl('head'),
  getUniqueClassEl('body'),
  getUniqueClassEl('shoes'),
]

bodyEls = { head: headEl, body: bodyEl, shoes: shoesEl }

window.addEventListener('keydown', handleKeypress)

function handleKeypress(e) {
  switch (e.code) {
    case 'ArrowLeft':
      changeGarb(-1)
      break
    case 'ArrowRight':
      changeGarb(1)
      break
    case 'ArrowUp':
      changeFocus(1)
      break
    case 'ArrowDown':
      changeFocus(-1)
      break
  }
}
let focus = 'head'
const bodyParts = ['head', 'body', 'shoes']
function changeFocus(num) {
  count['fc'] = (count['fc'] + num).mod(3)
  focus = bodyParts[count['fc']]
}

function changeGarb(num) {
  count[focus] = (count[focus] + num).mod(5)
  clothesChanger(focus, count[focus])
}

function clothesChanger(garb, index) {
  bodyEls[garb].src = `./images/${garb}${index}.png`
}

clothesChanger('head', 1)
