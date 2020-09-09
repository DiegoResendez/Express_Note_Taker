const express = require("express");
const app = express(); //start an express app

app.get('/', ( req , res ) => {
    res.json('Returns Home Page')
} )

app.get("*", (req, res) => {
    res.json("Page Not Found");
})






app.listen(8080,() => {
    console.log("App is starting at port ", 8080);
});


