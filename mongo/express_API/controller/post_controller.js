const events = require('../model/post_model');

exports.showIndex = (req, res, next) => {
       res.send('ruunning node api');
}


exports.showZipCodeEvents = (req, res, next) => {
  events.find({"postal_code": req.params.id},  function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('No upcoming events found in zip code <strong>' + req.params.id + '</strong>')
    }
    // var A = new Date(); 
    // res.status(200).json({"date":A})
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
 
exports.showStateEvents = (req, res, next) => {
  let state = titleCase(req.params.id);
  events.find({"region_name": state}, function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('No upcoming events found in <strong>' + state + '</strong>. (Please enter your full state name rather than an abbreviation).')
    }
    res.status(200).json(docs)
  })
}

// exports.showFinances = (req, res, next) => {
//   events.find({"id": req.params.id}, 'finances', function (err, docs) {
//     if (err || docs.length==0) {
//       return res.status(404).send('Finances for this politician not found')
//     }
//     res.status(200).json(docs)
//   })
// }

// exports.showAssets = (req, res, next) => {
//   events.find({"id": req.params.id}, 'assets', function (err, docs) {
//     if (err || docs.length==0) {
//       return res.status(404).send('Assets for this politician not found')
//     }
//     res.status(200).json(docs)
//   })
// }

function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    sentence = sentence.join(" ");
 return sentence;
 }