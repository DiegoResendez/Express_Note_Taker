
//Required for express
const express = require("express");
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')


//start an express app
const app = express(); 
let PORT = process.env.PORT || 8080;


app.get('/', ( req , res ) => {
    res.json('Returns Home Page')
});

app.get('/Page2', ( req , res ) => {
    res.json('Returns Page 2')
});

app.get('/Page3', ( req , res ) => {
    res.json('Returns Page 3')
});

app.get('/Page4', ( req , res ) => {
    res.json('Returns Page 4')
});

// Returns Error Message
app.get("*", (req, res) => {
    res.json("Page Not Found");
});

//Required for express
app.listen(PORT,() => {
    console.log("App is starting at port ", PORT);
});


