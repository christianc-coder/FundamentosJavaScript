const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 60;
let gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');


//Crea elementos de tarjetas con colores para el juego
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div'); // representa una las cartas en el juego 
        card.classList.add('card');
        card.dataset.color = color; // El valor del array se introduce en este atributo.
        card.textContent = '?'; // representa el color oculto hasta que jugador de click
        gameContainer.appendChild(card);
    }
}

//Aleatoriza el orden de los elementos en un array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) { // Metodo Fisher
        const j = Math.floor(Math.random() * (i + 1)); //Se crea numero aleatorio
        [array[i], array[j]] = [array[j], array[i]]; // Se transpasan valores
    }
    return array;
}
// Gestiona los clics en las tarjetas y verifica coincidencias.
function handleCardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
//  //Evalua si comparten semenjanzas y sube el puntaje si es asi.
function checkMatch() {
    const [card1, card2] = selectedCards; //Esta línea utiliza desestructuración de arrays
    if (card1.dataset.color === card2.dataset.color) {
        //Agrega la clase 'matched' a ambas cartas, marcandolas como pares
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`; //muestra el puntaje actualizado al jugador.
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

//Reinicia el juego, baraja las tarjetas y comienza un temporizador
function starGame (){
    let timeLeft = 30;
    startbtn.disabled = 30;
    score = 0; //reinicia score para un nueo juego
    scoreElement.textContent = `Score ${score}`;
    startGameTimer(timeLeft); //Inicia temporizador del juego hacia atras
    cards = shuffle(colors.concat(colors)); // mezcla el array colors y duplica para crear pares
    selectedCards = []; // limpia el array para prepararlo para nuevas cartas
    gameContainer.innerHTML = ''; // elimina las cartas del anterior juego
    generateCards(); // genera nueva cartas dentro del contenedor
    gameContainer.addEventListener('click', handleCardClick);
}

// Temporizador hacia atras del juego
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 60;
            alert('¡Juego terminado!');
            startbtn.disabled = false;
        }
    }, 1000);
}
startbtn.addEventListener("click", starGame);

