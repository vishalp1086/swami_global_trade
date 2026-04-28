import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUserTie, FaLaptopCode, FaBuilding, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import axios from "axios";
import { CheckCircle, ShieldCheck, FileText, Users, MessageSquare, Phone, Send } from 'lucide-react';
import homeabout from '../assets/home.jpeg'
import Hero from "../components/Hero";
import Hommain from "../assets/homemain.png"

export default function HomePage() {

  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://swami-global-trade.onrender.com/api/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  // AUTO SLIDE
  useEffect(() => {
    if (!products.length) return;
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [products]);

  // NAV BUTTONS
  const next = () => setActive((prev) => (prev + 1) % products.length);
  const prev = () => setActive((prev) => (prev - 1 + products.length) % products.length);



  return (<>

  <Hero
        title="Swami Global Trade LLP"
        subtitle="India’s Produce. Documented. Delivered"
        image={Hommain}
        description="Delivering Trust Globally"
      />
    <div className="w-full bg-linear-to-r from-purple-200 via-blue-100 to-purple-300">
      
      
      <section className="py-16 bg-linear-to-r from-purple-200 via-blue-100 to-purple-300">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src={homeabout}
              alt="Export"
              className="rounded-2xl w-full h-72 md:h-96 object-cover shadow-lg"
            />

            {/* Floating box */}
            <div className="absolute bottom-4 right-4 bg-[#1F3F77] text-white px-6 py-4 rounded-xl shadow-xl hidden sm:block">
              <p className="text-lg font-semibold">Delivering</p>
              <p className="text-sm"> Trust Globally</p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-sm text-[#1F3F77] font-semibold mb-2">
              — OUR COMPANY
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              Swami Global Trade LLP
            </h2>

            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Delivering Trust Globally.
            </h4>

            <p className="mb-6 text-sm md:text-base text-gray-600 leading-relaxed">
              Swami Global Trade LLP is an Indian export firm dealing in dehydrated vegetables, spices, and frozen food. We source exclusively from certified manufacturers, arrange independent third-party testing on every batch, and ensure complete trade documentation on every shipment — so your import is clean, compliant, and without surprises.
            </p>

            {/* buttons */}
            <div className="flex flex-row flex-wrap gap-2">
              <div className="flex flex-row sm:flex-row gap-1 justify-center">
                <button className="bg-white text-blue-600 px-2 py-4 cursor-pointer rounded-md font-bold hover:bg-blue-50 transition-colors uppercase tracking-wider text-[10px] flex items-center justify-center gap-1" onClick={() => navigate(`/services`)}>
                  <MessageSquare size={18} /> Request A Sample
                </button>
              </div>
              <div className="flex flex-row sm:flex-row gap-1 justify-center">
                <button className="bg-white text-blue-600 px-2 py-4 cursor-pointer rounded-md font-bold hover:bg-blue-50 transition-colors uppercase tracking-wider text-[10px] flex items-center justify-center gap-1" onClick={() => navigate(`/services`)}>
                  <Send size={18} /> Send an Enquiry
                </button>
              </div>

              <a
                href="https://wa.me/919135666519"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-2 py-4 cursor-pointer rounded-md font-bold hover:bg-blue-50 transition-colors uppercase tracking-wider text-[10px] flex items-center justify-center gap-1">
                <FaWhatsapp size={18} />
                WhatsApp Us</a>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCTS STRIP */}
      <section className="py-6 text-center overflow-hidden">

        <h2 className="text-2xl font-semibold text-[#1F3F77] mb-6">
          What We Export
        </h2>

        <div className="bg-linear-to-r from-purple-200 via-blue-100 to-purple-300 flex items-center justify-center py-6 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {products.map((p) => (
              <div
                key={p._id}
                onClick={() => navigate(`/product/${p._id}`)}
                className="bg-green-500 text-white rounded-2xl shadow hover:scale-105 transition cursor-pointer p-4"
              >
                <p className="mt-2 text-[11px] font-semibold">
                  {p.productName}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NEW CAROUSEL: One at a time with arrows */}
        <section className="py-12 text-center bg-white/10">
        
        <div className="max-w-4xl mx-auto px-4 relative group">
          {products.length > 0 && (
            <div className="relative h-72 md:h-[500px] w-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-white">
              <img 
                src={products[active]?.images?.[0]?.url} 
                alt={products[active]?.productName} 
                className="w-full h-full object-contain md:p-4 transition-opacity duration-500"
              />
              <div className="absolute bottom-0 w-full bg-[#1F3F77]/80 backdrop-blur-sm p-4 text-white">
                <h3 className="text-lg font-bold uppercase tracking-widest">{products[active]?.productName}</h3>
              </div>
              <button onClick={prev} className="absolute left-4 p-3 rounded-full bg-white/80 hover:bg-white text-blue-600 shadow-lg transition-all cursor-pointer z-30">
                <FaChevronLeft size={24} />
              </button>
              <button onClick={next} className="absolute right-4 p-3 rounded-full bg-white/80 hover:bg-white text-blue-600 shadow-lg transition-all cursor-pointer z-30">
                <FaChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </section>
      </section>

      {/* TRUST POINTS */}
      <div className="min-h-screen bg-gray-900 flex items-center justify-center relative py-16 px-4">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col w-full">
          <h2 className="text-white text-center justify-center text-2xl mb-10">Three Trust Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
            <div className="bg-gray-800 text-white p-6 sm:p-8 rounded-xl shadow-2xl">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600/20">
                  <span className="text-green-500 text-xl">✔</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center">Certified Sourcing</h2>
              <p className="text-gray-400 mb-6 text-center">We source exclusively from manufacturers with certified processing facilities — verified before onboarding.</p>
            </div>

            <div className="bg-gray-800 text-white p-6 sm:p-8 rounded-xl shadow-2xl">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600/20">
                  <span className="text-green-500 text-xl">✔</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center">Every Batch. Independently Tested.</h2>
              <p className="text-gray-400 mb-6 text-center">We arrange independent third-party testing on every batch — not manufacturer self-testing.The batch-wise Certificate of Analysis travels with your</p>
            </div>

            <div className="bg-gray-800 text-white p-6 sm:p-8 rounded-xl shadow-2xl">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600/20">
                  <span className="text-green-500 text-xl">✔</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center">Complete Documentation</h2>
              <p className="text-gray-400 mb-6 text-center">Batch-wise COA, phytosanitary certificate, certificate of origin, and full export documentation.standard on every shipment</p>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS - ORIGINAL DESIGN RESTORED */}
      <section className="py-16 bg-linear-to-r from-purple-200 via-blue-100 to-purple-300 ">
        <h2 className="text-2xl font-semibold text-center mb-10"> How It Works </h2>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between relative gap-10 md:gap-0">
            {/* Line - Hidden on Mobile */}
            <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-300 hidden md:block"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold"> ✓ </div>
              <p className="mt-3 font-semibold">Step 1</p>
              <p className="text-sm font-medium"> Send an Enquiry or Request a Sample </p>
              <p className="text-xs text-gray-500 mt-1 px-2"> Tell us what you need. We respond within 24 hours with details. </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold"> ✓ </div>
              <p className="mt-3 font-semibold">Step 2</p>
              <p className="text-sm font-medium"> Review and Sample </p>
              <p className="text-xs text-gray-500 mt-1 px-2"> We send a sample. Test and approve before proceeding. </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold"> ✓ </div>
              <p className="mt-3 font-semibold">Step 3</p>
              <p className="text-sm font-medium"> Place Your Order </p>
              <p className="text-xs text-gray-500 mt-1 px-2"> Confirm requirements. We handle sourcing & shipment. </p>
            </div>
          </div>
        </div>
      </section>


      {/* REGISTRATIONS */}
      <section className="py-16 bg-[#1F5F8B] text-white text-center px-4">
        <h2 className="text-3xl font-light mb-12 tracking-wide"> Certifications & Compliance </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "IEC Registered",
            "FSSAI Licensed",
            "APEDA Registered",
            "Spices Board of India",
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full border border-white/30 text-lg font-semibold"> {index + 1} </div>
              <p className="font-semibold text-lg">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
          Sourced from manufacturers with HACCP, ISO 22000, BRCGS, FSSC 22000 and IFS certified facilities.
        </p>
      </section>

      {/* CTA SECTION - ORIGINAL BUTTONS RESTORED */}
      <div className="bg-linear-to-r from-purple-200 via-blue-100 to-purple-300 py-16 px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-semibold text-gray-700"> Ready to Source from India? </h2>
          <div className="w-12 h-1 bg-green-500 mx-auto my-4"></div>
          <p className="text-gray-500 text-sm"> Send us an enquiry and we will respond within 24 hours — with a Technical Data Sheet, pricing indication, and sample availability. </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <MdOutlineInventory2 className="text-green-500 text-5xl mb-4" />
            <h3 className="font-semibold text-gray-700 mb-2"> Request a Sample </h3>
            <p className="text-gray-500 text-sm mb-6"> Choose the product and send us sample request. </p>
            <button className="bg-white text-blue-600 px-10 py-4 cursor-pointer rounded-md font-bold hover:bg-blue-50 transition-colors uppercase tracking-wider text-[10px] flex items-center justify-center gap-2" onClick={() => navigate(`/services`)}>
              <MessageSquare size={18} /> Request a Sample
            </button>
          </div>

          <div className="flex flex-col items-center">
            <FiSend className="text-green-500 text-5xl mb-4" />
            <h3 className="font-semibold text-gray-700 mb-2"> Send an Enquiry </h3>
            <p className="text-gray-500 text-sm mb-6"> Tell us what you need. We respond within 24 hours. </p>
            <button className="bg-white text-blue-600 px-10 py-4 cursor-pointer rounded-md font-bold hover:bg-blue-50 transition-colors uppercase tracking-wider text-[10px] flex items-center justify-center gap-2" onClick={() => navigate(`/services`)}>
              <Send size={18} /> Send an Enquiry
            </button>
          </div>

          <div className="flex flex-col items-center">
            <FaWhatsapp className="text-green-500 text-5xl mb-4" />
            <h3 className="font-semibold text-gray-700 mb-2"> WhatsApp Us </h3>
            <p className="text-gray-500 text-sm mb-6"> For Any Query WhatsApp US. We will support You. </p>
            <a
              href="https://wa.me/919135666519"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-10 py-4 cursor-pointer rounded-md font-bold hover:bg-blue-50 transition-colors uppercase tracking-wider text-[10px] flex items-center justify-center gap-2">
              <FaWhatsapp size={18} />
              WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}