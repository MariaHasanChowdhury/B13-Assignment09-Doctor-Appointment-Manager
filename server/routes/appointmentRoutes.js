const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appoinment");

// Get All Appointments
router.get("/", async (req, res) => {
  try {
    const appointments =
      await Appointment.find().populate(
        "doctorId"
      );

    res.json(appointments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Create Appointment
router.post("/", async (req, res) => {
  try {
    const appointment =
      await Appointment.create(req.body);

    res.status(201).json(
      appointment
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;