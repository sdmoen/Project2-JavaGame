var player_Score = 0;
var samurai_Score = 0;
var playerScore = document.getElementById("player-score");
var samuraiScore = document.getElementById("samurai-score");
let gameResult = document.querySelector(".outcome >p");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

// function for random pick from computer
function getSamuraiChoice() {
    let weapons = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return weapons[randomNumber];
}

// function for winner with on screen word description.
function win(playerChoice, samuraiChoice) {
    player_Score++;
    playerScore.innerHTML = player_Score;
    samuraiScore.innerHTML = samurai_Score;
    gameResult.innerHTML = playerChoice + " Defeats " + samuraiChoice + ".You Win!";
}

//function for losing with on screen word description.
function lose(playerChoice, samuraiChoice) {
    samurai_Score++;
    playerScore.innerHTML = player_Score;
    samuraiScore.innerHTML = samurai_Score;
    gameResult.innerHTML = samuraiChoice + " Defeats " + playerChoice + ".You Lost!";
}

// function for draw with on screen word description.
function draw(playerChoice, samuraiChoice) {
    gameResult.innerHTML = playerChoice + " equals " + samuraiChoice + ".Its a Draw!";
}

// function for player vs computer outcomes using switch statements to
//  compare values of each case.

function game(playerChoice) {
    let samuraiChoice = getSamuraiChoice();
    switch (playerChoice + samuraiChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerChoice, samuraiChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerChoice, samuraiChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerChoice, samuraiChoice);
            break;
    }
}

//function for main game using eventlistener with event 'click'

function main() {
    rock.addEventListener("click", function () {
        game("rock");
    });

    paper.addEventListener("click", function () {
        game("paper");
    });

    scissors.addEventListener("click", function () {
        game("scissors");
    });
}

main();
