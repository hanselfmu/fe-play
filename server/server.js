const path = require('path');
const express = require('express');

const app = express();
const port = 8090;

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../' + req.path));
});

app.listen(port, () => {
  console.log('> Starting fe notes server...');
});
