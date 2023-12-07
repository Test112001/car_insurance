const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  pincode: {
    type: String,
    required: false,
  },
  mobile: { type: Number, require: false },

  selectedPlan: { type: String, require: false },
  premium: { type: Number, require: false },
  paCover: { type: Number, require: false },
  ncbDiscountAmount: { type: Number, require: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
