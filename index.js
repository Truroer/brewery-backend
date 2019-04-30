require("dotenv").config();
const axios = require("axios");
var cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  axios
    .get(process.env.API_URL, {
      params: {
        key: process.env.API_KEY
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
