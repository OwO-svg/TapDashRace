const nTap = window.innerWidth / 25
const p1btn = document.querySelector('.top')
const p2btn = document.querySelector('.bottom')
const p1img = document.querySelector('.p1')
const p2img = document.querySelector('.p2')
const winner = document.querySelector('.winner')
var p1progress = 0;
var p2progress = 0;
console.log('setup complete')


p1btn.addEventListener('click', () => {
    p1progress += 2
    console.log('clicked')

    if (p1progress === 96) {
        document.getElementById('p1').style.left = "50%"
        winner.textContent = '[Blue Player] won!!!'
        return;
    }

    document.getElementById('p1').style.left = `${p1progress}%`;
    console.log('moved')
})

p2btn.addEventListener('click', () => {
    p2progress += 2
    console.log('clicked')

    if (p2progress === 96) {
        document.getElementById('p2').style.left = "50%"
        winner.textContent = '[Red Player] won!!!'
        return;
    }

    document.getElementById('p2').style.left = `${p2progress}%`;
    console.log('moved')
})

console.log('the end!')