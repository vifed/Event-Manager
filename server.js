const http = require('http');
const express = require('express');
const expSession = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const Router = require('./routes/routes');
const mySql = require('mysql');
const jwt = require("jsonwebtoken");

const myDB = mySql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "EMDB"
});

const app = express();
const serverWeb = http.createServer(app);

const mySqlStore = require('express-mysql-session')(expSession);

var option = {
    host: 'localhost',
    port: 8080,
    user: '',
    password: '',
    database: 'EMDB'
};

const sessionStore = new mySqlStore(option, myDB);

const sessionMidleware = expSession({
    name: 'EMAPP',
    secret: 'MySecretWord123',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    httpOnly: true,
    cookie: {
        // secure: true,
        maxAge: 86400000
    }
});

myDB.connect( function (err) {
    if (err)
        throw err;
    else
        console.log("Database connesso!");
});


app.use(express.static(path.join(__dirname + '/')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(sessionMidleware);

app.use('/', Router);

serverWeb.listen(8080, () =>{
    console.log("Server avviato sulla porta 8080!");
});

// module.exports = app;