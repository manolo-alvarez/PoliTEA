
const bill = require('./billsAPI.js')

var pol = bill.getBillByID('hr7401-115', function(result){
    console.log(result)
});
    