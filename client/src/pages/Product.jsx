import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import homeHero from "../assets/productpage.jpg";
import Hero from "../components/Hero";
import { CheckCircle, ShieldCheck, FileText, Users, MessageSquare, Phone } from 'lucide-react';

const Product = () => {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://swamiglobaltrade-production.up.railway.app/api/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (<>
<Hero
      title="Our Products"
        subtitle="Export Quality | Origin: India | Certified. Tested. Documented."
        description="Swami Global Trade LLP exports a focused range of dehydrated vegetables, spices, and frozen food from India. Every product we supply is sourced from certified processing facilities, tested batch-by-batch by independent third-party labs, and shipped with complete trade documentation."
        image={homeHero}
      
      />
    <div className="bg-linear-to-r from-purple-200 via-blue-100 to-purple-300">

      {/* SECTION 1 — HERO */}
      {/* <section className="text-center py-16 px-4 bg-white">

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Our Products
        </h1>

        <p className="text-gray-600 font-medium">
          Export Quality | Origin: India | Certified. Tested. Documented.
        </p>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-sm leading-relaxed">
          Swami Global Trade LLP exports a focused range of dehydrated vegetables, spices, and frozen food from India. Every product we supply is sourced from certified processing facilities, tested batch-by-batch by independent third-party labs, and shipped with complete trade documentation.
        </p>

      </section> */}

      {/* SECTION 2 — GRID */}
      <section className="py-16 px-6 max-w-6xl mx-auto ">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {products.map((p) => (

            <div
              key={p._id}
              onClick={() => navigate(`/product/${p._id}`)}
              className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer p-6 text-center"
            >

              <img
                src={p.images?.[0]?.url}
                className="h-32 mx-auto object-contain mb-4"
              />

              <h3 className="font-semibold text-gray-800">
                {p.productName}
              </h3>
                <p className="text-[10px]">click to know more</p>
            </div>

          ))}

        </div>

      </section>

      {/* SECTION 3 — SUPPORT LINE */}
      <section className="text-center px-6 pb-10">

        <p className="text-gray-600 max-w-4xl mx-auto text-sm">
          Product specifications are available to download on each product page. For pricing indication or sample requests, send us an enquiry and we will respond within 24 hours. Can't find what you are looking for? We will let you know if we can source it.</p>

      </section>

      {/* SECTION 4 — CTA */}
      <section className="bg-gray-900 text-white text-center py-14 px-6">

        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Looking for something specific?
        </h2>

        <p className="text-gray-300 mb-6">
          Send us an enquiry or request a sample — we respond within 24 hours.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <button className="bg-blue-600 cursor-pointer px-6 py-2 rounded" onClick={() => navigate(`/services`)}>
            Send an Enquiry
          </button>

          <button className="bg-green-600 cursor-pointer px-6 py-2 rounded" onClick={() => navigate(`/services`)}>
            Request a Sample
          </button>

          <a
            href="https://wa.me/919135666519"
            target="_blank"
            className="bg-[#25D366] px-6 py-2 rounded"
          >
            WhatsApp Us
          </a>

        </div>

      </section>

    </div>
    </>
  );
};

export default Product;