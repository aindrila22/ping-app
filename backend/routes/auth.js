const express = require("express");
const User = require("../models/auth");
const router = express.Router();

router.get("/getAllUsers", async (req, res) => {
    try {
      const forms = await User.find();
      res.status(200).json(forms);
    } catch (error) {
      console.error("Error fetching forms:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  module.exports = router;
