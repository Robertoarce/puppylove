

//---------------- Libraries ----------------
// get the module
const express = require('express');
const bodyParser = require('body-parser');


//---------------- constructors ----------------

//contructor
const app = express()
app.set("view engine", "ejs");

//---------------- adding body parser and CSS  ----------------
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));
app.use('/public', express.static(__dirname + "/public"));
//---------------- Pages ----------------
 

// Home Page
app.get('/', function(req, res){
    res.render("home");});
 
// Client Page
app.get('/clients', function(req, res){
    res.render("clients");});

 // Vets Page
app.get('/vets', function(req, res){
    res.render("vets");});
 // Client Page
 
app.get('/shop', function(req, res){
    res.render("shop");});

 // Client Page
app.get('/findbud', function(req, res){
    res.render("findbud");});
 


//---------------- ports ----------------
app.listen(process.env.PORT || 3000);

// const port = 3000;
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
