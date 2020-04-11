/**
 * @author: Manolo Alvarez
 * @lastRevised: 03/19/2020
 * @summary: Javascript file that pulls politicians ProPublica API and populates MongoDB
 */

const politician = require('./politiciansSchema.js')

module.exports = {

  getPoliticianByFirstName: function getPoliticianByFirstName(firstName, callback){

    politician.findOne({first_name: firstName}).exec(function(err, data){
      if(err) console.log(err)

      return callback(data)
    });
  }

}
