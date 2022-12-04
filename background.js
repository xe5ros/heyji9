const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

function changedBg() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.createElement("img");
  bgImage.src = `img/${chosenImage}`;
  document.body.style.backgroundImage = `url(${chosenImage})`;
}

changedBg();
setInterval(changedBg, 5000);
