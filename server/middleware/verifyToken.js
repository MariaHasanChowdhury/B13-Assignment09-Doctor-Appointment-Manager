const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("========== VERIFY TOKEN ==========");
  console.log("Cookies:", req.cookies);

  const token = req.cookies?.token;

  console.log("Token:", token);

  if (!token) {
    console.log("❌ No Token Found");

    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET,
    (err, decoded) => {
      if (err) {
        console.log("❌ JWT Verify Error:");
        console.log(err);

        return res.status(403).json({
          message: "Forbidden",
        });
      }

      console.log("✅ Decoded User:");
      console.log(decoded);

      req.user = decoded;

      next();
    }
  );
};

module.exports = verifyToken;