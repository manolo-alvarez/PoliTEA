const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const committeeSchema = new Schema({
    _attributes: {
      committee_full_name: String,
      committee_name: String,
      industry: String,
      industry_code: String,
      congno: Number,
      source: String,
    },
    member: [{
      _attributes: {
        first_name: String,
        last_name: String,
        member_name: String,
        cid: String,
        party: String,
        state: String,
        state_abbr: String,
        total: Number,
        indivs: Number,
        pacs: Number
      }
    }]
});

module.exports = mongoose.model('committees', committeeSchema);
