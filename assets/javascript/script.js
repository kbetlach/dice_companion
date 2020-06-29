let d4 = [1, 2, 3, 4];
let d6 = [1, 2, 3, 4, 5, 6];
let d8  = [1, 2, 3, 4, 5, 6, 7, 8];
let d10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let d12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let d20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function rollD4() {
  let d4Result = d4[Math.floor(Math.random() * d4.length)];
  console.log(d4Result);
}

function rollD6() {
    let d6Result = d6[Math.floor(Math.random() * d6.length)];
    console.log(d6Result);
  }

function rollD10() {
    let d10Result = d10[Math.floor(Math.random() * d10.length)];
    console.log(d10Result);
  }

function rollD12() {
    let d12Result = d12[Math.floor(Math.random() * d12.length)];
    console.log(d12Result);
  }

function rollD20() {
    let d20Result = d20[Math.floor(Math.random() * d20.length)];
    console.log(d20Result);
  }

rollD4();
rollD6();
rollD10();
rollD12();
rollD20();
