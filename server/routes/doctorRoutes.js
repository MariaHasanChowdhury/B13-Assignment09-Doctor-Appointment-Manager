const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");

// GET all doctors
router.get("/", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

module.exports = router;