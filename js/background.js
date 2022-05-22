const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg" ];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

bgImage.id = "bgImage";

document.body.appendChild(bgImage);
