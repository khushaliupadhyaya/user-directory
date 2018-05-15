//day 1
const button = document.querySelector('button.heading')
const hdr = document.querySelector('h1.heading')
const hdr2 = document.querySelector('h2.heading2')

const changeText = function(ev) {
    //ev.target.textContent = 'New User Directory'
    //hdr.textContent = 'New User Directory'   
    hdr2.textContent = 'New second heading' 
}

//button.addEventListener('click', changeText)

function changeMainHeader(ev) {
    hdr.textContent = document.getElementById('newHeading').value
    //console.log('works')
}
//hdr.addEventListener('keyup', changeMainHeader)


//day 2
const form = document.querySelector('#userForm')
const userName = form.userName.value
const age = form.age.value
const favoriteColor = form.favoriteColor.value

const renderColor = function() {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}


const handleSubmit = function(ev) {
    ev.preventDefault()

    //users.innerHTML += '<p>' + userName  + ', ' + age + '</p>'
    //users.innerHTML += `<p>${userName}, ${age}</p>`

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`

    const colorItem = document.createElement('li')
    colorItem.textContent = `Favorite Color: `
    colorItem.appendChild(renderColor())

    const list = document.createElement('ul')
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    // list.textContent = `${userName}, ${age}`
    // list.style.backgroundColor = favoriteColor

    const users = document.querySelector('#users')
    users.appendChild(list)

    //f.userName.value = ''
    form.reset()
    form.userName.focus()
}
form.addEventListener('submit', handleSubmit)