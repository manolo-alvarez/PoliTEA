// const events = require('../model/event_model');
const mongoose = require('mongoose');
var events = mongoose.model('../model/event_model')

exports.showIndex = (req, res, next) => {
       res.send('ruunning node api');
}

/////////////////////// Neeti ///////////////////////////////////////

exports.showZipCodeEvents = (req, res, next) => {
  events.find({"postal_code": req.params.id},  function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('No upcoming events found in zip code <strong>' + req.params.id + '</strong>')
    }
    res.status(200).json(docs)
  })
}

exports.showCityEvents = (req, res, next) => {
  let city = titleCase(req.params.id);
  events.find({"city_name": city}, function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('No upcoming events found in <strong>' + city + '</strong>');
    }
    res.status(200).json(docs)
  })
}

exports.showStateAbbrEvents = (req, res, next) => {
  let abbr = (req.params.id).toUpperCase();
    events.find({"region_abbr": abbr}, function (err, docs) {
      if (err || docs.length==0) {
        return res.status(404).send('No upcoming events found in <strong>' + abbr + '</strong>');
      }
      res.status(200).json(docs)
    })
  }
 
exports.showStateEvents = (req, res, next) => {
  let state = titleCase(req.params.id);
  let abbr = (req.params.id).toUpperCase();
  events.find({"region_name": state}, function (err, docs) {
    if (docs.length==0) {
      return res.status(303).send('Redirecting to showAbbr')
    } if (err){
      return res.status(404).send('No upcoming events found in <strong>' + state + '</strong>.')
    }
    res.status(200).json(docs)
  })
}

function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    sentence = sentence.join(" ");
 return sentence;
 }

