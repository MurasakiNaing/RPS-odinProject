let btns = document.querySelectorAll(".btn");
let playerSignDisplay = document.querySelector("#player-sign");
let botSignDisplay = document.querySelector("#bot-sign");
let playerScore = 0;
let botScore = 0;
let message = document.querySelector(".message");
let winMsg = document.querySelector(".win-msg");
let anotherRound = document.querySelector(".another-round")
const choices = ['✊', '✋', '✌️'];

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        playerSignDisplay.innerHTML = btn.innerHTML;
        botSignDisplay.innerHTML = randomChoice();
        checkSign(btn.innerHTML, botSignDisplay.innerHTML);
        decideWin(playerScore, botScore);
    });
})

anotherRound.addEventListener('click', playAgain);

function randomChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function checkSign(playerSign, botSign) {
    if(playerSign === botSign){
        message.innerHTML = "Draw."
    } else if((playerSign === "✊" && botSign === "✌️") || (playerSign === "✋" && botSign === "✊") || (playerSign === "✌️" && botSign === "✋")) {
        message.innerHTML = "You Win."
        document.querySelector(".playerScore").innerHTML = ++playerScore;
    } else {
        message.innerHTML = "Bot Win."
        document.querySelector(".botScore").innerHTML = ++botScore;
    }
}

function decideWin(playerScore, botScore) {
    if(playerScore == 5) {
        anotherRound.style.display = "block";
        winMsg.innerHTML = "Player's win";
    }
    else if(botScore == 5) {

        anotherRound.style.display = "block";
        winMsg.innerHTML = "Bot's win";
    }
}

function playAgain() {
    playerScore = 0;
    document.querySelector(".playerScore").innerHTML = playerScore;
    botScore = 0;
    document.querySelector(".botScore").innerHTML = botScore;
    message.innerHTML = '';
    winMsg.innerHTML = '';
    playerSignDisplay.innerHTML = '';
    botSignDisplay.innerHTML = '';
    anotherRound.style.display = "none";
}