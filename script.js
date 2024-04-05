document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#game-board');
    const startButton = document.getElementById('start-game');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    const cardArray = [
        { name: 'card1', img: 'images/andromeda.png' },
        { name: 'card1', img: 'images/andromeda.png' },
        { name: 'card2', img: 'images/cyber.png' },
        { name: 'card2', img: 'images/cyber.png' },
        { name: 'card3', img: 'images/joker.png' },
        { name: 'card3', img: 'images/joker.png' },
        { name: 'card4', img: 'images/lebron.png' },
        { name: 'card4', img: 'images/lebron.png' },
        { name: 'card5', img: 'images/milky.png' },
        { name: 'card5', img: 'images/milky.png' },
        { name: 'card4', img: 'images/rollsafe.png' },
        { name: 'card4', img: 'images/rollsafe.png' },
        { name: 'card5', img: 'images/shy.png' },
        { name: 'card5', img: 'images/shy.png' },
        // ...add more pairs as needed
    ];
    function startCountdown() {
        const twoHoursInMilliseconds = 2 * 60 * 60 * 1000;
        let remainingTime = twoHoursInMilliseconds;
        
        const timerId = setInterval(function() {
            remainingTime -= 1000; // Decrement remaining time every second
        
            const hours = Math.floor(remainingTime / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        
            // Update the timer display element
            document.getElementById("timer").innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
            if (remainingTime <= 0) {
              clearInterval(timerId);
              console.log("Time's up!");
            }
          }, 1000); // Update timer every second
        }
        
    startCountdown();
    
    function shuffle(array) {
        array.sort(() => 0.5 - Math.random());
    }

    function createBoard() {
        shuffle(cardArray);
        grid.innerHTML = '';
        cardsWon = [];

        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        if (!cardsChosenId.includes(cardId)) {
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('#game-board img');
        const firstCardId = cardsChosenId[0];
        const secondCardId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1] && firstCardId !== secondCardId) {
            cards[firstCardId].style.visibility = 'hidden';
            cards[secondCardId].style.visibility = 'hidden';
            cards[firstCardId].removeEventListener('click', flipCard);
            cards[secondCardId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[firstCardId].setAttribute('src', 'images/blank.png');
            cards[secondCardId].setAttribute('src', 'images/blank.png');
        }

        cardsChosen = [];
        cardsChosenId = [];

        if (cardsWon.length === cardArray.length / 2) {
            alert('Congratulations! You found them all!');
         }
    }

    startButton.addEventListener('click', createBoard);
});
