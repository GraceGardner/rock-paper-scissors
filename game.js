class Game {
  constructor() {
    this.difficulty = ""
    this.announcement = ""
    this.player = new Player()
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
    if (this.player.selection === this.player.opponent) {
      this.announcement = `DRAW!!!`
    } else if (this.player.opponent === this.fighters[this.player.selection][0]  || this.player.opponent === this.fighters[this.player.selection][1]) {
      this.announcement = `The ${player.selection} wins!!!`
      this.player.score("playerScore");
      this.player.wins = true
    } else {
      this.announcement = `Oh no! the ${this.player.selection} lost...`
      this.player.score("opponentScore");
    }
  }
}
