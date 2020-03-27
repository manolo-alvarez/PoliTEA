const uri = "mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority"
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("Connected!"))

// const politicians = mongoose.model('politicians');

const apiroutes = require('./routes/api_routes.js');
app.use('/', apiroutes); //using routes specified externally

app.listen(3000, () => console.log(`Example app listening on port 3000!`))

const politicianSchema = new mongoose.Schema({
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
  donors:
    [{
      year: String,
      org_name: String,
      total: String,
      pacs: String,
      indivs: String
    }],
  industries:
    [{
      year: String,
      industry_name: String,
      total: String,
      pacs: String,
      indivs: String
    }],

    finances:
    [{
        year: String,
        net_worth: Number,
        total_assets: Number,
    }],
    assets: [{
      year: String,
      name: String,
      asset_value: Number
    }]
});
const politicians = mongoose.model('politicians', politicianSchema);

module.exports = politicians
