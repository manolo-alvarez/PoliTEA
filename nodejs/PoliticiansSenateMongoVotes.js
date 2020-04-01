/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/19/2020
 * @summary: Javascript file that pulls politicians ProPublica API and populates MongoDB
 */

const politician = require('./politiciansSchema.js')

const https = require('https');

const MEMBERS_URL = 'https://api.propublica.org/congress/v1/members/';

politician.find({short_title: "Sen."}, function(err, doc){

  if (err) console.log(err)

  doc.forEach((member) => {

    var url = MEMBERS_URL + member.id + "/votes.json";

    https.get(url, {headers: {'X-API-Key': 'P3QUvk64v2F2XNUHwHPyhhfqs22CVRE2NVlUvELJ'}}, (resp) => {
      let json = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        json += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var data = JSON.parse(json)
        var votes = new Array();

        data.results[0].votes.forEach(specificVote => {

          votes.push(specificVote)
        });

        politician.updateOne({_id : member._id }, {votes: votes}, {multi:true}, function(err, done){

          if(err) console.log(err)

          console.log("Added votes for " + member.first_name + " " + member.last_name)
        });

      });

    }).on("error", function(error) {
          console.log(error);
    });

  });

});
