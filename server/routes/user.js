const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();

router.post("/sendOtp", UserController.sendOtp);
router.post("/verifyOtp", UserController.verifyOtp);

module.exports = router;