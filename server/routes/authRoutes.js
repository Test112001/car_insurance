const express = require("express");
const router = express.Router();
const { saveAuth } = require("../controllers/authController");

router.post("/saveAuth", saveAuth);

module.exports = router;
