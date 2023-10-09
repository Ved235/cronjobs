const router = require("express").Router();
const verify = require("../middleware/tokenVerification");
const Team = require("../models/Team");
const Log = require("../models/Log");
const Questions = require("../models/Questions");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");

// Define the rate limit options (adjust as needed)
const apiLimiter = rateLimit({
  windowMs: 5000, // 11 seconds window (slightly more than your setTimeout)
  max: 1, // Limit each IP to 1 request within the window
  message: "Too many requests from this IP, please try again later.",
});

require("dotenv").config();

router.post("/answer/", verify, apiLimiter, async (req, res) => {

});

module.exports = router;
