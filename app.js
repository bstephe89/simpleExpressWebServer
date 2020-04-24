//import dependencies
const express = require("express");
const port = 3129;

//create express server
const app = express();

//Niddleware goes here
app.use(express.static("public"));

app.listen(port, (err) => {
    if (err) {
        console.error(`Error starting application on port: ${port}... ${err}`)
    }
    console.log(`Application running on port: ${port}...`)
});