const jwt = require("jsonwebtoken");

// Secret key for signing JWT tokens (replace with a strong secret)
const jwtSecret = "your-secret-key";

// Middleware for generating JWT tokens
const generateToken = (user) => {
     return jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: "1h" });
};

// Middleware for verifying JWT tokens
const verifyToken = (req, res, next) => {
     const token = req.header("Authorization");

     if (!token) {
          return res.status(401).json({ error: "Unauthorized" });
     }

     try {
          const decoded = jwt.verify(token, jwtSecret);
          req.user = decoded.userId;
          next();
     } catch (error) {
          res.status(401).json({ error: "Unauthorized" });
     }
};

module.exports = { generateToken, verifyToken };
