var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/login', (req, res) => {
    res.redirect('/public/login.html');
});

app.listen(8080);