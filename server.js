var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/'));

app.get('/login', (req, res) => {
    res.redirect('/public/login.html');
});

app.post('/login', function (req, res) {
   if(data.length){
       console.log(req.body.dati);
   }
});

app.listen(8080);