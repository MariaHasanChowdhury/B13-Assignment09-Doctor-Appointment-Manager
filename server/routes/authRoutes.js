const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Generate JWT Token
router.post("/jwt", (req, res) => {
  try {
    const user = req.body;

    console.log("JWT User:", user);

    if (!user?.email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
        photo: user.photo,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true হবে যখন HTTPS deploy করবে
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "JWT Created Successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate JWT",
    });
  }
});

// Logout
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  return res.status(200).json({
    success: true,
    message: "Logout Successful",
  });
});

module.exports = router;