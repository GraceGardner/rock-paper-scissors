

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

var player = new Player();
var game = new Game();

mouseButton.addEventListener("click", mouseClick);
elephantButton.addEventListener("click", elephantClick);
catButton.addEventListener("click", catClick);
ferretButton.addEventListener("click", ferretClick);
cucumberButton.addEventListener("click", cucumberClick);

function mouseClick() {
  player.selection = "mouse";
  player.setOpponent()
  game.decareWinner(player);
}

function elephantClick() {
  player.selection = "elephant";
  player.setOpponent()
  game.decareWinner(player);
}

function catClick() {
  player.selection = "cat";
  player.setOpponent()
  game.decareWinner(player);
}

function ferretClick() {
  player.selection = "ferret";
  player.setOpponent()
  game.decareWinner(player);
}

function cucumberClick() {
  player.selection = "cucumber";
  player.setOpponent();
  game.decareWinner(player);
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
