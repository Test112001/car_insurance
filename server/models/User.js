const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  selectedPlan: { type: String, require: false },
  mobile: { type: Number, require: false },
  premium: { type: Number, require: false },
  paCover: { type: Number, require: false },
  ncbDiscountAmount: { type: Number, require: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
