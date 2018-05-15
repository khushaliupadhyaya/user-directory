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

const handleSubmit = function(ev) {
    ev.preventDefault()
    const f = ev.target
    const userName = f.userName.value
    const age = f.age.value
    const favoriteColor = f.favoriteColor.value

    //users.innerHTML += '<p>' + userName  + ', ' + age + '</p>'
    //users.innerHTML += `<p>${userName}, ${age}</p>`

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`

    const colorItem = document.createElement('li')
    colorItem.textContent = `Favorite Color: `
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    colorItem.appendChild(colorDiv)

    const list = document.createElement('ul')
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    // list.textContent = `${userName}, ${age}`
    // list.style.backgroundColor = favoriteColor

    const users = document.querySelector('#users')
    users.appendChild(list)

    //f.userName.value = ''
    f.reset()
    f.userName.focus()
}
form.addEventListener('submit', handleSubmit)