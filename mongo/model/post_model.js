// //post_model.js
// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
// const Event = new Schema({
//   url: String,
//   id: String,
//   city_name: String,
//   country_name: String,
//   region_name: String,
//   start_time: String,
//   description: String,
//   title: String,
//   venue_address: String,
//   stop_time: String,
//   venue_name: String
  
// });

// module.exports = mongoose.model('event', Event);
//post_model.js
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postSchema = new Schema({
      title:{
        type: String,
        required: true
      },
      description:{
        type: String,
        required: true
      },
      image:{
        type: String,
        required: true
      },
      author:{
        type: Date,
        default: Date.now
      }
});
module.exports = mongoose.model('post', postSchema);