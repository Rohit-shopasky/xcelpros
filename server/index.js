const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./src/route')(app);


app.get("/",(req,res)=>{
   res.send("Hello");
})


var port = process.env.PORT || 3001;
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0-hg20y.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log("running with ", port);
    });
  })
  .catch(err => {
    console.log(err);
  });