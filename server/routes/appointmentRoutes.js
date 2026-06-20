const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");


// GET ALL APPOINTMENTS
router.get("/", async (req, res) => {
  try {
    const { email } = req.query;

    let query = {};

    if (email) {
      query.patientEmail = email;
    }

    const appointments = await Appointment.find(query)
      .populate("doctorId")
      .sort({ createdAt: -1 });

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// CREATE APPOINTMENT
router.post("/", async (req, res) => {
  try {
    const appointment = await Appointment.create(
      req.body
    );

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// DELETE APPOINTMENT
router.delete("/:id", async (req, res) => {
  try {
    const deletedAppointment =
      await Appointment.findByIdAndDelete(
        req.params.id
      );

    if (!deletedAppointment) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      message:
        "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;