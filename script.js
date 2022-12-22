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
const songClick = document.getElementById('hide')
const themeSong = document.getElementById('theme-song')
const configMusic = document.querySelectorAll('.song-config')
const songOn = document.querySelector('.on')
const songOff = document.querySelector('.off')

configMusic.forEach(button => {
    button.addEventListener('click', () => {
        let on = button.classList.contains('on')
        let off = button.classList.contains('off')
        if(on) {
            songClick.play()
            themeSong.setAttribute('src', 'audios/RAMtheme-song.mp3')
            themeSong.play()
            songOn.style.backgroundColor = '#4dd648'
            songOff.style.backgroundColor = 'white'
            songOn.style.borderRadius = '0px 0px 10px 10px'
        } else if(off) {
            songClick.play()
            themeSong.setAttribute('src', null)
            songOff.style.backgroundColor = '#d64848'
            songOn.style.backgroundColor = 'white'
        }
    })
})

let idPerson = 0

fetch('https://rickandmortyapi.com/api/character')
    .then(resp => resp.json())
    .then(dados => {
        const char = dados.results

        person.setAttribute('src', char[idPerson].image)
        namePerson.innerHTML = char[idPerson].name
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                songClick.play()
                
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
        songClick.play()
    })

    close.addEventListener('click', () => {
        info.style.height = '0px'
        songClick.play()
    })