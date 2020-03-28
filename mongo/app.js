//app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
//mongoDB connection string
const url = "mongodb+srv://neeti:fundofun@cluster0-iqc07.mongodb.net/test?retryWrites=true&w=majority";

app.use(express.json()) //sets content-type to json

const apiroutes = require('./routes/api_route.js');
app.use('/', apiroutes); //using routes specified externally

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
    app.listen(3000);
    console.log('database connected!');})
  .catch(err => console.log(err));