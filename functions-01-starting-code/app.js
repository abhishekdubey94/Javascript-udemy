const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
var gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK},${PAPER} or ${SCISSOR}?`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = function(){
    const randomValue = Math.random();

    if(randomValue<0.34){
        return ROCK;
    }else if(randomValue<0.67){
        return PAPER;
    }else{
        return SCISSOR;
    }
}

const getWinner = (cChoice,pChoice=DEFAULT_USER_CHOICE)=>{
    if(cChoice===pChoice){
        return RESULT_DRAW;
    }
    if(cChoice===ROCK && pChoice===PAPER || cChoice=== PAPER && pChoice===SCISSOR || cChoice===SCISSOR && pChoice===ROCK){
        return RESULT_PLAYER_WINS;
    }else{
        return RESULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if(playerChoice){
    winner = getWinner(computerChoice,playerChoice);
  }else{
    winner = getWinner(computerChoice);
  }
  let message = 'You picked '+playerChoice || DEFAULT_USER_CHOICE+' and computer picked '+computerChoice;;
  if(winner === RESULT_DRAW){
    message = message+ ' has a draw';
  }else if(winner === RESULT_PLAYER_WINS){
    message = message + 'won.';
  }else{
    message = message + 'lost.';
  }
  alert(message);
  console.log(winner);
});
