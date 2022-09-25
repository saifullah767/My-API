const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

// const apiData = require("./db.json");

app.get("/", (req, res) => {
    res.send("hello I am Your API");
})

app.get("/folder_data", (req, res) => {
    res.send(require("./db.json/folder_data"))

})

app.listen(port, () => {
  console.log("i am here")
})
