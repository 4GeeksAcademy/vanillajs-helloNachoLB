window.onload = function() {
    generateRandomCard(); // Genera una carta aleatoria al cargar la página
};

function generateRandomCard() {
    const cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = [
        { symbol: "♠", className: "spade" },
        { symbol: "♥", className: "heart" },
        { symbol: "♦", className: "diamond" },
        { symbol: "♣", className: "club" }
    ];

    let randomNumber = Math.floor(Math.random() * cardNumbers.length);
    let randomSuit = Math.floor(Math.random() * suits.length);

    let cardElement = document.querySelector(".card");
    let topSymbol = document.querySelector(".top-symbol");
    let bottomSymbol = document.querySelector(".bottom-symbol");
    let numberElement = document.querySelector(".number");

    // Aplicar valores a la carta
    cardElement.className = `card ${suits[randomSuit].className}`;
    topSymbol.innerText = suits[randomSuit].symbol;
    bottomSymbol.innerText = suits[randomSuit].symbol;
    numberElement.innerText = cardNumbers[randomNumber];
}