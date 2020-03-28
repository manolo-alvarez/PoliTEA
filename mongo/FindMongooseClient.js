var MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://neeti:fundofun@cluster0-iqc07.mongodb.net/locations?retryWrites=true&w=majority";
MongoClient.connect(uri, function (err, client) {
  if (err) throw err

  var db = client.db('locations')

  var oArgs = {
    'city_name': 'Chicago'
  };

  db.collection('events').find(oArgs).toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})