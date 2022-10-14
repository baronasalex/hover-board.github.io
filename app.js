const board = document.querySelector('#board')
const colors = ['#C06AC9', '#E9B9FA', '#6161A4', '#9780B6', '#925364']
const SQUARES_NUMBER = 500 

for (let i=0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const color = getRandomColor()
    const element = event.target
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {

    return colors[Math.floor(Math.random() * colors.length)]
}