/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/19/2020
 * @summary: Javascript file that pulls politicians ProPublica API and populates MongoDB
 */

// Using Node.js `require()`
const mongoose = require('mongoose');
const politician = require('./model/post_model.js');

mongoose.connect('mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});

// States
var states = [];
{
states.push({full: "Alabama", abbreviation: "AL"});
states.push({full: "Alaska", abbreviation: "AK"});
states.push({full: "Arizona", abbreviation: "AZ"});
states.push({full: "Arkansas", abbreviation: "AR"});
states.push({full: "California", abbreviation: "CA"});
states.push({full: "Colorado", abbreviation: "CO"});
states.push({full: "Connecticut", abbreviation: "CT"});
states.push({full: "Delaware", abbreviation: "DE"});
states.push({full: "Florida", abbreviation: "FL"});
states.push({full: "Georgia", abbreviation: "GA"});
states.push({full: "Hawaii", abbreviation: "HI"});
states.push({full: "Idaho", abbreviation: "ID"});
states.push({full: "Illinois", abbreviation: "IL"});
states.push({full: "Indiana", abbreviation: "IN"});
states.push({full: "Iowa", abbreviation: "IA"});
states.push({full: "Kansas", abbreviation: "KS"});
states.push({full: "Kentucky", abbreviation: "KY"});
states.push({full: "Louisiana", abbreviation: "LA"});
states.push({full: "Maine", abbreviation: "ME"});
states.push({full: "Maryland", abbreviation: "MD"});
states.push({full: "Massachusetts", abbreviation: "MA"});
states.push({full: "Michigan", abbreviation: "MI"});
states.push({full: "Minnesota", abbreviation: "MN"});
states.push({full: "Mississippi", abbreviation: "MS"});
states.push({full: "Missouri", abbreviation: "MO"});
states.push({full: "Montana", abbreviation: "MT"});
states.push({full: "Nebraska", abbreviation: "NE"});
states.push({full: "Nevada", abbreviation: "NV"});
states.push({full: "New Hampshire", abbreviation: "NH"});
states.push({full: "New Jersey", abbreviation: "NJ"});
states.push({full: "New Mexico", abbreviation: "NM"});
states.push({full: "New York", abbreviation: "NY"});
states.push({full: "North Carolina", abbreviation: "NC"});
states.push({full: "North Dakota", abbreviation: "ND"});
states.push({full: "Ohio", abbreviation: "OH"});
states.push({full: "Oklahoma", abbreviation: "OK"});
states.push({full: "Oregon", abbreviation: "OR"});
states.push({full: "Pennsylvania", abbreviation: "PA"});
states.push({full: "Rhode Island", abbreviation: "RI"});
states.push({full: "South Carolina", abbreviation: "SC"});
states.push({full: "South Dakota", abbreviation: "SD"});
states.push({full: "Tennessee", abbreviation: "TN"});
states.push({full: "Texas", abbreviation: "TX"});
states.push({full: "Utah", abbreviation: "UT"});
states.push({full: "Vermont", abbreviation: "VT"});
states.push({full: "Virginia", abbreviation: "VA"});
states.push({full: "Washington", abbreviation: "WA"});
states.push({full: "West Virginia", abbreviation: "WV"});
states.push({full: "Wisconsin", abbreviation: "WI"});
states.push({full: "Wyoming", abbreviation: "WY"});
}

// Parties
var parties = [];
{
  parties.push({full: "Democrat", abbreviation: "D"})
  parties.push({full: "Republican", abbreviation: "R"})
}

// current attribute to update: party.

parties.forEach((curr) => {

  politician.find({party: curr.abbreviation}, function(err, members){

    if (err) console.log(err)

    members.forEach((member) => {

      politician.updateOne({_id : member._id }, {party: curr.full}, {multi:true}, function(err, done){

        if(err) console.log(err)

        console.log("Changed party name for " + member.first_name + " " + member.last_name)
      });

    });

  });

})
