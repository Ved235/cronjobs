const router = require("express").Router();
const verify = require("../middleware/tokenVerification");
const Team = require("../models/Team");
const Log = require("../models/Log");
const Questions = require("../models/QuestionsGamble");
const mongoose = require("mongoose");

require("dotenv").config();

router.post("/answerGamble/", verify, async (req, res) => {
  

});

module.exports = router;
