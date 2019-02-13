const express = require('express');
const http = require('http');
const app = new express();
const path = require('path');

const port = process.env.PORT || 3010;

app.use(express.static('client'));

app.get('/js/*', function(req, res) {
    const query = req.query;
    if (query.delay) {
        console.log('delaying ' + req.query);
        setTimeout(() => {
            console.log('sending ' + req.path);
            res.sendFile(path.resolve(__dirname, './' + req.path));
        }, query.delay * 1000);
    } else {
        res.sendFile(path.resolve(__dirname, './' + req.path));
    }
});

app.post('/js/*', function(req, res) {
    const query = req.query;
    if (query.delay) {
        console.log('delaying ' + req.path);
        setTimeout(() => {
            console.log('sending ' + req.path);
            res.sendFile(path.resolve(__dirname, './' + req.path));
        }, query.delay * 1000);
    } else {
        res.sendFile(path.resolve(__dirname, './' + req.path));
    }
});

app.get('/css/*', function(req, res) {
    const query = req.query;
    if (query.delay) {
        console.log('delaying ' + req.path);
        setTimeout(() => {
            console.log('sending ' + req.path);
            res.sendFile(path.resolve(__dirname, './' + req.path));
        }, query.delay * 1000);
    } else {
        res.sendFile(path.resolve(__dirname, './' + req.path));
    }
});

app.get('/img/*', function(req, res) {
    const query = req.query;
    if (query.delay) {
        console.log('delaying ' + req.path);
        setTimeout(() => {
            console.log('sending ' + req.path);
            res.sendFile(path.resolve(__dirname, './' + req.path));
        }, query.delay * 1000);
    } else {
        res.sendFile(path.resolve(__dirname, './' + req.path));
    }
});

app.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname, './' + req.path));
});

app.listen(port, function() {
    console.log(`server listening on port ${port}`);
});