//post_controller.js
const uri = "mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority"
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("Connected!"))

const politicians = require('../app.js')

exports.showIndex = (req, res, next) => {
       res.send('ruunning node api');
}

// exports.showPost = (req, res, next) => {
//       politicians.find() //fetches all the posts
//          .then(result => {
//              res.send(result);
//          }).catch(err => {
//              res.status(400).send(err);
//          })
// }

exports.showPost = (req, res, next) => {
  politicians.find({"last_name": "Amash"},  function (err, docs) {
    if (err) return err
    res.status(200).json(docs)
  })
}
