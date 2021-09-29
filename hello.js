let skeleton = [
  "   hello!    ▄▐",
  "       ▄▄▄  ▄██▄",
  "      ▐▀█▀▌    ▀█▄ ",
  "      ▐█▄█▌      ▀█▄",
  "       ▀▄▀   ▄▄▄▄▄▀▀",
  "     ▄▄▄██▀▀▀▀",
  "    █▀▄▄▄█ ▀▀",
  "    ▌ ▄▄▄▐▌▀▀▀",
  " ▄ ▐   ▄▄ █ ▀▀",
  " ▀█▌   ▄ ▀█▀ ▀",
  "        ▄▄▐▌▄▄",
  "        ▀███▀█ ▄",
  "       ▐▌▀▄▀▄▀▐▄",
  "       ▐▀      ▐▌",
  "       █        █",
  "      ▐▌         █"
]

// ▒▒▒░░░░░░░░░░▄▐░░░░ 
// ▒░░░░░░▄▄▄░░▄██▄░░░ 
// ░░░░░░▐▀█▀▌░░░░▀█▄░ 
// ░░░░░░▐█▄█▌░░░░░░▀█▄ 
// ░░░░░░░▀▄▀░░░▄▄▄▄▄▀▀ 
// ░░░░░▄▄▄██▀▀▀▀░░░░░ 
// ░░░░█▀▄▄▄█░▀▀░░░░░░ 
// ░░░░▌░▄▄▄▐▌▀▀▀░░░░░ 
// ░▄░▐░░░▄▄░█░▀▀░░░░░ 
// ░▀█▌░░░▄░▀█▀░▀░░░░░ 
// ░░░░░░░░▄▄▐▌▄▄░░░░░ 
// ░░░░░░░░▀███▀█░▄░░░ 
// ░░░░░░░▐▌▀▄▀▄▀▐▄░░░ 
// ░░░░░░░▐▀░░░░░░▐▌░░ 
// ░░░░░░░█░░░░░░░░█░░ 
// ░░░░░░▐▌░░░░░░░░░█░

let html = ""

function handleChar(c) {
  if (c === ' ') {
    //return "░"
    return "&nbsp;"
  }

  return c
}


let step = 0
const DIVIDER = 0.1
const INDEX_DIVIDER = 20
const STEP_INCREASE = 1
const INTERVAL = 100

setInterval(() => {
  let rows = skeleton.map(e => [...e].map(c => handleChar(c)).join(""))

  const blurValue = Math.sin(step / 10) * 20

  const blur = blurValue > 0 ? blurValue : 1

  // console.log("blur", blur)

  rows = rows.map((row, index) => {
    const val = Math.abs(Math.floor(Math.sin((index / INDEX_DIVIDER + step) / DIVIDER) * blur))
    // console.log("index ", index, val)
    const movement = handleChar(' ').repeat(val)
    return movement + row
  })

  html = (rows.map(r => r + "<br />")).join("")
  document.getElementById('main').innerHTML = html
  step = step + STEP_INCREASE
}, INTERVAL)



