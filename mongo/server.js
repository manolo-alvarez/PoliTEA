var express = require('express');
var cors = require('cors'); // We will use CORS to enable cross origin domain requests.
var mongoose = require('mongoose');
var app = express();

//connect
const uri = "mongodb+srv://neeti:fundofun@cluster0-iqc07.mongodb.net/locations?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.log("CONNECTION ERROR"));

var Schema = mongoose.Schema;

var Event = new Schema({
  url: String,
  id: String,
  city_name: String,
  country_name: String,
  region_name: String,
  start_time: String,
  description: String,
  title: String,
  venue_address: String,
  stop_time: String,
  venue_name: String
  
}, {
    collection: 'event'
});

var event = mongoose.model('event', Event);
mongoose.connect('mongodb://localhost:27017/dbName');

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});

app.get('/find/:query', cors(), function(req, res) {
    var query = { city_name: 'Washington' };

    event.find({ query
    }, function(err, result) {
    // event.find({
    //     $text: {
    //         $search: query
    //     }
    // }, function(err, result) {     
        if (err) throw err;
        if (result) {
            console.log(result)
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
})

Event.index({ city_name: 'text' });
