const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminControler");


router.post("/", adminController.login);
router.post("/create", adminController.createAdmin);

module.exports = router;