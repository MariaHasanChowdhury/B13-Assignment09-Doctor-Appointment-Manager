const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

const authRoutes =
  require("./routes/authRoutes");

// Connect Database
connectDB();

// Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());


// Routes
app.use(
  "/api/auth",
  authRoutes
);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("DocAppoint Server Running 🚀");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});