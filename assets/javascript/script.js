let resultsDiv = document.querySelector("#results");
let diceQuantity = document.querySelector("#quantity");
let diceModifier = document.querySelector("#modifier");

let d4 = [1, 2, 3, 4];
let d6 = [1, 2, 3, 4, 5, 6];
let d8  = [1, 2, 3, 4, 5, 6, 7, 8];
let d10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let d12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let d20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function rollD4() {

  let roll = [];
  for (var i = 0; i < diceQuantity.value; i++) {
    roll.push( d4[Math.floor(Math.random() * d4.length)] );
    console.log(roll);
  }

  if (diceQuantity.value && diceModifier.value === '') {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    resultsDiv.innerHTML = rollResult;
  }
  else {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    resultsDiv.innerHTML = rollResult + " + " + diceModifier.value;
  }
}

function rollD6() {
    let d6Result = d6[Math.floor(Math.random() * d6.length)];
    resultsDiv.innerHTML = d6Result;
  }

function rollD8() {
    let d8Result = d8[Math.floor(Math.random() * d8.length)];
    resultsDiv.innerHTML = d8Result;
  }

function rollD10() {
    let d10Result = d10[Math.floor(Math.random() * d10.length)];
    resultsDiv.innerHTML = d10Result;
  }

function rollD12() {
    let d12Result = d12[Math.floor(Math.random() * d12.length)];
    resultsDiv.innerHTML = d12Result;
  }

function rollD20() {
    let d20Result = d20[Math.floor(Math.random() * d20.length)];
    resultsDiv.innerHTML = d20Result;
  }
