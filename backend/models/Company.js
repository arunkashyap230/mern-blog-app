// models/Company.js
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  registrationDate: { type: Date, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: String,
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  businessAddress: Boolean,
  numShares: { type: Number, required: true },
  shareCapital: { type: Number, required: true },
  currency: { type: String, required: true },
  businessActivity1: { type: String, required: true },
  activity1Desc: String,
  businessActivity2: String,
  activity2Desc: String,
  director: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: String,
    country: { type: String, required: true },
    postalCode: { type: String, required: true },
    phone: { type: String, required: true },
    nationality: { type: String, required: true },
    idType: { type: String, required: true },
    idNumber: { type: String, required: true },
  },
});

module.exports = mongoose.model("Company", companySchema);
