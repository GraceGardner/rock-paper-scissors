class Player {
  constructor(name, token, winCount) {
    this.name = name;
    this.token = token;
    this.selection = "";
    this.wins = false;
    this.winCount = this.displayScore(winCount);
  }

  setOpponent(array){
    this.selection = array[this.randomize(array)];
  }

  randomize(array) {
    return Math.floor(Math.random() * array.length);
  }

  takeTurn(selection) {
    this.selection = `${selection}`
  }

  score(winner) {
    var currentScore = JSON.parse(localStorage.getItem(winner)) || 0
    currentScore++
    localStorage.setItem(winner, currentScore)
  }

  displayScore(player) {
    return JSON.parse(localStorage.getItem(player)) || 0
  }

//   A player.js file that contains a Player class.
// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// saveWinsToStorage
// retrieveWinsFromStorage
// takeTurn



}
