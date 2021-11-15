var easyGame = document.getElementById("easyGame");
var difficultGame = document.getElementById("difficultGame");
var gameButton = document.getElementById("gameButton");
var mouseButton = document.getElementById("mouse");
var elephantButton = document.getElementById("elephant");
var catButton = document.getElementById("cat");
var ferretButton = document.getElementById("ferret");
var cucumberButton = document.getElementById("cucumber");
var playerScore = document.getElementById("playerScore");
var computerScore = document.getElementById("computerScore");
var fighters = document.getElementById("fighters");
var battleZone = document.getElementById("battleZone");
var playerChoice = document.getElementById("playerChoice");
var opponentChoice = document.getElementById("opponentChoice");
var victoryZone = document.getElementById("victoryZone");
var win = document.getElementById("win");
var loss = document.getElementById("loss");
var happyParty = document.getElementById("happyParty");
var sadParty = document.getElementById("sadParty");
var sadCloud = document.getElementById("sadCloud");
var emojis = document.querySelectorAll(".emoji");
var message = document.getElementById("message");
var header = document.getElementById("header");

var game = new Game();
var classicFighters = [mouseButton, elephantButton, catButton];
var difficultFighters = [mouseButton, elephantButton, catButton, ferretButton, cucumberButton];


document.addEventListener("load", updateScore());
gameButton.addEventListener("click", changeGame)
easyGame.addEventListener("click", setEasy);
difficultGame.addEventListener("click", setDifficult);
fighters.addEventListener("click", function(event) {
  var eventTarget = event.target.alt
  if (eventTarget){
  click(eventTarget)
}
});


function displayBattleZone() {
  show([document.getElementById(`${game.player.selection}Pick`)])
  setTimeout(function() {showHide([battleZone], [fighters])}, 300);
  setTimeout(function() {displayWinner()}, 1000);
  setTimeout(function() {reset()}, 3000);
}

function displayWinner() {
  showHide([victoryZone], [battleZone]);
  celebration();
}

function setEasy() {
  game.loading = false;
  game.difficulty = "classic";
  message.innerText = "choose your fighter";
  game.selectDifficulty();
  hide([easyGame, difficultGame, ferretButton, cucumberButton]);
  show([fighters, gameButton]);
  show(classicFighters);
}

function setDifficult() {
  game.loading = false;
  game.difficulty = "difficult"
  header.innerText = "Elephant, Mouse, Cat, Ferret, Cucumber"
  message.innerText = "choose your fighter"
  game.selectDifficulty();
  hide([easyGame, difficultGame]);
  show([fighters, gameButton]);
  show(difficultFighters);
}

function click(selection) {
  if (!game.loading){
    game.loading = true
    game.player.selection = `${selection}`;
    game.computer.setOpponent(game.choices)
    game.declareWinner();
    // game.player.takeTurn(game)
    displayFighter()
    displayBattleZone()
    updateScore()
    hide([gameButton]);
  }
}

function showHide(toShow, toHide) {
  show(toShow);
  hide(toHide);
}

function show(toShow) {
  for (var i = 0; i < toShow.length; i++){
    toShow[i].classList.remove("hidden");
  }
}

function hide(toHide) {
  for (var i = 0; i < toHide.length; i++){
    toHide[i].classList.add("hidden");
  }
}

function displayFighter() {
  playerChoice.src = `./assets/${game.player.selection}.png`;
  playerChoice.alt = `${game.player.selection}`;
  opponentChoice.src = `./assets/${game.computer.selection}.png`;
  opponentChoice.alt = `${game.computer.opponent}`;
}

function celebration() {
  message.innerText = game.announcement;
  if (game.player.wins) {
    happyParty.src = `./assets/${game.player.selection}Celebration.gif`;
    showHide([win], [battleZone, loss])
  } else {
    sadParty.src = `./assets/${game.player.selection}Loss.gif`;
    showHide([loss, sadCloud], [battleZone, win])
  }
}

function updateScore() {
  playerScore.innerText = `Wins : ${game.player.displayScore('playerScore')}`
  computerScore.innerText = `Wins : ${game.computer.displayScore('opponentScore')}`
}

function reset() {
  game.loading = false;
  showHide([fighters], [victoryZone, sadCloud, document.getElementById(`${game.player.selection}Pick`)])
  show([gameButton])
  happyParty.src = "";
  sadParty.src = "";
  game.player.wins = false;
  message.innerText = "choose your fighter"
}

function changeGame() {
  showHide([easyGame, difficultGame], [battleZone, victoryZone, fighters, gameButton])
  message.innerText = "choose your game"
  header.innerText = "Elephant, Mouse, Cat"
}
