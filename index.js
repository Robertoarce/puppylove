

//---------------- Libraries ----------------
// get the module
const express = require('express')


//---------------- constructors ----------------

//contructor
const app = express()


//---------------- Pages ----------------

//  when it gets ("/") it sends the response 'hello world'), two ways: 

// Home Page
app.get('/', function(req, res){res.send('Coucou Bolosse :) !')});



//---------------- ports ----------------
app.listen(process.env.PORT );

// const port = 3000;
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
