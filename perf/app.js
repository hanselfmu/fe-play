const express = require('express');
const app = new express();
const path = require('path');

const port = process.env.PORT || 3010;

app.use(express.static('client'));

/**
 * Note: Generally we don't need an application server for serving
 * static files; instead we can use a web server such as nginx for static resources.
 */
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

app.get('/css/*', function(req, res) {
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

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'app.html'));
});

app.listen(port, function() {
    console.log(`server listening on port ${port}`);
});