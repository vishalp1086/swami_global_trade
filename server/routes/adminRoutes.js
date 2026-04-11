const express = require("express");
const router = express.Router();
const { adminLogin } = require("../controllers/adminController");
const verifyAdmin = require("../middleware/authMiddleware");

router.post("/login", adminLogin);
// router.post("/", verifyAdmin, createProduct);
// router.get("/", verifyAdmin, getProducts);

module.exports = router;