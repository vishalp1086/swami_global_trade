import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ShieldCheck, FileText, Users, MessageSquare, Phone, Send } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";


const ProductPage = () => {

  const navigate = useNavigate()
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://swamiglobaltrade-production.up.railway.app/api/products/${id}`
      );

      setProduct(res.data);
      setMainImage(res.data?.images?.[0]?.url);

    } catch (err) {
      console.log(err);
    }
  };
  if (!product) return <p className="p-6">Loading...</p>;

  console.log("PDF URL:", product?.pdf?.url);

  const handleDownload = async () => {
    let newErrors = {};

    // Name validation
    if (!lead.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!lead.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      newErrors.email = "Enter valid email";
    }

    // If errors → stop
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await axios.post(
        "https://swamiglobaltrade-production.up.railway.app/api/products/request-download",
        {
          name: lead.name,
          email: lead.email,
          productId: product._id,
        }
      );

      // 👉 SIMPLER + RELIABLE
      window.open(res.data.pdfUrl, "_blank");

      setShowModal(false);
      setErrors({});
      setLead({ name: "", email: "" });

    } catch (err) {
      console.error("Download error:", err);
    }
  };
  // reusable row
  const Row = (label, value) => {
    if (!value) return null;
    return (
      <tr>
        <td className="border p-2 font-medium bg-gray-50 w-1/3">
          {label}
        </td>
        <td className="border p-2">{value}</td>
      </tr>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6 mt-20 bg-linear-to-r from-purple-200 via-blue-100 to-purple-300">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT - IMAGES */}
        <div>

          <div className="border rounded-xl overflow-hidden">
            <img
              src={mainImage}
              className="w-full h-100 object-contain bg-white"
            />
          </div>

          <div className="flex gap-3 mt-4 flex-wrap">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img.url}
                onClick={() => setMainImage(img.url)}
                className="w-10 h-10 object-cover rounded cursor-pointer border"
              />
            ))}
          </div>

        </div>

        {/* RIGHT - INFO */}
        <div>

          <h1 className="text-3xl font-bold">
            {product.productName}
          </h1>
          <div className=" mt-5">
            {product.subTitle}
          </div>
          <div className=" mt-5">
            {product.description}
          </div>
          {/* DOWNLOAD PDF */}
          {product.pdf?.url && (
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition"
            >
              Download Specification
            </button>
          )}
          {showModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

              <div className="bg-white p-6 rounded-xl w-96 text-sm relative">

                {/* ❌ CLOSE BUTTON */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                >
                  ✕
                </button>

                <h2 className="font-semibold mb-4">
                  Enter Details to Download
                </h2>

                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full border p-2 mb-1 ${errors.name ? "border-red-500" : ""}`}
                  onChange={(e) =>
                    setLead({ ...lead, name: e.target.value })
                  }
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mb-2">{errors.name}</p>
                )}

                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full border p-2 mb-1 ${errors.email ? "border-red-500" : ""}`}
                  onChange={(e) =>
                    setLead({ ...lead, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mb-2">{errors.email}</p>
                )}

                <button
                  onClick={handleDownload}
                  className="bg-blue-600 text-white w-full py-2 rounded cursor-pointer"
                >
                  Submit & Download
                </button>

              </div>
            </div>
          )}
          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-8 text-sm">

            <button
              onClick={() => navigate(`/services`)}
              className="bg-white text-blue-600 px-6 py-3 rounded-md  hover:bg-blue-50 flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare size={18} /> Send a Sample
            </button>

            <button
              onClick={() => navigate(`/services`)}
              className="bg-white text-blue-600 px-6 py-3 rounded-md  hover:bg-blue-50 flex items-center gap-2 cursor-pointer"
            >
              <Send size={18} /> Send an Enquiry
            </button>

            <a
              href="https://wa.me/919135666519"
              target="_blank"
              className="bg-white text-blue-600 px-6 py-3 rounded-md  hover:bg-blue-50 flex items-center gap-2 cursor-pointer"
            >
              <FaWhatsapp size={18} /> WhatsApp Us
            </a>

          </div>

        </div>

      </div>

      {/* <div className="mt-10">

  <h2 className="text-2xl font-semibold mb-6 text-gray-800">
    Product Specifications
  </h2>

  <div className="overflow-hidden rounded-2xl shadow-2xl bg-white/60 backdrop-blur-lg border border-white/30">

    <table className="w-full text-sm">

      <tbody>

        {[
          ["Product", product.productName],
          ["Botanical Name", product.botanicalName],
          ["Ingredient", product.ingredient],
          ["HS Code", product.hsCode],
          ["Colour", product.colour],
          ["Flavour & Aroma", product.flavourAroma],
          ["Moisture", product.moisture],
          ["Total Ash", product.totalAsh],
          ["Acid Insoluble Ash", product.acidInsolubleAsh],
          ["Extraneous Matter", product.extraneousMatter],
          ["Pesticide Residue", product.pesticideResidue],
          ["Aflatoxin", product.aflatoxin],
          ["Heavy Metals", product.heavyMetals],
          ["TPC", product.tpc],
          ["Yeast & Mould", product.yeastMould],
          ["Coliforms", product.coliforms],
          ["E. coli", product.eColi],
          ["Salmonella", product.salmonella],
          ["Allergen Status", product.allergenStatus],
          ["Shelf Life", product.shelfLife],
          ["Storage", product.storage],
          ["MOQ", product.moq],
          ["Halal / Kosher", product.halalKosher],
          ["Packaging", product.packagingDetails],

          ...(product.documents || []).map((doc, i) => [
            i === 0 ? "Documentation" : "",
            doc
          ]),

          ...(product.customSpecifications || []).map((c) => [
            c.parameter,
            c.value
          ])

        ]
          .filter(([_, value]) => {
  if (value === null || value === undefined) return false;

  if (typeof value === "string" && value.trim() === "") {
    return false;
  }

  if (Array.isArray(value) && value.length === 0) {
    return false;
  }

  return true;
})
.map(([label, value], i) => (
  <tr
    key={i}
    className={`transition ${
      i % 2 === 0 ? "bg-sky-100" : "bg-white/20"
    } hover:bg-blue-50`}
  >
    <td className="p-4 font-semibold text-gray-700 w-1/3 border-r border-gray-300">
      {label}
    </td>

    <td className="p-4 text-gray-700">
      {Array.isArray(value) ? value.join(", ") : value}
    </td>
  </tr>
))}

      </tbody>

    </table>

  </div>

</div> */}
    </div>
  );
};

export default ProductPage;