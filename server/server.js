require("dotenv").config();
const express = require("express");
const app = express();

const connectdb = require("./db/connect");
const cors = require("cors");
app.use(cors());
app.use(express.json());

// routes

const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");

app.get("/", (req, res) => {
  return res.send("car_insurance_api");
});

app.use("/api", authRoutes);
app.use("/api", carRoutes);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectdb(process.env.MONGO_URI);
    app.listen(port, console.log(`server is running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
