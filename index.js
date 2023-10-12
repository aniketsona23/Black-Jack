let player= { 
    playerName:"Aniket",
    chips :145
}
let cards=[]
let sum = 0
let hasBlackJacked = false;
let isAlive = false;
let message = "";
let card_el = document.getElementById("cards")
let sum_el = document.getElementById("sum-c")
let message_el = document.getElementById("message-el")
let player_el = document.getElementById("player-el")
player_el.innerText = `${player.playerName}: $${player.chips}`

function startGame() {
    player.chips-=5;
    isAlive = true;
    hasBlackJacked=false;
    
    let firstCard =getRandomCard();
    let secondCard =getRandomCard();
    cards=[firstCard ,secondCard]

    sum=firstCard+secondCard;

    renderGame();
}

function getRandomCard() {
    let ranCard = Math.floor(Math.random()*13) +1
    if (11<=ranCard && ranCard<=13  )
        ranCard = 10;
    else if (ranCard ===1)
        ranCard = 11;
    return ranCard;
}

function renderGame() {
    card_el.textContent = `Cards : `;
    for (let count = 0; count < cards.length; count++) {
        card_el.textContent += " " + cards[count];
    }
    
    sum_el.textContent = `Sum :  ${sum}`;
    
    if (sum < 21) {
        message = "Do you want a new card?"
    }
    else if (sum === 21) {
        message = "Congrats !!! You are BlackJacked!"
        hasBlackJacked = true;
        player.chips+=40
    }
    else {
        message = "Sorry, you are out of the game !"
        isAlive = false;
    }
    message_el.textContent = message;
    player_el.innerText = `${player.playerName}: $${player.chips}`
}

function newCard() {
    if ( isAlive && hasBlackJacked===false){
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }

}