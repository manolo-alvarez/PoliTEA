/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/19/2020
 * @summary: Javascript file that pulls politicians ProPublica API and populates MongoDB
 */

// Using Node.js `require()`
const mongoose = require('mongoose');
// Constant URL value for ProPublica API. This pulls all members in the current (116) senate
const SENATE_MEMBERS_URL = 'https://api.propublica.org/congress/v1/116/senate/members.json';
// Constant https
const https = require('https');

mongoose.set('bufferCommands', false);

mongoose.connect('mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.log("THIS IS THE PROBLEM"));

const Schema = mongoose.Schema;

const Politicians = new Schema({
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
  votes_against_party_pct: Number
});

var politician = module.exports = mongoose.model('politician', Politicians);

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
