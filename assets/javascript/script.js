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

  maxDiv.innerHTML = "The maximum number you could roll is...!";

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

  maxDiv.innerHTML = "The maximum number you could roll is...!";

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

  maxDiv.innerHTML = "The maximum number you could roll is...!";

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

  maxDiv.innerHTML = "The maximum number you could roll is...!";

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

  maxDiv.innerHTML = "The maximum number you could roll is...!";

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

  maxDiv.innerHTML = "The maximum number you could roll is...!";

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

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}