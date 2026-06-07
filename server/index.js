const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const doctorRoutes = require("./routes/doctorRoutes");

connectDB();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/doctors", doctorRoutes);

app.get("/", (req, res) => {
  res.send("DocAppoint Server Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});