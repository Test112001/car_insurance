const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    handleServerError(res, error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required fields" });
    }

    // Find the user by email and password
    const user = await User.findOne({
      email: email,
    });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the provided password matches the stored password
    if (password === user.password) {
      // You may want to avoid sending the password in the response
      const { password: userPassword, ...userData } = user.toObject();
      return res
        .status(200)
        .json({ message: "Login successful", user: userData });
    } else {
      return res.status(401).json({ error: "Incorrect password" });
    }
  } catch (error) {
    handleServerError(res, error);
  }
};

const createUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      address,
      state,
      city,
      pincode,
      mobile,
      selectedPlan,
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
      password,
      address,
      state,
      city,
      pincode,
      selectedPlan,
      mobile,
      premium,
      paCover,
      ncbDiscountAmount,
    });

    res
      .status(201)
      .json({ message: "Account created successfully", user: newUser });
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
      password,
      address,
      state,
      city,
      pincode,
      mobile,
      selectedPlan,
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
    existingUser.password = password;
    existingUser.address = address;
    existingUser.state = state;
    existingUser.city = city;
    existingUser.pincode = pincode;
    existingUser.mobile = mobile;
    existingUser.selectedPlan = selectedPlan;
    existingUser.premium = premium;
    existingUser.paCover = paCover;
    existingUser.ncbDiscountAmount = ncbDiscountAmount;

    // Save the updated user
    const updatedUser = await existingUser.save();

    res
      .status(200)
      .json({ message: "Account updated successfully", user: updatedUser });
  } catch (error) {
    handleBadRequest(res, error);
  }
};

module.exports = {
  getAllUsers,
  login,
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
