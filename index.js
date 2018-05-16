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


//day 2 and day 3
const form = document.querySelector('#userForm')
// let userName = form.userName.value
// let age = form.age.value
// let favoriteColor = form.favoriteColor.value
// let users = document.querySelector('#users')

const renderColor = function(color) {
    const colorDiv = document.createElement('div')
    //colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

const renderListItem = function(label, value) {
    const item = document.createElement('li')

    const term = document.createElement('dt')
    term.textContent = label
    // item.textContent = `${label}: ${value}`
    // item.textContent = `${label}: `
    
    const description = document.createElement('dd')
    
    try {
        description.appendChild(value)
    } catch(e) {
        description.textContent += value
    }

    item.appendChild(term)
    item.appendChild(description)
    return item
}

function renderList(data) {
    const list = document.createElement('dl')
    const labels = Object.keys(data)
    //for each label, do this (arrow function)
    labels.forEach(label => {
        const item = renderListItem(label, data[label])
        list.appendChild(item)
    })
    return list
}

const handleSubmit = function(ev) {
    ev.preventDefault()
    const f = ev.target
    const user = {
        userName: f.userName.value,
        age: f.age.value,
        favoriteColor: renderColor(f.favoriteColor.value),
    }

    const userName = f.userName.value
    const age = f.age.value
    const favoriteColor = f.favoriteColor.value
    const users = document.querySelector('#users')
    //users.innerHTML += '<p>' + userName  + ', ' + age + '</p>'
    //users.innerHTML += `<p>${userName}, ${age}</p>`

    // list.textContent = `${userName}, ${age}`
    // list.style.backgroundColor = favoriteColor

    users.appendChild(renderList(user))

    form.reset()
    form.userName.focus()
}
form.addEventListener('submit', handleSubmit)