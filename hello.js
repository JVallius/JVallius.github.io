const skeleton = [
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


const DIVIDER = 0.1
const INDEX_DIVIDER = 20
const STEP_INCREASE = 1
const STEP_START = 70
const INTERVAL = 100
const BLUR_DIVIDER = 20
const BLUR_WIDTH = 20

const canvas = Array.from(Array(20), () => new Array(30))

function handleChar(c) {
  if (c === ' ') {
    // return "░"
    return "&nbsp;"
  }

  return c
}

function fill(char) {
  for (let y = 0; y < canvas.length; y++) {
    for (let x = 0; x < canvas[y].length; x++) {
      canvas[y][x] = char
    }
  }
}

function add(str, x, y, className = "") {
  let i = 0

  while (i < str.length) {
    const xPos = i + x

    if (xPos >= canvas[y].length) {
      break
    }

    if (str[i] !== " ") {
      canvas[y][xPos] = `<span class="${className}">` + str[i] + "</span>"
    }

    i++
  }
}

function render() {
  const html = canvas.map(row => {
    let htmlRow = row.map(char => handleChar(char)).join("")
    return htmlRow + "<br />"
  }).join("")

  document.getElementById('main').innerHTML = html
}

function animate(arr, cycle, className) {
  const blurValue = Math.sin(cycle / BLUR_DIVIDER) * BLUR_WIDTH
  const blur = blurValue > 0 ? blurValue : 1
  const animated = arr.map((row, idx) => {
    const val = Math.abs(Math.floor(Math.sin((idx / INDEX_DIVIDER + cycle) / DIVIDER) * blur))
    const offset = " ".repeat(val)
    return offset + row
  })

  animated.forEach((row, index) => {
    add(row, 0, index + 2, className)
  })

}

// fill("1")
// skeleton.forEach((row, index) => {
//   add(row, 10, index + 2)
// })

// add("helloworld", 38, 0)

// console.log("canvas", canvas)

let step = STEP_START

setInterval(() => {
  fill(" ")
  animate(skeleton, step, "shadow-2")
  // animate(skeleton, step + 1, "shadow")
  animate(skeleton, step + 2, "skeleton")
  add("hello owlrd", 12, 0, "title")
  render(canvas)
  step += STEP_INCREASE
}, INTERVAL)
