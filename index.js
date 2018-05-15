const button = document.querySelector('button.heading')
//const hdr = document.getElementById('heading').innerHTML
const hdr = document.querySelector('h1.heading')

function changeText(ev) {
    //ev.target.textContent = 'New User Directory'
    hdr.textContent = 'New User Directory'    
}

button.addEventListener('click', changeText)