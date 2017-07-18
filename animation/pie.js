const canvas = document.getElementById('demo');
const context = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const lineWidth = 4;
const radius = 70;
const numberOfPies = 6;
const angleFactor = 2 * Math.PI / numberOfPies;

context.beginPath();

for (let i = 0; i < numberOfPies; i++) {
    context.lineTo(centerX, centerY);

    context.arc(centerX, centerY, radius, i * angleFactor, (i + 1) * angleFactor, false);
}

context.fillStyle = '#ff5722';
context.fill();
context.lineWidth = lineWidth;
context.strokeStyle = '#333333';
context.stroke();
context.closePath();

// spinner
const canvasSpinner = document.getElementById('canvas-spinner');
canvasSpinner.addEventListener('click', () => {
    canvas.classList.add('spinning');

    setTimeout(() => {
        canvas.classList.remove('spinning');
    }, 3000);
});