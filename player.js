class Player {
  constructor() {
    this.selection = ;
    this.score = 0;
    this.fighters= [];
    this.opponent = ;
    this.opponentScore = 0;
  }

  makeSelection(selection) {
    this.selection = selection;
    this.randomizeSelection();
  }

  recordScore() {
    this.score++;
  }

  randomizeSelection() {
    this.opponent = Math.floor(Math.random() * this.fighters.length);
  }


}
