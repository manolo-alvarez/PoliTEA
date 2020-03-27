const politicians = require('../model/post_model');

exports.showIndex = (req, res, next) => {
       res.send('ruunning node api');
}


exports.showPolitician = (req, res, next) => {
  politicians.find({"last_name": "Amash"},  function (err, docs) {
    if (err) return err
    res.status(200).json(docs)
  })
}
