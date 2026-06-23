const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const connectDB = require("./config/db");

const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();


// Database Connection

connectDB();


// Middleware

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());


// Routes

app.use("/api/auth", authRoutes);

app.use("/api/doctors", doctorRoutes);

app.use("/api/appointments", appointmentRoutes);


// Root Route

app.get("/", (req, res) => {
  res.send("DocAppoint Server Running 🚀");
});


// Server Start

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});