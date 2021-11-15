class Game {
  constructor() {
    this.difficulty = ""
    this.announcement = ""
    this.player = new Player("player", "./assets/player.png", "playerScore")
    this.computer = new Player("computer", "./assets/computer.png", "opponentScore")
    this.fighters = {
      elephant: ["cucumber", "cat"],
      cat: ["mouse", "ferret"],
      mouse: ["elephant", "cucumber"],
      ferret: ["elephant", "mouse"],
      cucumber: ["ferret", "cat"]
    }
  }

  selectDifficulty(player) {
    if (this.difficulty === "classic") {
      this.player.fighters = ["elephant", "cat", "mouse"];
    } else if (this.difficulty === "difficult") {
      this.player.fighters = ["elephant", "cat", "mouse", "ferret", "cucumber"];
    }
  }

  declareWinner(player) {
    if (this.player.selection === this.computer.selection) {
      this.announcement = `DRAW!!!`
    } else if (this.computer === this.fighters[this.player.selection][0]  || this.computer === this.fighters[this.player.selection][1]) {
      this.announcement = `The ${player.selection} wins!!!`
      this.player.score("playerScore");
      this.player.wins = true
    } else {
      this.announcement = `Oh no! the ${this.player.selection} lost...`
      this.computer.score("opponentScore");
    }
  }
}
