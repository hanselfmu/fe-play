const express = require('express');
const http = require('http');
const app = new express();
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 3000;

app.use(cors());

app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './' + req.path));
});

app.listen(port, function() {
  console.log(`server listening on port ${port}`);
});