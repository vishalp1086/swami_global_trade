const express = require("express");
const router = express.Router();

const productController = require("../controllers/productcontroller");
const upload = require("../middleware/upload"); // ✅ use middleware

router.post(
  "/",
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "pdf", maxCount: 1 },
  ]),
  productController.createProduct
);

router.put(
  "/:id",
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "pdf", maxCount: 1 },
  ]),
  productController.updateProduct
);

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);

router.delete("/:id", productController.deleteProduct);

router.post("/request-download", productController.requestDownload);

module.exports = router;