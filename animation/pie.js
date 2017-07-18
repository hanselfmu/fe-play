const canvas = document.getElementById('demo');
const context = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// pie parameters
const lineWidth = 4;
const radius = 70;
const numberOfPies = 6;
const angleFactor = 2 * Math.PI / numberOfPies;
// img parameters
const imgSources = ['demo1.png', 'demo2.png', 'demo3.png', 'demo4.png', 'demo5.png', 'demo6.png'];
const imgWidth = 30;
const imgHeight = 30;


// draw pies
context.beginPath();

for (let i = 0; i < numberOfPies; i++) {
    context.lineTo(centerX, centerY);

    context.arc(centerX, centerY, radius, i * angleFactor, (i + 1) * angleFactor, false);

    const img = new Image();
    img.addEventListener('load', () => {
        context.drawImage(img, centerX + i * 30, centerY, imgWidth, imgHeight);
    });
    img.src = imgSources[i];
}

context.fillStyle = '#ff5722';
context.fill();
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