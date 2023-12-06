const Auth = require("../models/Auth");

const saveAuth = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newAuth = new Auth({ name, email });
    await newAuth.save();
    res.status(201).json(newAuth);
  } catch (err) {
    console.log();
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { saveAuth };
