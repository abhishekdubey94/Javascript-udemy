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
    return DEFAULT_USER_CHOICE;
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

const getWinner = function(cChoice,pChoice){
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
  const winner = getWinner(computerChoice,playerChoice);
  console.log(winner);
});
