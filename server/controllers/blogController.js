const Blog = require("../models/Blog");
const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async (file) => {
  const result = await cloudinary.uploader.upload(
    `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
    { folder: "products" }
  );

  return {
    url: result.secure_url,
    public_id: result.public_id,
  };
}; 

// CREATE BLOG
exports.createBlog = async (req, res) => {
  try {
    const { title, excerpt, content, tags, isFeatured } = req.body;

    let image = {};

    // ✅ SINGLE IMAGE (since you're using upload.single)
    if (req.file) {
      const uploaded = await uploadToCloudinary(req.file);

      image = {
        url: uploaded.url,
        public_id: uploaded.public_id,
      };
    }

    const blog = await Blog.create({
      title,
      excerpt,
      content,
      tags: tags ? tags.split(",") : [],
      isFeatured,
      image, // ✅ FIXED
      slug: title.toLowerCase().replace(/\s+/g, "-"),
    });

    res.json(blog);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating blog" });
  }
};


// GET ALL BLOGS
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json(err);
  }
};


// GET SINGLE BLOG
exports.getSingleBlog = async (req, res) => {
  try {
    let blog = await Blog.findOne({ slug: req.params.slug });

    // 🔥 fallback if slug not found (old blogs)
    if (!blog) {
      blog = await Blog.findById(req.params.slug);
    }

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE BLOG
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    // ✅ update fields
    blog.title = req.body.title;
    blog.excerpt = req.body.excerpt;
    blog.content = req.body.content;
    blog.tags = req.body.tags?.split(",");
    blog.isFeatured = req.body.isFeatured;
    blog.slug = req.body.title.toLowerCase().replace(/\s+/g, "-");

    // ✅ if new image uploaded
    if (req.file) {
      const uploaded = await uploadToCloudinary(req.file);

      blog.image = {
        url: uploaded.url,
        public_id: uploaded.public_id,
      };
    }

    await blog.save();

    res.json(blog);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// DELETE BLOG
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    // delete image from cloudinary
    if (blog.image?.public_id) {
      await cloudinary.uploader.destroy(blog.image.public_id);
    }

    await blog.deleteOne();

    res.json({ msg: "Blog deleted successfully" });

  } catch (err) {
    res.status(500).json(err);
  }
};