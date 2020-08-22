function setBackground() {
  document.body.style.backgroundImage = "url('assets/images/backgrounds/1.jpg')";
}

function changeBackground() {
  let backgrounds = ['../images/backgrounds/1.jpg', 'assets/images/backgrounds/2.jpg', 'assets/images/backgrounds/3.jpg', 'assets/images/backgrounds/4.jpg', 'assets/images/backgrounds/5.jpg']
  let newBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  document.body.style.backgroundImage = newBackground
}

setBackground();