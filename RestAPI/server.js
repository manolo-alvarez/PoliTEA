const uri = "mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority"
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(uri, {useNewUrlParser: true});
const db = mongoose.connection;

const politicianSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    house: String,
    party: String,
    age: String,
    bills: [String],
    donors: [mongoose.ObjectId],

});
const locationSchema = new mongoose.Schema({
    //Editing locationSchema how do we define a location??
    district: String,
    events: {},
    polls: {},
});
const billSchema = new mongoose.Schema({
    issue: String,
    title: String,
    date: Date,
    description: String,
    politicians_involved: [mongoose.ObjectId] 
});
const politicians = mongoose.model('politician', politicianSchema);
const locations = mongoose.model('location', politicianSchema);
const bills = mongoose.model('politician', politicianSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("Connected!"))

