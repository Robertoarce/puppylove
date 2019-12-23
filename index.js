

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
app.use(express.static("public"));

//---------------- Pages ----------------
 

// Home Page
app.get('/', function(req, res){
    res.render("home");});
 

//---------------- ports ----------------
app.listen(process.env.PORT || 3000);

// const port = 3000;
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
