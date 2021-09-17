const body = document.querySelector('body')
const btnHistory = document.querySelector('#btn-history')
const btnMe = document.querySelector('#btn-me')
const cursor = document.querySelector('#cursor')
const audio = document.querySelector('audio')
audio.volume = 0.3

body.onload = () => {
    body.addEventListener('mousemove', (e) => {
        cursor.style.marginTop = (e.clientY - 25) + 'px' 
        cursor.style.marginLeft = (e.clientX - 25) + 'px '
    })

    btnHistory.addEventListener('mouseenter', () => cursor.className = 'cursorBordered' )
    btnHistory.addEventListener('mouseleave', () => cursor.className = 'cursorFilled' )

    btnHistory.addEventListener('click', () => {
        const conteQuestion = document.querySelector('#conteQuestion')
        const conteCards = document.querySelector('#conte-cards')
        audio.play()
        conteQuestion.style.opacity = '0'
        conteCards.style.opacity = '1'
    })

    btnMe.addEventListener('mouseenter', () => cursor.className = 'cursorBordered' )
    btnMe.addEventListener('mouseleave', () => cursor.className = 'cursorFilled' )

    btnMe.addEventListener('click', () => {
        window.location.href='../html/me.html';
    })
}
