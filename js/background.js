const images = ['0.jpg', '1.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgc = document.querySelector('.background');
// const bgImage = document.createElement('img');
// bgImage.src = `img/${chosenImage}`;
// bgImage.alt = 'background images';
//bgc.append(bgImage);

bgc.style.backgroundImage = `url(img/${chosenImage})`;
