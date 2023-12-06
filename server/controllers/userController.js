const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    handleServerError(res, error);
  }
};

const createUser = async (req, res) => {
  try {
    const {
      name,
      email,
      selectedPlan,
      mobile,
      premium,
      paCover,
      ncbDiscountAmount,
    } = req.body;

    // Check if required fields are provided
    if (!name || !email) {
      return res
        .status(400)
        .json({ error: "Name and email are required fields" });
    }

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    const newUser = await User.create({
      name,
      email,
      selectedPlan,
      mobile,
      premium,
      paCover,
      ncbDiscountAmount,
    });

    res.status(201).json(newUser);
  } catch (error) {
    handleBadRequest(res, error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    handleResourceNotFound(res, user);
    res.status(200).json(user);
  } catch (error) {
    handleServerError(res, error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const {
      name,
      email,
      selectedPlan,
      mobile,
      premium,
      paCover,
      ncbDiscountAmount,
    } = req.body;

    // Check if required fields are provided
    if (!name || !email) {
      return res
        .status(400)
        .json({ error: "Name and email are required fields" });
    }

    // Check if the user exists
    const existingUser = await User.findById(req.params.id);

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user fields
    existingUser.name = name;
    existingUser.email = email;
    existingUser.selectedPlan = selectedPlan;
    existingUser.mobile = mobile;
    existingUser.premium = premium;
    existingUser.paCover = paCover;
    existingUser.ncbDiscountAmount = ncbDiscountAmount;

    // Save the updated user
    const updatedUser = await existingUser.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    handleBadRequest(res, error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
};

function handleServerError(res, error) {
  console.error("Internal Server Error:", error);
  res.status(500).json({ error: "Internal Server Error" });
}

function handleBadRequest(res, error) {
  console.error("Bad Request:", error);
  res.status(400).json({ error: "Bad Request" });
}

function handleResourceNotFound(res, resource) {
  if (!resource) {
    res.status(404).json({ error: "Resource not found" });
  }
}
