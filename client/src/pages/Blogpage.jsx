import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import homeHero from "../assets/home1.jpg";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await axios.get("https://swamiglobaltrade-production.up.railway.app/api/blogs");

    // latest first
    const sorted = res.data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    setBlogs(sorted);
  };

  if (!blogs.length) return <p>Loading...</p>;

  return (<>
    <Hero
      title="Blogs & Insights"
        subtitle="Swami Global Trade LLP"
        image={homeHero}
        description="Reach us by email, phone, or through the enquiry form below. We provide Technical Data Sheets, pricing, and sample availability within 24 hours."
      />
    <div className="max-w-7xl mx-auto px-6 py-10 bg-linear-to-r from-purple-200 via-blue-100 to-purple-300">

  <h1 className="text-3xl font-bold mb-8"></h1>

  {/* TOP SECTION */}
  <div className="grid md:grid-cols-3 gap-6 mb-10">

    {/* BIG LATEST BLOG */}
    <div
      onClick={() => navigate(`/blog/${blogs[0].slug || blogs[0]._id}`)}
      className="md:col-span-2 relative cursor-pointer rounded-xl overflow-hidden group"
    >
      <img
        src={blogs[0].image?.url}
        className="w-full h-[400px] object-cover group-hover:scale-105 transition"
      />

      <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end text-white">

        <div className="text-sm mb-2">
          {new Date(blogs[0].createdAt).toDateString()} • {blogs[0].author || "Admin"}
        </div>

        <h2 className="text-2xl font-bold">
          {blogs[0].title}
        </h2>

        <p className="mt-2 text-sm line-clamp-2">
          {blogs[0].excerpt}
        </p>

      </div>
    </div>

    {/* RIGHT SIDE 2 SMALL BLOGS */}
    <div className="flex flex-col gap-6">

      {blogs.slice(1, 3).map((b) => (

        <div
          key={b._id}
          onClick={() => navigate(`/blog/${b.slug || b._id}`)}
          className="relative cursor-pointer rounded-xl overflow-hidden group"
        >
          <img
            src={b.image?.url}
            className="w-full h-[190px] object-cover group-hover:scale-105 transition"
          />

          <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end text-white">
            <div className="text-sm mb-2">
          {new Date(blogs[0].createdAt).toDateString()} • {blogs[0].author || "Admin"}
        </div>
            <h3 className="font-semibold text-sm">
              {b.title}
            </h3>

          </div>
        </div>

      ))}

    </div>

  </div>

  {/* BELOW GRID */}
  <div className="grid md:grid-cols-3 gap-8">

    {blogs.slice(3).map((b) => (

      <div
        key={b._id}
        onClick={() => navigate(`/blog/${b.slug || b._id}`)}
        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
      >

        <img
          src={b.image?.url}
          className="w-full h-52 object-cover"
        />

        <div className="p-4">

          <div className="text-xs text-gray-500 mb-2">
            {new Date(b.createdAt).toLocaleDateString()}
          </div>

          <h3 className="font-semibold mb-2">
            {b.title}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2">
            {b.excerpt}
          </p>

          <span className="text-blue-600 text-sm mt-2 inline-block">
            Read More →
          </span>

        </div>

      </div>

    ))}

  </div>

</div>
</>
  );
};

export default BlogPage;