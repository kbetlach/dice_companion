let d4 = [1, 2, 3, 4];
let d6 = [1, 2, 3, 4, 5, 6];
let d8  = [1, 2, 3, 4, 5, 6, 7, 8];
let d10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let d12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let d20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function rollDice() {
    return 1 + Math.floor(Math.random()*6)
  }

  console.log(rollDice());