const politicians = require('../model/post_model');

exports.showIndex = (req, res, next) => {
       res.send('ruunning node api');
}


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
