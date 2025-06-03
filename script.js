const form = document.querySelector('form')
const input = document.querySelector('.add-item input')
const list = document.getElementById('list')
const danger = document.querySelector('.danger')
const dangerLabel = document.querySelector('.danger label')
const dangerDelete = document.getElementById('delete')

// Adiciona item na lista
function adicionarItem(texto) {
    let item = document.createElement('div')
    item.className = 'items'

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    let paragraph = document.createElement('p')
    paragraph.textContent = texto

    let img = document.createElement('img')
    img.src = 'images/icons/trash.svg'

    img.addEventListener('click', () => {
        removerItem(item, texto)
    })

    item.appendChild(checkbox)
    item.appendChild(paragraph)
    item.appendChild(img)


    list.appendChild(item)
}

// Remove os itens da lista
function removerItem(item, texto) {
    list.removeChild(item)

    danger.style.display = 'block'
    dangerLabel.textContent = `O item  ${texto} foi removido da lista.`

}

dangerDelete.addEventListener('click', () => {
    danger.style.display = 'none'
})

// Evento de envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault()

    let texto = input.value
    
    if (texto !== '') {
        adicionarItem(texto)
        input.value = ''
    }
})

const itensExistentes = document.querySelectorAll('#list .items')

for (let i = 0; i < itensExistentes.length; i++) {
    (function (item) {
        let texto = item.querySelector('p').textContent
        let img = item.querySelector('img')

        img.addEventListener('click', () => {
            removerItem(item, texto)
        })
    })(itensExistentes[i])
}