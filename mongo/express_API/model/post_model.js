const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
    url: String,
    id: String,
    city_name: String,
    region_abbr: String,
    postal_code: String,
    country_name: String,
    region_name: String,
    start_time: String,
    description: String,
    title: String,
    venue_address: String,
    stop_time: String,
    venue_name: String

});

module.exports = mongoose.model('events', Event);