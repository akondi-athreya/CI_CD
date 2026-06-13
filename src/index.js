const express = require("express");
require('dotenv').config();

const PORT = process.env.PORT;


const app = express();

app.get("/", (req, res)=> {
    res.send("<h1>Hello World</h1>");
});

let counter = 0;

app.get("/api/v1", (req, res) => {
    counter = counter+1;
    return res.status(200).json({
        message: "api is working",
        count: counter
    })
})


app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});

