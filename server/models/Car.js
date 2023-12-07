const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  userId: { type: String, required: false },
  number: { type: String, required: false },

  IDV: { type: Number, required: false },
  GVW: { type: String, required: false },
  ncb: { type: Number, required: false },
  total: { type: Number, required: false },
});

const Car = mongoose.model("car", carSchema);

module.exports = Car;
