const express = require("express");
const router = express.Router();


const upload = require("../middleware/upload");

const {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog
} = require("../controllers/blogController");

router.post("/", upload.single("image"), createBlog);
router.get("/", getBlogs);
router.get("/:slug", getSingleBlog);

// NEW
router.put("/:id", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

router.get("/edit/:id", async (req, res) => {
  try {
    const blog = await blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;