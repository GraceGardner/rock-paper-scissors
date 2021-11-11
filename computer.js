class Computer {
  constructor() {
    this.selection =;
    this.score = ;
    this.fighters = [];
  }

  randomizeSelection(fighters) {
    this.selection = Math.floor(Math.random() * fighters.length);
  }


}
