const body = document.querySelector('.conteudo')
const person = document.getElementById('personagem')
const namePerson = document.getElementById('nome-personagem')
const buttons = document.querySelectorAll('.button')
const spec = document.getElementById('species')
const sex = document.getElementById('sex')
const locat = document.getElementById('location')
const orig = document.getElementById('origin')
const info = document.querySelector('.info')
const close = document.getElementById('close')

let idPerson = 0

fetch('https://rickandmortyapi.com/api/character')
    .then(resp => resp.json())
    .then(dados => {
        const char = dados.results

        console.log(char[0])

        person.setAttribute('src', char[idPerson].image)
        namePerson.innerHTML = char[idPerson].name
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                let left = btn.classList.contains('arrow-left')
                if (left) {
                    idPerson -= 1
                    if (idPerson < 0) {
                        idPerson = 19
                    }
                    person.setAttribute('src', char[idPerson].image)
                    namePerson.innerHTML = char[idPerson].name
                    spec.innerHTML = char[idPerson].species
                    sex.innerHTML = char[idPerson].gender
                    locat.innerHTML = char[idPerson].location.name
                    orig.innerHTML = char[idPerson].origin.name
                } else {
                    idPerson += 1
                    if (idPerson > 19) {
                        idPerson = 0
                    }
                    person.setAttribute('src', char[idPerson].image)
                    namePerson.innerHTML = char[idPerson].name
                    spec.innerHTML = char[idPerson].species
                    sex.innerHTML = char[idPerson].gender
                    locat.innerHTML = char[idPerson].location.name
                    orig.innerHTML = char[idPerson].origin.name
                }
            })
        })
    })

    namePerson.addEventListener('click', () => {
        info.style.height = '470px'
    })

    close.addEventListener('click', () => {
        info.style.height = '0px'
    })