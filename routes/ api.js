const express = require("express");
const { getHelloMessage, postData } = require("../controllers/apiController");

const router = express.Router();

// API routes
router.get("/hello", getHelloMessage);
router.post("/data", postData);

module.exports = router;
