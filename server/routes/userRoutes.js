const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/user", userController.getAllUsers);
router.post("/user", userController.createUser);
router.get("/user/:id", userController.getUserById);
router.patch("/user/:id", userController.updateUserById);

module.exports = router;
