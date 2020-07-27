let resultsDiv = document.querySelector("#results");
let maxDiv = document.querySelector("#max");
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

  let maxRoll = parseInt(4 * diceQuantity.value) + parseInt(diceModifier.value);
  if (diceModifier.value === '') {
    maxDiv.innerHTML = "The maximum number you could roll is " + 4 * diceQuantity.value;
  }
  else {
    maxDiv.innerHTML = "The maximum number you could roll is " + maxRoll;
  }

  if (diceQuantity.value <= 1 && diceModifier.value === '') {
    resultsDiv.innerHTML = roll;
  }
  else if (diceQuantity.value >1 && diceModifier.value === '') {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    resultsDiv.innerHTML = roll + " = " + rollResult + "!";
  }
  else {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    let totalRoll = parseInt(rollResult) + parseInt(diceModifier.value);
    resultsDiv.innerHTML = roll + " + " + diceModifier.value + " = " + totalRoll + "!";
  }
}

function rollD6() {

  let roll = [];
  for (var i = 0; i < diceQuantity.value; i++) {
    roll.push( d6[Math.floor(Math.random() * d6.length)] );
    console.log(roll);
  }

  let maxRoll = parseInt(6 * diceQuantity.value) + parseInt(diceModifier.value);
  if (diceModifier.value === '') {
    maxDiv.innerHTML = "The maximum number you could roll is " + 6 * diceQuantity.value;
  }
  else {
    maxDiv.innerHTML = "The maximum number you could roll is " + maxRoll;
  }

  if (diceQuantity.value <= 1 && diceModifier.value === '') {
    resultsDiv.innerHTML = roll;
  }
  else if (diceQuantity.value >1 && diceModifier.value === '') {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    resultsDiv.innerHTML = roll + " = " + rollResult + "!";
  }
  else {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    let totalRoll = parseInt(rollResult) + parseInt(diceModifier.value);
    resultsDiv.innerHTML = roll + " + " + diceModifier.value + " = " + totalRoll + "!";
  }
}

function rollD8() {

  let roll = [];
  for (var i = 0; i < diceQuantity.value; i++) {
    roll.push( d8[Math.floor(Math.random() * d8.length)] );
    console.log(roll);
  }

  let maxRoll = parseInt(8 * diceQuantity.value) + parseInt(diceModifier.value);
  if (diceModifier.value === '') {
    maxDiv.innerHTML = "The maximum number you could roll is " + 8 * diceQuantity.value;
  }
  else {
    maxDiv.innerHTML = "The maximum number you could roll is " + maxRoll;
  }

  if (diceQuantity.value <= 1 && diceModifier.value === '') {
    resultsDiv.innerHTML = roll;
  }
  else if (diceQuantity.value >1 && diceModifier.value === '') {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    resultsDiv.innerHTML = roll + " = " + rollResult + "!";
  }
  else {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    let totalRoll = parseInt(rollResult) + parseInt(diceModifier.value);
    resultsDiv.innerHTML = roll + " + " + diceModifier.value + " = " + totalRoll + "!";
  }
}

function rollD10() {

  let roll = [];
  for (var i = 0; i < diceQuantity.value; i++) {
    roll.push( d10[Math.floor(Math.random() * d10.length)] );
    console.log(roll);
  }

  let maxRoll = parseInt(10 * diceQuantity.value) + parseInt(diceModifier.value);
  if (diceModifier.value === '') {
    maxDiv.innerHTML = "The maximum number you could roll is " + 10 * diceQuantity.value;
  }
  else {
    maxDiv.innerHTML = "The maximum number you could roll is " + maxRoll;
  }

  if (diceQuantity.value <= 1 && diceModifier.value === '') {
    resultsDiv.innerHTML = roll;
  }
  else if (diceQuantity.value >1 && diceModifier.value === '') {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    resultsDiv.innerHTML = roll + " = " + rollResult + "!";
  }
  else {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    let totalRoll = parseInt(rollResult) + parseInt(diceModifier.value);
    resultsDiv.innerHTML = roll + " + " + diceModifier.value + " = " + totalRoll + "!";
  }
}

function rollD12() {

  let roll = [];
  for (var i = 0; i < diceQuantity.value; i++) {
    roll.push( d12[Math.floor(Math.random() * d12.length)] );
    console.log(roll);
  }

  let maxRoll = parseInt(12 * diceQuantity.value) + parseInt(diceModifier.value);
  if (diceModifier.value === '') {
    maxDiv.innerHTML = "The maximum number you could roll is " + 12 * diceQuantity.value;
  }
  else {
    maxDiv.innerHTML = "The maximum number you could roll is " + maxRoll;
  }

  if (diceQuantity.value <= 1 && diceModifier.value === '') {
    resultsDiv.innerHTML = roll;
  }
  else if (diceQuantity.value >1 && diceModifier.value === '') {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    resultsDiv.innerHTML = roll + " = " + rollResult + "!";
  }
  else {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    let totalRoll = parseInt(rollResult) + parseInt(diceModifier.value);
    resultsDiv.innerHTML = roll + " + " + diceModifier.value + " = " + totalRoll + "!";
  }
}

function rollD20() {

  let roll = [];
  for (var i = 0; i < diceQuantity.value; i++) {
    roll.push( d20[Math.floor(Math.random() * d20.length)] );
    console.log(roll);
  }

  let maxRoll = parseInt(20 * diceQuantity.value) + parseInt(diceModifier.value);
  if (diceModifier.value === '') {
    maxDiv.innerHTML = "The maximum number you could roll is " + 20 * diceQuantity.value;
  }
  else {
    maxDiv.innerHTML = "The maximum number you could roll is " + maxRoll;
  }

  if (diceQuantity.value <= 1 && diceModifier.value === '') {
    resultsDiv.innerHTML = roll;
  }
  else if (diceQuantity.value >1 && diceModifier.value === '') {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    resultsDiv.innerHTML = roll + " = " + rollResult + "!";
  }
  else {
    let rollResult = roll.reduce((a, b) => a + b, 0);
    let totalRoll = parseInt(rollResult) + parseInt(diceModifier.value);
    resultsDiv.innerHTML = roll + " + " + diceModifier.value + " = " + totalRoll + "!";
  }
}
