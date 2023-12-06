const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

router.get("/car", carController.getAllCars);
router.post("/car", carController.createCar);
router.get("/car/:id", carController.getCarById);
router.patch("/car/:id", carController.updateCarById);

module.exports = router;
