const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: String,
    specialty: String,
    image: String,
    experience: String,
    availability: [String],
    description: String,
    hospital: String,
    location: String,
    fee: Number,
    rating: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);