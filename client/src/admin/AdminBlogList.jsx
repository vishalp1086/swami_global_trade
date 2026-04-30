import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate ,useParams } from "react-router-dom";

const AdminBlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    const res = await axios.get(
  `https://swamiglobaltrade-production.up.railway.app/api/blogs`
);
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    await axios.delete(`https://swamiglobaltrade-production.up.railway.app/api/blogs/${id}`);
    fetchBlogs();
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">All Blogs</h2>

        {/* ➕ ADD BLOG BUTTON */}
        <button
          onClick={() => navigate("/admin/AdminBlogForm")}
          className="bg-green-600 text-white px-4 py-2"
        >
          Add Blog
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {blogs.map((b) => (
          <div key={b._id} className="border rounded-lg overflow-hidden">

           {b.image?.url ? (
  <img
    src={b.image.url}
    className="h-40 w-full object-cover"
    alt={b.title}
  />
) : (
  <div className="h-40 w-full flex items-center justify-center bg-gray-200 text-gray-500">
    No Image
  </div>
)}

            <div className="p-3">
              <h3 className="font-semibold">{b.title}</h3>

              <div className="flex gap-2 mt-3">

                {/* ✏️ EDIT */}
                <button
                  onClick={() => navigate(`/admin/AdminBlogForm/${b._id}`)}
                  className="bg-blue-500 text-white px-3 py-1 text-sm"
                >
                  Edit
                </button>

                {/* ❌ DELETE */}
                <button
                  onClick={() => handleDelete(b._id)}
                  className="bg-red-500 text-white px-3 py-1 text-sm"
                >
                  Delete
                </button>

              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default AdminBlogList;