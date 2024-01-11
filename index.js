document.querySelector('main#main').remove()

document.body.onload = addElement

const newHeader = document.createElement('h1')

function addElement() {
    newHeader.id = 'victory'
    newHeader.innerHTML = 'Peggy is the champion'

    const currentNode = document.getElementById('main')
    document.body.insertBefore(newHeader, currentNode)
}
