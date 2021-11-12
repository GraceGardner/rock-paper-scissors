class Player {
  constructor() {
    this.selection = ""
    this.score = 0
    this.fighters= ["elephant", "cat", "mouse", "ferret", "cucumber"]
    this.opponent = ""
    this.opponentScore = 0
  }
  //
  // makeSelection(selection) {
  //   this.selection = selection;
  //   this.randomizeSelection();
  // }

  recordScore() {
    this.score++;
  }

  setOpponent(){
    this.opponent = this.fighters[this.randomize(this.fighters)];
  }

  randomize(array) {
    return Math.floor(Math.random() * array.length);
  }


}
