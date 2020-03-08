const mongoose = require("mongoose");

const searchCompanySchema = new mongoose.Schema({
  seasonNo: {
    type: String,
    required: false
  },
  episodeNo: {
    type: Number,
    required: false
  },
  deal: {
    type: String,
    required: true
  }
});

const searchCompany = mongoose.model("searchCompany", searchCompanySchema);

module.exports = searchCompany;
