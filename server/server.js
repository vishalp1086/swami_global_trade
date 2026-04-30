const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const adminRoutes = require("./routes/adminRoutes");
const createDefaultAdmin = require("./config/createAdmin");
const productRoutes = require("./routes/productRoutes");
const masterRoutes =require("./routes/masterRoutes.js")
const enquiryRoutes = require("./routes/enquiry");
const blogRoutes = require("./routes/blog.js");

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://www.swamiglobaltrade.com",
    "https://swamiglobaltrade.com"
  ]
}));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/products", productRoutes);
app.use("/api/master", masterRoutes)

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/admin", adminRoutes);
// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    // 🔥 This line is important
    await createDefaultAdmin();
  })
  .catch((err) => console.log(err));
  app.use("/api/enquiry", enquiryRoutes);
  app.use("/api/blogs", blogRoutes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
