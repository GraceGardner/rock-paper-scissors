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

var game = new Game();
var player = game.player;
var classicFighters = [mouseButton, elephantButton, catButton];
var difficultFighters = [mouseButton, elephantButton, catButton, ferretButton, cucumberButton];

fighters.addEventListener("click", function(event) {
  click(event.target.alt)
});
easyGame.addEventListener("click", setEasy);
difficultGame.addEventListener("click", setDifficult);

function showFighters(fighters) {
  for (var i = 0; i < fighters.length; i++){
    show(fighters[i]);
  }
};

function displayBattleZone() {
  // hideAll()
  showHide(battleZone, fighters);
}

function displayWinner() {

}

function setEasy() {
  game.difficulty = "classic";
  game.selectDifficulty(player);
  hide(easyGame);
  hide(difficultGame);
  showFighters(classicFighters)
}

function setDifficult() {
  game.difficulty = "difficult"
  game.selectDifficulty(player);
  hide(easyGame);
  hide(difficultGame);
  showFighters(difficultFighters)
}

function click(selection) {
  player.selection = `${selection}`;
  player.setOpponent()
  game.declareWinner(player);
  displayFighter(player)
  displayBattleZone()
}

function showHide(toShow, toHide) {
  show(toShow);
  hide(toHide);
}

function show(toShow) {
  toShow.classList.remove("hidden");
}

function hide(toHide) {
  toHide.classList.add("hidden");
}

function displayFighter(player) {
  playerChoice.src = `./assets/${player.selection}.png`;
  playerChoice.alt = `${player.selection}`;
  opponentChoice.src = `./assets/${player.opponent}.png`;
  opponentChoice.alt = `${player.opponent}`;
}

// function hideAll() {
//   hide(elephantButton);
//   hide(mouseButton);
//   hide(catButton);
//   hide(ferretButton);
//   hide(cucumberButton);
// }
