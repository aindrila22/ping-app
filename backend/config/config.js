const dotenv = require("dotenv");
dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET,
  MONGO_URI: process.env.MONGO_URL,
};

module.exports = config;
