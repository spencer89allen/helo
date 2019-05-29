var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');

require('dotenv').config({path: __dirname + '/.env'});


var ctrl = require('./controller');

var app = express();

massive( process.env.CONNECTION_STRING, { scripts: __dirname + '/db' }).then( dbInstance => {
    app.set( 'db', dbInstance)
    console.log(`The database is connected`)
}).catch( error => {
    console.log(process.env.CONNECTION_STRING)
    console.error(error);
});

app.use(bodyParser.json());

//ENDPOINTS



var Port = 4000;

app.listen(Port, () => {
    console.log(`The server is listening on port ${Port}`)
});

