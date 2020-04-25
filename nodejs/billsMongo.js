

const mongoose = require('mongoose');
const bill = require('./billsSchema.js')

// Constant URL value for ProPublica API. This pulls all members in the current (116) house
const FEDERAL_BILLS_URL = 'https://api.propublica.org/congress/v1/116/both/bills/introduced.json';

// Constant https
const https = require('https');

//mongoose.set('bufferCommands', false);



      mongoose.connect('mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.log("THIS IS THE PROBLEM"));
  
try{


var i = 0;
var offset;
while(i < 13000) {
   var url = FEDERAL_BILLS_URL + "?offset=" + i;


    https.get(url, {headers: {'X-API-Key': 'P3QUvk64v2F2XNUHwHPyhhfqs22CVRE2NVlUvELJ'}}, (resp) => {
        let json = '';



         // A chunk of data has been recieved.
         resp.on('data', (chunk) => {
              json += chunk;
         });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      var data = JSON.parse(json)

      data.results[0].bills.forEach(member => {

        bill.create(member, function (err, member) {
          if (err) return "error";
          // saved!
        });

      });

    });
    
  }).on("error", function(error) {
        console.log("prob here");
  });
  i = i + 20;
}
 } catch(e) {
    console.log("Problem is with GET");
} 

    