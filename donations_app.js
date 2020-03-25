const politicians = require('./RestAPI/server')
const uri = "mongodb+srv://megan:123@clustertest-wsnll.mongodb.net/test?retryWrites=true&w=majority"
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const https = require('https');

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("Connected!"))

// const contributionSchema = new mongoose.Schema({
//     crp_id: String,
//     cycle: String,
//     contributors: [{
//       org_name: String,
//       total: String,
//       pacs: String,
//       indivs: String
//     }]
// });
//
// const Contributions = mongoose.model('Contributions', contributionSchema);

// let c = new Contributions({
//     crp_id: 'N0001',
//     cycle: '2020',
//     contributors: [{org_name: "FB", total: '1', pacs: '2', indivs: '3'}, {org_name: 'Google', total: '4', pacs: '5', indivs: '6'}]
// })
// c.save();
//
// politicians.updateOne({crp_id: 'N0001'}, {
//     net_worth: '4',
// }, function(err, numberAffected, rawResponse) {
//     console.log(err);
// })

// var query = politicians.findOne({'crp_id': 'N0003'})
// query.select('donors')
//
// query.exec(function (err, person) {
//   if (err) console.log('error is ' + err);
//   console.log(person);
// });


// politicians.updateOne({last_name: 'Amash'}, {
//     first_name: 'Test',
// }, function(err, numberAffected, rawResponse) {
//     console.log(err);
// })

var method = 'candContrib'
var year = '2020'
var cid = 'N00007360'
const url = `https://www.opensecrets.org/api/?method=${method}&year=${year}&cid=${cid}&output=json&apikey=52f80155d9bb4bd043b2ef5c7e05e9cc`
//
// var query = politicians.findOne({'crp_id': cid})
// query.select('donors')
//
// query.exec(function (err, person) {
//   if (err) console.log('error is ' + err);
//   console.log(person);
// });

var query = politicians.find({'last_name': 'Amash'})
// query.select('donors')

query.exec(function (err, person) {
  if (err) console.log('error is ' + err);
  console.log(person);
});

https.get(url, (res) => {
  console.log('statusCode:', res.statusCode);
  // console.log('headers:', res.headers);

  let result = '';
  res.on('data', (d) => {
    // process.stdout.write(d);
    result += d;
  });
  res.on('end', () =>  {
    result = JSON.parse(result)
    result = JSON.stringify(result)
    result = result.replace(/@/g, "_")
    result = JSON.parse(result)
    // console.log(result)

    var cid = result.response.contributors._attributes.cid
    var cycle = result.response.contributors._attributes.cycle
    console.log(cid)
    console.log(cycle)

    result.response.contributors.contributor.forEach(contributor => {
        // console.log(contributor)

        politicians.update({last_name: 'Amash'},
          {
            "$push": {
              "donors": {
                "year": cycle,
                "org_name": contributor._attributes.org_name,
                "total": contributor._attributes.total,
                "pacs": contributor._attributes.pacs,
                "indivs": contributor._attributes.indivs
              }
            }
          },
          {safe: true},
          function(err, model) {
              console.log('error IS ' + err);
        })
    })
  })
}).on('error', (e) => {
  console.error('ERROR IS ' + e);
});

var query = politicians.find({'last_name': 'Amash'})
query.select('donors')

query.exec(function (err, person) {
  if (err) console.log('error is ' + err);
  console.log(person);
});
