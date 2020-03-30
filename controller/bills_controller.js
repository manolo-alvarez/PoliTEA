const billsModel = require('../model/bills_model');

exports.showIndex = (req, res, next) => {
       res.send('ruunning node api');
}

/////////////////////// Aidan ///////////////////////////////////////

exports.showAllBills = (req, res, next) => {

    let bills = [];
/*     billsModel.find({short_title: 'Sen.'},  function (err, docs) {
      if (err || docs.length==0) {
        return res.status(404).send('Politician not found')
      } */
  
      docs.forEach((bill) => {
        bills.push({
            number: bill.number,
            title: bill.title,
            short_title: bill.short_title,
            sponsor_title: bill.sponsor_title,
            sponsor_name: bill.sponsor_name,
            sponsor_state: bill.sponsor_state,
            sponsor_party: bill.sponsor_party});
      })
  
      res.status(200).json(bills)
    
  }


  exports.showBillsByTopic = (req, res, next) => {

    let billsArray = [];
/*     billsModel.find({short_title: 'Sen.'},  function (err, docs) {
      if (err || docs.length==0) {
        return res.status(404).send('Politician not found')
      } */

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
  



/////////////////////// Manolo ///////////////////////////////////////

exports.showVotes = (req, res, next) => {
  politicians.find({"id": req.params.id}, 'votes',  function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('votes not found')
    }
    res.status(200).json(docs)
  })
}

exports.showBillTotal = (req, res, next) => {
  politicians.find({"id": req.params.id}, 'votes.total',  function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('bill total not found')
    }
    res.status(200).json(docs)
  })
}

exports.showAllSenators = (req, res, next) => {

  let members = [];
  politicians.find({short_title: 'Sen.'},  function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('Politician not found')
    }

    docs.forEach((senator) => {
      members.push({
        id: senator.id,
        title: senator.title,
        first_name: senator.first_name,
        middle_name: senator.middle_name,
        last_name: senator.last_name,
        gender: senator.gender,
        party: senator.party,
        date_of_birth: senator.date_of_birth});
    })

    res.status(200).json(members)
  })
}

exports.showAllCongressman = (req, res, next) => {

  let members = [];
  politicians.find({short_title: 'Rep.'},  function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('Politician not found')
    }

    docs.forEach((congressman) => {
      members.push({
        id: congressman.id,
        title: congressman.title,
        first_name: congressman.first_name,
        middle_name: congressman.middle_name,
        last_name: congressman.last_name,
        gender: congressman.gender,
        party: congressman.party,
        date_of_birth: congressman.date_of_birth});
    })

    res.status(200).json(members)
  })
}

////////////////////////////////////////////////////////////////////

exports.showPolitician = (req, res, next) => {
  politicians.find({"id": req.params.id},  function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('Politician not found')
    }
    res.status(200).json(docs)
  })
}

exports.showDonors = (req, res, next) => {
  politicians.find({"id": req.params.id}, 'donors', function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('Donors for this politician not found')
    }
    res.status(200).json(docs)
  })
}

exports.showIndustries = (req, res, next) => {
  politicians.find({"id": req.params.id}, 'industries', function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('Industries for this politician not found')
    }
    res.status(200).json(docs)
  })
}

exports.showFinances = (req, res, next) => {
  politicians.find({"id": req.params.id}, 'finances', function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('Finances for this politician not found')
    }
    res.status(200).json(docs)
  })
}

exports.showAssets = (req, res, next) => {
  politicians.find({"id": req.params.id}, 'assets', function (err, docs) {
    if (err || docs.length==0) {
      return res.status(404).send('Assets for this politician not found')
    }
    res.status(200).json(docs)
  })
}
