class Game {
  constructor() {
    this.difficulty = ;
    this.announcement = ;
  }

  selectDifficulty(player) {
    if (this.difficulty === "classic") {
      player.fighters = ["elephant", "cat", "mouse"];
    } else if (this.difficulty === "difficult") {
      player.fighters = ["elephant", "cat", "mouse", "ferret", "cucumber"];
    }
  }

  decareWinner(player) {
    if (player.selection === "elephant" && player.opponent === "cat"|| "cucumber"){
      this.announcement = `${player.selection} wins!!!`
      player.score++
    } else if (player.selection === "cat" && player.opponent === "mouse"|| "ferret") {
      this.announcement = `${player.selection} wins!!!`
      player.score++
    } else if (player.selection === "mouse" && player.opponent === "cat"|| "cucumber") {
      this.announcement = `${player.selection} wins!!!`
      player.score++
    } else if (player.selection === "ferret" && player.opponent === "mouse"|| "elephant"){
      this.announcement = `${player.selection} wins!!!`
      player.score++
    } else if (player.selection === "cucumber" && player.opponent === "cat"|| "ferret") {
      this.announcement = `${player.selection} wins!!!`
      player.score++
    } else {
      this.announcement = `Oh no! the ${player.selection} lost...`
      player.opponentScore++
    }
  }

  
}
