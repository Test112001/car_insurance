const Car = require("../models/Car");

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({ data: cars });
  } catch (error) {
    console.error("Error getting all cars:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    return res.status(201).json(newCar);
  } catch (err) {
    console.error("Error creating car:", err);
    res.status(400).json({ err: "Bad Request" });
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id).lean().exec();
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }
    return res.status(200).json(car);
  } catch (err) {
    console.error("Error getting car by id:", err);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const updateCarById = async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedCar) {
      return res.status(404).json({ error: "Car not found" });
    }
    res.status(200).json(updatedCar);
  } catch (err) {
    console.error("Error updating car by id:", err);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

module.exports = {
  getAllCars,
  createCar,
  getCarById,
  updateCarById,
};
