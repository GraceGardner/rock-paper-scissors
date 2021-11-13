class Player {
  constructor() {
    this.selection = ""
    this.fighters = ["elephant", "cat", "mouse", "ferret", "cucumber"]
    this.opponent = ""
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
    var currentScore = localStorage.getItem(winner) || 0
    localStorage.setItem(winner, currentScore++)
  }

  displayScore(player) {
    return localStorage.getItem(player) || 0
  }



}
