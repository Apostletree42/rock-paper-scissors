const button = document.getElementById('button1');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const feedback1 = document.querySelector('#feedback1');
const feedback2 = document.querySelector('#feedback2');
let playerScore = 0;
let computerScore = 0;

button.addEventListener('click', function() {
    feedback1.innerHTML = 'Select below to play :D';
    function getComputerChoice(){
        let randomNumber = Math.floor(Math.random() * 3);
        switch(randomNumber){
            case 0: return 'rock';
            case 1: return 'paper';
            case 2: return 'scissors';
        }
    }

    function playGame(playerChoice) {
        const computerChoice = getComputerChoice();
        let roundResult = '';

        if (playerChoice === computerChoice) {
            roundResult = "It's a tie!";
        } 
        else if ((playerChoice == 'rock' && computerChoice == 'scissors') || 
                 (playerChoice == 'paper' && computerChoice == 'rock') || 
                 (playerChoice == 'scissors' && computerChoice == 'paper')) {
            roundResult = "You won this round!";
            playerScore++;
        } 
        else {
            roundResult = "Computer won this round!";
            computerScore++;
        }

        //feedback2.innerHTML = roundResult;
        setTimeout(() => {
            feedback2.innerHTML = roundResult;
            feedback2.style.opacity = '1';
        }, 300);
        feedback1.innerHTML = `Player = ${playerScore} - Computer = ${computerScore}`;

        if (playerScore >= 5 || computerScore >= 5){
            endGame();
        }
    }

    function endGame() {
        if (playerScore >= 5) {
            feedback1.innerHTML = "Player wins the game!";
        } else {
            feedback1.innerHTML = "Computer wins the game!";
        }
        // Disable the buttons and reset the scores or perform other end-game actions if necessary
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        button.disabled = true;
    }

    rock.addEventListener('click', function(){
        playGame('rock');
    });

    paper.addEventListener('click', function(){
        playGame('paper');
    });

    scissors.addEventListener('click', function(){
        playGame('scissors');
    });
});
