import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleBlog = () => {

  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    const res = await axios.get(
      `https://swamiglobaltrade-production.up.railway.app/api/blogs/${slug}`
    );
    setBlog(res.data);
  };

  if (!blog) return <p>Loading...</p>;

 return (
  <div className=" mx-auto p-6 mt-20 bg-linear-to-r from-purple-200 via-blue-100 to-purple-300 rounded-lg">

    {/* Main Title */}
    <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
      {blog.title}
    </h1>

    {/* Top Section */}
    <div className="flex flex-col md:flex-row gap-8 items-start">

      {/* Left - Image */}
      <div className="w-full md:w-1/2">
        {blog.image?.url && (
  <img
    src={blog.image.url}
    className="w-full h-80 object-cover rounded"
    alt={blog.title}
  />
)}
      </div>

      {/* Right - Meta Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">

        <h2 className="text-2xl font-semibold mb-4">
          {blog.title}
        </h2>

        <p className="text-gray-600 mb-2">
          <span className="font-medium">Author:</span> {blog.author || "Admin"}
        </p>

        <p className="text-gray-600">
          <span className="font-medium">Date:</span>{" "}
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>

      </div>
    </div>

    {/* Description */}
    <div className="mt-10">
      <p className="text-gray-800 leading-relaxed text-lg">
        {blog.content}
      </p>
    </div>

  </div>
);
};

export default SingleBlog;