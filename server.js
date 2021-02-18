const express = require('express');
require("dotenv").config();
const fetch = require('node-fetch');


const PORT = process.env.PORT || 5000;

const app = express();

app.use("/public", express.static(process.cwd() + "/public"));

app.route("/").get(function(req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});