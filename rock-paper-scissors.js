const button = document.getElementById('button1')

button.addEventListener('click', function() {
    function getComputerChoice(){
        let randomNumber = Math.floor(Math.random() * 3);
        switch(randomNumber){
            case 0: return 'rock';
            case 1: return 'paper';
            case 2: return 'scissors';
        }
    }
    function playRound(playerChoice, computerChoice) {
        if (playerChoice == computerChoice){
            return "It's a tie!";
        }
        if (playerChoice == 'rock'){
            return (computerChoice == 'paper') ? "You have lost this match." : "You won this match!";
        }
        else if (playerChoice == 'paper'){
            return (computerChoice == 'rock') ? "You won this match!" : "You have lost this match.";
        }
        else if (playerChoice == 'scissors' || playerChoice == 'scissor') {
            return (computerChoice == 'rock') ? "You have lost this match." : "You have won this match!";
        }
    }
    function game() {
        for (let i = 0; i < 5; i++){
            const playerChoice = prompt("Will you choose rock, paper or scissors?\n").toLowerCase();
            const computerChoice = getComputerChoice();
            console.log(playRound(playerChoice, computerChoice));
        }
    }
    game();
}
);