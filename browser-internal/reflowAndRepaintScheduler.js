console.log('executing external script');
let str = '';
for (let i = 0; i < 5e7; i++) {
  str += i;
  if (str.length > 1000) {
    str = '';
  }
}
const repaint = document.getElementById('repaint');
const reflow = document.getElementById('reflow');
const colors = ['#10bdc4', '#c123f5'];
let count = 0;
let size = 200;

setInterval(() => {
  repaint.style.backgroundColor = colors[count % 2];
  count++;
}, 1000);

setInterval(() => {
  reflow.style.width = `${size}px`;
  reflow.style.height = `${size}px`;
  size += 10;
}, 1600);
/*
setTimeout(() => {
    const container = document.getElementById('container');

    console.log('issued DOM updates');
    // DOM update
    container.style.backgroundColor = '#10bdc4';
    container.innerText = 'finished updating background from red to a weird blue';

    console.log('start appending str');
    let str = '';
    for (let i = 0; i < 5e7; i++) {
        str += i;
        if (str.length > 1000) {
            str = '';
        }
    }

    console.log('done appending str', str.length);
}, 2000);
*/
