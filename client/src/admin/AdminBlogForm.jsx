import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const AdminBlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: "",
    isFeatured: false,
  });

  const [image, setImage] = useState(null);

  const isEdit = !!id;

  // ✅ FETCH SINGLE BLOG
  useEffect(() => {
    if (isEdit) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(
        `https://swami-global-trade.onrender.com/api/blogs/edit/${id}`
      );

      const blog = res.data;

      setForm({
        title: blog.title || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        tags: blog.tags?.join(",") || "",
        isFeatured: blog.isFeatured || false,
      });
if (blog.image?.url) {
  setImage(blog.image.url);
}
    } catch (err) {
      console.log(err);
    }
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", form.title);
    data.append("excerpt", form.excerpt);
    data.append("content", form.content);
    data.append("tags", form.tags);
    data.append("isFeatured", form.isFeatured);

    if (image) {
      data.append("image", image);
    }

    try {
      if (isEdit) {
        await axios.put(
          `https://swami-global-trade.onrender.com/api/blogs/${id}`,
          data
        );
        alert("Blog Updated");
      } else {
        await axios.post(
          "https://swami-global-trade.onrender.com/api/blogs",
          data
        );
        alert("Blog Added");
      }

      navigate("/admin/AdminBlogList");

    } catch (err) {
      console.log(err);
    }
  };

  if (isEdit && !form.title) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl bg-white text-black">

      <h2 className="text-xl font-bold mb-4">
        {isEdit ? "Edit Blog" : "Add Blog"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border w-full p-2"
        />

        <textarea
          name="excerpt"
          placeholder="Short Description"
          value={form.excerpt}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="content"
          placeholder="Full Content"
          value={form.content}
          onChange={handleChange}
          className="border p-2 w-full h-40"
        />

        <input
          name="tags"
          placeholder="tags (comma separated)"
          value={form.tags}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <label className="flex gap-2">
          <input
            type="checkbox"
            name="isFeatured"
            checked={form.isFeatured}
            onChange={handleChange}
          />
          Featured Blog
        </label>

        <button className="bg-green-600 text-white px-6 py-2">
          {isEdit ? "Update Blog" : "Add Blog"}
        </button>

      </form>
    </div>
  );
};

export default AdminBlogForm;