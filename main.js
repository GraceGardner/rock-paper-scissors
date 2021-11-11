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

mouseButton.addEventListener("click", );
elephantButton.addEventListener("click", );
catButton.addEventListener("click", );
ferretButton.addEventListener("click", );
cucumberButton.addEventListener("click", );

function mouseClick() {
  player.selection = "mouse";
}

function elephantClick() {
  player.selection = "elephant";
}

function catClick() {
  player.selection = "cat";
}

function ferretClick() {
  player.selection = "ferret";
}

function cucumberClick() {
  player.selection = "cucumber";
}

function showHide(toShow, toHide) {
  show(toShow);
  hide(toHide);
}

function show(toShow) {
  toShow.classList.remove("hidden");
}

function hide(toHide) {
  toHide.classList.add("hidden")
}
