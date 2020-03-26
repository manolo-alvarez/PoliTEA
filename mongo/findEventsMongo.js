var mongoose = require('mongoose');
const uri = "mongodb+srv://neeti:fundofun@cluster0-iqc07.mongodb.net/locations?retryWrites=true&w=majority";


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.log("CONNECTION ERROR"));

console.log('DB Connected!'); 

const Schema = mongoose.Schema;
const Event = new Schema({
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
  
});

var event = mongoose.model('event', Event);

event.findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  mongoose.connection.close()
