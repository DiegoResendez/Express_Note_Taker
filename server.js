
//Required for express
const express = require("express");
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')


//start an express app
const app = express(); 
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use("/api", apiRoutes);
app.use(htmlRoutes);

//Required for express
app.listen(PORT,() => {
    console.log("App is starting at port ", PORT);
});


