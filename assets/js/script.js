
var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById('user-score');
var computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result >p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

// function for random pick from computer
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber= Math.floor(Math.random() *3);
    return choices[randomNumber];
}

// function for winner with on screen word description.
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = userChoice +  ' beats '  + computerChoice + '.You Win!';
}

//function for losing with on screen word description.
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = userChoice +  ' beats '  + computerChoice + '.You Lost!';
}

// function for draw with on screen word description.
function draw(userChoice, computerChoice){
    result_div.innerHTML = userChoice +  ' equals '  + computerChoice + '.Its a Draw!';
}

// function for player vs computer outcomes using switch statements to 
//  compare values of each case.

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
        win(userChoice, computerChoice);
        break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
        lose(userChoice, computerChoice);
        break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
        draw(userChoice, computerChoice);
        break;
}
}

//function for main game using eventlistener with event 'click'

function main(){
    rock_div.addEventListener('click', function(){
        game('rock');
    })

    paper_div.addEventListener('click', function(){
        game('paper');
    })

    scissors_div.addEventListener('click', function(){
        game('scissors');
    })
    }

    main();