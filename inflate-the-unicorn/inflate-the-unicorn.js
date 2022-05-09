// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClicked
}

let inflationLevels = 0
let inflationObject = { one: 0, two: 0, three: 0 }

function unicornClicked(e) {
  console.log('You clicked on a unicorn')
  let image = e.target
  if (inflationObject[image.id] < 3) {
    inflationObject[image.id] += 1
    image.src = `./images/unicorn-${inflationObject[image.id]}.png`
  } else {
    alert(`Unicorn number ${image.id} thanks you!`)
  }
  console.log(`inflationObject:`)
  console.log(inflationObject)
}
