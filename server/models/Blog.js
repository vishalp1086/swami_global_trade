const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },

  excerpt: String, // short intro
  content: String, // full blog (HTML or text)

  image: {
    url: String,
  },

  tags: [String],

  isFeatured: { type: Boolean, default: false },

}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);