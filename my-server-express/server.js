//jshint esversion:6

// get the module
const express = require('express');

//contructor
const app = express();

// just a constant for the port
const port = 3000;

//  when it gets ("/") it sends the response 'hello world')
app.get('/', (req, res) => res.send('Hello There!1'));
app.get('/', function(req, res){res.send('Hello There!2')});;

// listen to the port: "port", when happens do this : "console..."
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
