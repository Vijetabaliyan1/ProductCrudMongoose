require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:", err);
  });
app.get("/", (req, res) => {
  res.send("API is running successfully 🚀");
});
// Routes
app.use("/api/products", productRoutes);

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});