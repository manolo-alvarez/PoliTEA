/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/19/2020
 * @summary: Javascript file that pulls politicians ProPublica API and populates MongoDB
 */

// Using Node.js `require()`
const politician = require('./politiciansSchema.js')

// Constant URL value for ProPublica API. This pulls all members in the current (116) senate
const SENATE_MEMBERS_URL = 'https://api.propublica.org/congress/v1/116/senate/members.json';

// Constant https
const https = require('https');

mongoose.set('bufferCommands', false);

try{

  https.get(SENATE_MEMBERS_URL, {headers: {'X-API-Key': 'P3QUvk64v2F2XNUHwHPyhhfqs22CVRE2NVlUvELJ'}}, (resp) => {
    let json = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      json += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      var data = JSON.parse(json)

      data.results[0].members.forEach(member => {

        politician.create(member, function (err, member) {
          if (err) return "error";
          // saved!
        });

      });

    });

  }).on("error", function(error) {
        console.log("prob here");
  });

} catch(e) {
    console.log("Problem is with GET");
}
