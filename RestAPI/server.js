const uri = "mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority"
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(uri, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("Connected!"))

const politicianSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    house: String,
    party: String,
    age: String,
    bills: [String],
    donors:{}

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
const politicians = mongoose.model('politicians', politicianSchema);
const locations = mongoose.model('locations', locationSchema);
const bills = mongoose.model('bills', billSchema);

let guy = new politicians({
    first_name: 'Bill',
    last_name: 'Clinton',
    house:'Congress',
    party:'Democrat',
    Age:'100',
    bills:['I','didnt','inhale'],
    donors:['Monica','Lewinsky']
})
guy.save();