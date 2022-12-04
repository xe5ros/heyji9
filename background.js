const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

function changedBg() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.createElement("img");
  bgImage.src = chosenImage;
  document.body.style.backgroundImage = `url("img/${chosenImage}")`;
  console.log(document.body.style.background);
}

changedBg();
setInterval(changedBg, 5000);
