
const bill = require('./billsSchema.js')

module.exports = {

  getBillByID: function getBillByID(billID, callback){

    bill.findOne({bill_ID: billID}).exec(function(err, data){
      if(err) console.log(err)

      return callback(data)
    });
  }

}
