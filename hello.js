let skeleton = [
  " hello owrld ▄▐",
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
const BLUR_DIVIDER = 10
const BLUR_WIDTH = 20

setInterval(() => {
  let rows = skeleton.map(e => [...e].map(c => handleChar(c)).join(""))

  const blurValue = Math.sin(step / BLUR_DIVIDER) * BLUR_WIDTH

  const blur = blurValue > 0 ? blurValue : 1


  rows = rows.map((row, index) => {
    const val = Math.abs(Math.floor(Math.sin((index / INDEX_DIVIDER + step) / DIVIDER) * blur))
    const movement = handleChar(' ').repeat(val)
    return movement + row
  })

  html = (rows.map(r => r + "<br />")).join("")
  document.getElementById('main').innerHTML = html
  step = step + STEP_INCREASE
}, INTERVAL)



