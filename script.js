
window.onload = function() {
    generateRandomCard();
    setInterval(generateRandomCard, 10000);
};

document.getElementById("generateCard").addEventListener("click", generateRandomCard);
document.getElementById("widthInput").addEventListener("input", updateCardSize);
document.getElementById("heightInput").addEventListener("input", updateCardSize);

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

    cardElement.className = `card ${suits[randomSuit].className}`;
    topSymbol.innerText = suits[randomSuit].symbol;
    bottomSymbol.innerText = suits[randomSuit].symbol;
    numberElement.innerText = cardNumbers[randomNumber];
}

function updateCardSize() {
    let width = document.getElementById("widthInput").value;
    let height = document.getElementById("heightInput").value;
    
    let cardElement = document.querySelector(".card");
    if (width) cardElement.style.width = `${width}px`;
    if (height) cardElement.style.height = `${height}px`;
}
