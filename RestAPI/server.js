// const uri = "mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority"

// const uri = "mongodb+srv://megan:123@clustertest-wsnll.mongodb.net/test?retryWrites=true&w=majority"
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => console.log("Connected!"))

// const politicianSchema = new mongoose.Schema({
//     crp_id: String,
//     first_name: String,
//     last_name: String,
//     house: String,
//     party: String,
//     age: String,
//     bills: [String],
//     net_worth: String,
//     // donors:{}
//     // donors: [mongoose.ObjectId]
//     // donors:
//     //   [{
//     //     year: String,
//     //     org_name: String,
//     //     total: String,
//     //     pacs: String,
//     //     indivs: String
//     //   }]
//     // }
//
// });

//
// const politicianSchema = new mongoose.Schema({
//   id: String,
//   title: String,
//   short_title: String,
//   api_uri: String,
//   first_name: String,
//   middle_name: String,
//   last_name: String,
//   suffix: String,
//   date_of_birth: String,
//   gender: String,
//   party: String,
//   leadership_role: String,
//   twitter_account: String,
//   facebook_account: String,
//   youtube_account: String,
//   govtrack_id: String,
//   cspan_id: String,
//   votesmart_id: String,
//   icpsr_id: String,
//   crp_id: String,
//   google_entity_id: String,
//   fec_candidate_id: String,
//   url: String,
//   rss_url: String,
//   contact_form: String,
//   in_office: Boolean,
//   cook_pvi: String,
//   dw_nominate: Number,
//   ideal_point: Number,
//   seniority: String,
//   next_election: String,
//   total_votes: Number,
//   missed_votes: Number,
//   total_present: Number,
//   last_updated: String,
//   ocd_id: String,
//   office: String,
//   phone: String,
//   fax: String,
//   state: String,
//   district: String,
//   at_large: Boolean,
//   geoid: String,
//   missed_votes_pct: Number,
//   votes_with_party_pct: Number,
//   votes_against_party_pct: Number,
//   donors:
//     [{
//       year: String,
//       org_name: String,
//       total: String,
//       pacs: String,
//       indivs: String
//     }],
//   industries:
//     [{
//       year: String,
//       industry_name: String,
//       total: String,
//       pacs: String,
//       indivs: String
//     }],
//   finances:
//   [{
//       year: String,
//       net_worth: Number,
//       total_assets: Number,
//   }],
//   assets: [{
//     year: String,
//     name: String,
    // asset_value: Number
//   }]
// });
//
// const locationSchema = new mongoose.Schema({
//     //Editing locationSchema how do we define a location??
//     district: String,
//     events: {},
//     polls: {},
// });
//
// const billSchema = new mongoose.Schema({
//     issue: String,
//     title: String,
//     date: Date,
//     description: String,
//     politicians_involved: [mongoose.ObjectId]
// });
// const committeeSchema = new mongoose.Schema({
//     committee_full_name: String,
//     committee_name: String,
//     industry: String,
//     congno: Number,
//     source: String,
//     members: [{
//       _attributes: {
//         member_name: String,
//         cid: String,
//         total: Number,
//         indivs: Number,
//         pacs: Number
//       }
//     }]
//   });

const committeeSchema = new mongoose.Schema({
    _attributes: {
      committee_full_name: String,
      committee_name: String,
      industry: String,
      congno: Number,
      source: String,
    },
    member: [{
      _attributes: {
        first_name: String,
        last_name: String,
        member_name: String,
        cid: String,
        party: String,
        state: String,
        total: Number,
        indivs: Number,
        pacs: Number
      }
    }]
});



const committees = mongoose.model('committees', committeeSchema)
// const politicians = mongoose.model('politicians', politicianSchema);
// const locations = mongoose.model('locations', locationSchema);
// const bills = mongoose.model('bills', billSchema);

// let guy = new politicians({
//     crp_id: 'N0003',
//     first_name: 'Bob',
//     last_name: 'Clinton',
//     house:'Congress',
//     party:'Democrat',
//     Age:'100',
//     bills:['I','didnt','inhale'],
//     // donors: [{year: '2020', org_name:'fb', total: '1', pacs: '2', indivs: '3'}, {year: '2020',org_name: 'goog', total: '4', pacs: '5', indivs: '6'}]
// })
// guy.save();

module.exports = mongoose.model('committees', committeeSchema)
