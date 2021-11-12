class Game {
  constructor() {
    this.difficulty = ""
    this.announcement = ""
  }

  selectDifficulty(player) {
    if (this.difficulty === "classic") {
      player.fighters = ["elephant", "cat", "mouse"];
    } else if (this.difficulty === "difficult") {
      player.fighters = ["elephant", "cat", "mouse", "ferret", "cucumber"];
    }
  }

  decareWinner(player) {
    if (player.selection === player.opponent) {
      this.announcement = `DRAW!!!`
    } else if(player.selection === "elephant" && player.opponent === "cucumber" || player.opponent === "cat") {
      this.announcement = `${player.selection} wins!!!`
      player.score++
    } else if (player.selection === "cat" && player.opponent === "mouse" || player.opponent === "ferret") {
      this.announcement = `${player.selection} wins!!!`
      player.score++
    } else if (player.selection === "mouse" && player.opponent === "elephant" || player.opponent === "cucumber") {
      this.announcement = `${player.selection} wins!!!`
      player.score++
    } else if (player.selection === "ferret" && player.opponent === "elephant" || player.opponent === "mouse"){
      this.announcement = `${player.selection} wins!!!`
      player.score++
    } else if (player.selection === "cucumber" && player.opponent === "ferret" || player.opponent === "cat") {
      this.announcement = `${player.selection} wins!!!`
      player.score++
    } else {
      this.announcement = `Oh no! the ${player.selection} lost...`
      player.opponentScore++
    }
  }


}
