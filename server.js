//npm run dev
//node server.js

var express = require('express');

var app = express();

app.use('/files', express.static(__dirname + '/public'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT);