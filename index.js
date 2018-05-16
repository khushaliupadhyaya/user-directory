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
let userName = form.userName.value
let age = form.age.value
let favoriteColor = form.favoriteColor.value
let users = document.querySelector('#users')

const renderColor = function(color) {
    const colorDiv = document.createElement('div')
    //colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

const renderListItem = function(list) {
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`

    const colorItem = document.createElement('li')
    colorItem.textContent = `Favorite Color: `
    colorItem.appendChild(renderColor(favoriteColor))

    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)
    users.appendChild(list)
    //return list
}

const renderList = function() {
    const list = document.createElement('ul')
    renderListItem(list)
}

const handleSubmit = function(ev) {
    ev.preventDefault()
    userName = form.userName.value
     age = form.age.value
     favoriteColor = form.favoriteColor.value
     users = document.querySelector('#users')
    //users.innerHTML += '<p>' + userName  + ', ' + age + '</p>'
    //users.innerHTML += `<p>${userName}, ${age}</p>`

    // list.textContent = `${userName}, ${age}`
    // list.style.backgroundColor = favoriteColor

    renderList()

    //f.userName.value = ''
    form.reset()
    form.userName.focus()
}
form.addEventListener('submit', handleSubmit)