window.addEventListener('message', function(event) {
   const msg = JSON.parse(event.data);

   if (msg.cmd === 'adjustIframeHeight') {
       console.log('setting iframe container height to be: ', msg.value);
       setTimeout(function() {
           document.getElementById('frame').style.height = `${msg.value}px`;
       }, 0);
   }
});