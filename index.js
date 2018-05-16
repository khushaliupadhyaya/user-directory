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
    // item.textContent = `${label}: ${value}`
    item.textContent = `${label}: `
    try {
        item.appendChild(value)
    } catch(e) {
        item.textContent += value
    }
    return item
}

const renderList = function() {
    // const list = document.createElement('ul')
    // renderListItem(list)
}

const handleSubmit = function(ev) {
    ev.preventDefault()
    const f = ev.target
    const user = {
        userName: f.userName.value,
        age: f.age.value,
        favoriteColor: renderColor(favoriteColor),
    }


    const userName = f.userName.value
    const age = f.age.value
    const favoriteColor = f.favoriteColor.value
    const users = document.querySelector('#users')
    //users.innerHTML += '<p>' + userName  + ', ' + age + '</p>'
    //users.innerHTML += `<p>${userName}, ${age}</p>`

    // list.textContent = `${userName}, ${age}`
    // list.style.backgroundColor = favoriteColor

    const list = document.createElement('ul')
    list.appendChild(renderListItem('Name', userName))
    list.appendChild(renderListItem('Age', age))
    list.appendChild(renderListItem('Favorite Color', renderColor(favoriteColor)))

    //renderList()

    users.appendChild(list)

    //f.userName.value = ''
    form.reset()
    form.userName.focus()
}
form.addEventListener('submit', handleSubmit)