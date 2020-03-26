/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/19/2020
 * @summary: Javascript file that pulls politicians ProPublica API and populates MongoDB
 */

 //'use strict';

 const mongoose = require('mongoose');

 const https = require('https');

 const MEMBERS_URL = 'https://api.propublica.org/congress/v1/members/';

 mongoose.connect('mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser: true
 })
 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function() {
   console.log("we're connected!")
 });


 const Politicians = new mongoose.Schema({
   id: String,
   title: String,
   short_title: String,
   api_uri: String,
   first_name: String,
   middle_name: String,
   last_name: String,
   suffix: String,
   date_of_birth: String,
   gender: String,
   party: String,
   leadership_role: String,
   twitter_account: String,
   facebook_account: String,
   youtube_account: String,
   govtrack_id: String,
   cspan_id: String,
   votesmart_id: String,
   icpsr_id: String,
   crp_id: String,
   google_entity_id: String,
   fec_candidate_id: String,
   url: String,
   rss_url: String,
   contact_form: String,
   in_office: Boolean,
   cook_pvi: String,
   dw_nominate: Number,
   ideal_point: Number,
   seniority: String,
   next_election: String,
   total_votes: Number,
   missed_votes: Number,
   total_present: Number,
   last_updated: String,
   ocd_id: String,
   office: String,
   phone: String,
   fax: String,
   state: String,
   district: String,
   at_large: Boolean,
   geoid: String,
   missed_votes_pct: Number,
   votes_with_party_pct: Number,
   votes_against_party_pct: Number,
   votes: Array
 });

 const politician = mongoose.model('politician', Politicians);

/*
politician.aggregate([
  { $group: {
    _id: { id: "$id"}, // can be grouped on multiple properties
    uniqueIds: { $addToSet: "$_id" },
    count: { $sum: 1 }
  }},
  { $match: {
    count: { "gt": 1 }    // Duplicates considered as count greater than one
  }}
]).allowDiskUse(true).exec(function(err, data){
  if(err) console.log("ERROR");

  data.forEach(function(doc) {
    console.log(doc);
    doc.dups.shift();      // First element skipped for deleting
    politician.remove({_id : {$in: doc.uniqueIds }});  // Delete remaining duplicates
  });

  mongoose.disconnect();
});              // You can display result until this and check duplicates
*/

politician.find({short_title: "Rep."}, function(err, doc){

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
