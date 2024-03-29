require("dotenv").config();
const express = require("express");
const app = express();

const connectdb = require("./db/connect");
const cors = require("cors");
app.use(cors());
app.use(express.json());

// routes

const carRoutes = require("./routes/carRoutes");
const userRoutes = require("./routes/userRoutes");

app.get("/", (req, res) => {
  return res.send("car_insurance_api");
});

app.use("/api", carRoutes);
app.use("/api", userRoutes);

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
