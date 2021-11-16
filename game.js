class Game {
  constructor() {
    this.difficulty = ""
    this.announcement = ""
    this.player = new Player("player", "./assets/player.png", "playerScore")
    this.computer = new Player("computer", "./assets/computer.png", "opponentScore")
    this.choices = [];
    this.fighters = {
      elephant: ["cucumber", "cat"],
      cat: ["mouse", "ferret"],
      mouse: ["elephant", "cucumber"],
      ferret: ["elephant", "mouse"],
      cucumber: ["ferret", "cat"]
    }
    this.loading = false
  }

  selectDifficulty() {
    if (this.difficulty === "classic") {
      this.choices = ["elephant", "cat", "mouse"];
    } else if (this.difficulty === "difficult") {
      this.choices = ["elephant", "cat", "mouse", "ferret", "cucumber"];
    }
  }

  declareWinner() {
    if (this.player.selection === this.computer.selection) {
      this.announcement = `DRAW!!!`
    } else if (this.computer.selection === this.fighters[this.player.selection][0]  || this.computer.selection === this.fighters[this.player.selection][1]) {
      this.announcement = `The ${this.player.selection} wins!!!`
      this.player.score("playerScore");
      this.player.wins = true
    } else {
      this.announcement = `Oh no! the ${this.player.selection} lost...`
      this.computer.score("opponentScore");
    }
  }

    gameRest() {
      this.loading = false;
    }
}
