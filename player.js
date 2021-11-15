class Player {
  constructor(name, token, winCount) {
    this.name = name;
    this.token = token;
    this.selection = "";
    this.wins = false;
    this.fighters = ["elephant", "cat", "mouse", "ferret", "cucumber"];
    this.winCount = this.displayScore(winCount);
  }

  recordScore() {
    this.score++;
  }

  setOpponent(){
    this.opponent = this.fighters[this.randomize(this.fighters)];
  }

  randomize(array) {
    return Math.floor(Math.random() * array.length);
  }

  score(winner) {
    var currentScore = JSON.parse(localStorage.getItem(winner)) || 0
    currentScore++
    localStorage.setItem(winner, currentScore)
  }

  displayScore(player) {
    return JSON.parse(localStorage.getItem(player)) || 0
  }



}
