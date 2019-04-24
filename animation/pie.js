const canvas = document.getElementById('demo');
const context = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// pie parameters
const lineWidth = 4;
const radius = 70;
const numberOfPies = 6;
const angleFactor = 2 * Math.PI / numberOfPies;
<<<<<<< Updated upstream
=======
// img parameters
const imgSources = ['demo1.png', 'demo2.png', 'demo3.png', 'demo4.png', 'demo5.png', 'demo6.png'];
const imgWidth = 30;
const imgHeight = 30;

const toRadian = deg => deg * Math.PI / 180;
>>>>>>> Stashed changes

// draw pies
context.beginPath();

let rotated = false;

for (let i = 0; i < numberOfPies; i++) {
    context.lineTo(centerX, centerY);
    context.arc(centerX, centerY, radius, i * angleFactor, (i + 1) * angleFactor, false);
<<<<<<< Updated upstream
=======

    const img = new Image();
    img.addEventListener('load', () => {
        context.save();
        context.rotate(toRadian(i * 360 / numberOfPies));

        context.drawImage(img, 0, 0, imgWidth, imgHeight);
        context.restore();
    });
    img.src = imgSources[i];
>>>>>>> Stashed changes
}

context.fillStyle = '#ff5722';
// context.fill();
context.lineWidth = lineWidth;
context.strokeStyle = '#333333';
context.stroke();
context.closePath();

// add spinner
const canvasSpinner = document.getElementById('canvas-spinner');
canvasSpinner.addEventListener('click', () => {
    canvas.classList.add('spinning');

    setTimeout(() => {
        canvas.classList.remove('spinning');
    }, 8000);
});


console.log('initialized');

