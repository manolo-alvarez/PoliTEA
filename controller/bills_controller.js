const billsModel = require('../model/bills_model');

exports.showIndex = (req, res, next) => {
       res.send('ruunning node api');
}

/////////////////////// Aidan ///////////////////////////////////////

exports.showAllBills = (req, res, next) => {

  let billz = [];


    docs.forEach((bill) => {
      billz.push({
          number: bill.number,
          title: bill.title,
          short_title: bill.short_title,
          sponsor_title: bill.sponsor_title,
          sponsor_name: bill.sponsor_name,
          sponsor_state: bill.sponsor_state,
          sponsor_party: bill.sponsor_party});
    })

    res.status(200).json(billz)
  
}


exports.showBillsByTopic = (req, res, next) => {

  let billsArray = [];


  bills.find({primary_subject: 'Immigration'},  function (err, docs) {
      if (err || docs.length==0) {
        return res.status(404).send('Bills not found')
      } 

      
    docs.forEach((bill) => {
      billsArray.push({
          number: bill.number,
          title: bill.title,
          short_title: bill.short_title,
          sponsor_title: bill.sponsor_title,
          sponsor_name: bill.sponsor_name,
          sponsor_state: bill.sponsor_state,
          sponsor_party: bill.sponsor_party});
    })

    res.status(200).json(bills)
  })
}
