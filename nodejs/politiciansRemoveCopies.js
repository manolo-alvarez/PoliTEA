/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/25/2020
 * @summary: Javascript file that pulls politicians ProPublica API and populates MongoDB
 */

 //'use strict';

const politician = require('./politiciansSchema.js')

const https = require('https');

const MEMBERS_URL = 'https://api.propublica.org/congress/v1/members/';

politician.aggregate([
  { $match: {
    id: { "$ne": '' }
  }},
  { $group: {
    _id: { id: "$id"}, // can be grouped on multiple properties
    uniqueIds: { "$addToSet": "$_id" },
    count: { "$sum": 1 }
  }},
  { $match: {
    count: { "$gt": 1 }    // Duplicates considered as count greater than one
  }}
]).allowDiskUse(true).exec(function(err, data){
  if(err) console.log("ERROR");

  data.forEach(function(doc) {
    doc.uniqueIds.shift();      // First element skipped for deleting
    politician.remove({_id : {$in: doc.uniqueIds }}).remove(function(err, numRemoved){

      if(err) console.log(err)

      console.log(numRemoved)
    }) // Delete remaining duplicates
  });
});              // You can display result until this and check duplicates
