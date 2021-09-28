let skeleton = [
  "             ▄▐",
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

setInterval(() => {
  let rows = skeleton.map(e => [...e].map(c => handleChar(c)).join(""))

  const blurValue = Math.sin(step / 10) * 10

  const blur = blurValue > 0 ? blurValue : 1

  // console.log("blur", blur)

  rows = rows.map((row, index) => {
    const val = Math.abs(Math.floor(Math.sin((index + step) / 2) * blur))
    // console.log("index ", index, val)
    const movement = handleChar(' ').repeat(val)
    return movement + row
  })

  html = (rows.map(r => r + "<br />")).join("")
  document.getElementById('main').innerHTML = html
  step = step + 1
}, 100)



