document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name:'donajuego',
            img: './src/imagen/donajuego.png'
        },
        {
            name: 'pizza',
            img: './src/imagen/pizza.png'
        },
        {
            name: 'hamburguesa',
            img: './src/imagen/hamburguesa.png'
        },
        {
            name: 'papitas',
            img: './src/imagen/papitas.png'
        },
        {
            name: 'helado',
            img: './src/imagen/helado.png'
        },
        {
            name: 'hotdog',
            img: './src/imagen/hotdog.png'
        },
        {
            name:'donajuego',
            img: './src/imagen/donajuego.png'
        },
        {
            name: 'papitas',
            img: './src/imagen/papitas.png'
        },
        {
            name: 'pizza',
            img: './src/imagen/pizza.png'
        },
        {
            name: 'hamburguesa',
            img: './src/imagen/hamburguesa.png'
        },
        {
            name: 'hotdog',
            img: './src/imagen/hotdog.png'
        },
        {
            name: 'helado',
            img: './src/imagen/helado.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i <cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', './src/imagen/fondojuegos.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', './src/imagen/fondojuegos.png')
            cards[optionTwoId].setAttribute('src', './src/imagen/fondojuegos.png')
            alert('You have clicked the same image!')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', './src/imagen/white.png')
            cards[optionTwoId].setAttribute('src', './src/imagen/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', './src/imagen/fondojuegos.png')
            cards[optionTwoId].setAttribute('src', './src/imagen/fondojuegos.png')
            alert('SOrry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length ===2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()
})