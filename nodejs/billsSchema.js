/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/19/2020
 * @summary: Javascript file that pulls politicians ProPublica API and populates MongoDB
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority', {
 useNewUrlParser: true,
 useUnifiedTopology: true
}).catch(err => console.log("THIS IS THE PROBLEM"));

const Bills = new mongoose.Schema({
     bill_id: String,
     bill_type: String,
     number:  String,
     bill_uri:   String,
     title:   String,
     sponsor_title:  String,
     sponsor_id:   String,
     sponsor_name:   String,
     sponsor_state:  String ,
     sponsor_party:  String ,
     sponsor_uri: String,
     gpo_pdf_uri:  String ,
     congressdotgov_url: String ,
     govtrack_url: String ,
     introduced_date:  String ,
     active: Boolean,
     house_passage: Date,
     senate_passage: Date,
     enacted: Date,
     vetoed: Date,
     cosponsors: Number,
     committees:  String,
     committee_codes: Array,
     subcommittee_codes: Array,
     primary_subject:  String,
     summary: String,
     summary_short:  String,
     latest_major_action_date: Date,
     latest_major_action: String  
});

var bill = module.exports = mongoose.model('bill', Bills);
