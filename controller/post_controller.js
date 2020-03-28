const politicians = require('../model/post_model');

exports.showIndex = (req, res, next) => {
       res.send('ruunning node api');
}


exports.showPolitician = (req, res, next) => {
  politicians.find({"id": req.params.id},  function (err, docs) {
    if (err) return err
    res.status(200).json(docs)
  })
}
