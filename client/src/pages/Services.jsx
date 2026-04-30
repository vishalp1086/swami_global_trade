import React, { useState,useEffect } from "react";
import axios from "axios";
import homeHero from "../assets/home1.jpg";
import Hero from "../components/Hero";
import { Clock, PackageCheck, FileCheck } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



const enquiryTypes = [
  "Request a Sample",
  
  "Price Enquiry",
  "General Enquiry",
];

const Services = () => {

  const [productList, setProductList] = useState([]);

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    phone:"",
    quantity: "",
    
    enquiryType: "",
    message: "",
    products: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
    
  };

  const handleCheckbox = (product) => {
    const exists = form.products.includes(product);

    if (exists) {
      setForm({
        ...form,
        products: form.products.filter((p) => p !== product),
      });
    } else {
      setForm({
        ...form,
        products: [...form.products, product],
      });
    }
  };
useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    const res = await axios.get("https://swami-global-trade.onrender.com/api/products");

    // Only take product names
    const names = res.data.map((p) => p.productName);

    setProductList(names);

  } catch (err) {
    console.log(err);
  }
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://swami-global-trade.onrender.com/api/enquiry", form);
      setSubmitted(true);
    } catch (err) {
      console.log(err);
      alert("Failed to send enquiry");
    }
  };

  if (submitted) {

    return (
      <div className="max-w-3xl mx-auto p-10 text-center mt-25 bg-linear-to-r from-purple-200 via-blue-100 to-purple-300">
        <h2 className="text-2xl font-bold mb-4">
          Thank you — your enquiry has been received.
        </h2>
        <p className="text-gray-600 mb-6">
          We will get back to you within 24 hours with details.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="mailto:info@swamiglobaltrade.com"
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Email Us
          </a>

          <a
            href="https://wa.me/919135666519"
            target="_blank"
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    );
  }

  return (<>
   <Hero
      title="Get in Touch"
        subtitle="Enquiries | Sample Requests | Documentation"
        image={homeHero}
      description="
For pricing indication, sample requests, or any product question — fill in the form below. We respond to every enquiry within 24 hours.
"
      />
  
  <div className=" bg-linear-to-r from-purple-200 via-blue-100 to-purple-300">
 

 

<div className=" py-14 mt-10">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading (optional but premium look) */}
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Fast, Reliable & Transparent Process
      </h2>
      <p className="text-gray-600 mt-2 text-sm">
        Everything you need — from enquiry to delivery — handled professionally
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8 text-center">

      {/* 1 */}
      <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300">

        <div className="flex justify-center mb-4">
          <Clock className="text-green-600 w-10 h-10" />
        </div>

        <h3 className="font-semibold text-lg">
          24-Hour Response
        </h3>

        <p className="text-gray-600 text-sm mt-2 leading-relaxed text-justify">
         Send us your requirement. We will come back within 24 hours with pricing indication and sample availability.
        </p>

      </div>

      {/* 2 */}
      <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300">

        <div className="flex justify-center mb-4">
          <PackageCheck className="text-green-600 w-10 h-10" />
        </div>

        <h3 className="font-semibold text-lg">
          Samples Available
        </h3>

        <p className="text-gray-600 text-sm mt-2 leading-relaxed text-justify">
          Request a sample before you commit. Review the product, test it, approve it — then place your order.
        </p>

      </div>

      {/* 3 */}
      <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300">

        <div className="flex justify-center mb-4">
          <FileCheck className="text-green-600 w-10 h-10" />
        </div>

        <h3 className="font-semibold text-lg">
          Complete Documentation
        </h3>

        <p className="text-gray-600 text-sm mt-2 leading-relaxed text-justify">
          Batch-wise COA, phytosanitary certificate, certificate of origin, and full export documentation — standard on every shipment.
        </p>

      </div>

    </div>

  </div>

</div>
    <div className="max-w-4xl mx-6 my-12  overflow-hidden rounded-2xl shadow-2xl flex flex-col md:flex-row">
  
  {/* LEFT SIDE: CONTEXT (Matches the screenshot layout) */}
  <div className="md:w-1/3 bg-[#1C2B3F] p-10 text-white flex flex-col justify-center">
    <h1 className="text-4xl font-bold leading-tight mb-4">Request a Customized Quote</h1>
    <p className="text-blue-100 opacity-80">
      Complete the inquiry form and we will respond promptly.
    </p>
    <div className="mt-8 pt-8 border-t border-white/10 text-sm text-blue-200">
      <p>• Enquiries</p>
      <p>• Sample Requests</p>
      <p>• Documentation</p>
    </div>
  </div>

  {/* RIGHT SIDE: FORM */}
  <div className="md:w-2/3 bg-[#1C2B3F] p-10 border-l border-white/5">
    <form onSubmit={handleSubmit} className="space-y-5">
      
      {/* BASIC INFO */}
      <div className="grid md:grid-cols-2 gap-5 mx-1">
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-blue-200 mb-1 ml-1 uppercase tracking-wider">Full Name *</label>
          <input name="name" required placeholder="John Doe"
            className="bg-white  border-none p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all" onChange={handleChange} />
        </div>

        <div className="flex flex-col">
          <label className="text-xs font-semibold text-blue-200 mb-1 ml-1 uppercase tracking-wider">Company Name *</label>
          <input name="company" required placeholder="Logistics Ltd."
            className="bg-white  border-none p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all" onChange={handleChange} />
        </div>

        <div className="flex flex-col">
          <label className="text-xs font-semibold text-blue-200 mb-1 ml-1 uppercase tracking-wider">Email Address *</label>
          <input name="email" required type="email" placeholder="email@company.com"
            className="bg-white  border-none p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all" onChange={handleChange} />
        </div>

        <div className="flex flex-col">
          <label className="text-xs font-semibold text-blue-200 mb-1 ml-1 uppercase tracking-wider">Country</label>
          <input name="country" placeholder="Country"
            className="bg-white  border-none p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all" onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-blue-200 mb-1 ml-1 uppercase tracking-wider">Phone</label>
<PhoneInput
  country={"in"}
  value={form.phone}
  onChange={(value) => setForm({ ...form, phone: value })}
  className="bg-[#26374d]"
/>
        </div>
      </div>

      {/* PRODUCT CHECKBOX - Refined for Dark Mode */}
      <div className="py-2">
        <label className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Product Interest *</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
          {productList.map((p, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-none bg-[#26374d] text-blue-500 focus:ring-offset-[#1C2B3F]"
                checked={form.products.includes(p)}
                onChange={() => handleCheckbox(p)}
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{p}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ENQUIRY & PACKAGING */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-blue-200 mb-1 ml-1 uppercase tracking-wider">Enquiry Type *</label>
          <select
            name="enquiryType"
            required
            onChange={handleChange}
            className="bg-white  border-none p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none appearance-none"
          >
            <option value="" className="bg-white text-blue-200">Select Type</option>
            {enquiryTypes.map((e, i) => (
              <option key={i} value={e} className="text-blue-200">{e}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-blue-200 mb-1 ml-1 uppercase tracking-wider">Quantity</label>
          <input name="quantity" placeholder="Bulk"
            className="bg-white  border-none p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" onChange={handleChange} />
        </div>
      </div>

      {/* MESSAGE */}
      <div className="flex flex-col">
        <label className="text-xs font-semibold text-blue-200 mb-1 ml-1 uppercase tracking-wider">Additional Message</label>
        <textarea
          name="message"
          placeholder="How can we help?"
          className=" bg-white text-w border-none p-3 rounded-lg h-24 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
          onChange={handleChange}
        />
      </div>

      <button className="w-full md:w-auto cursor-pointer bg-white text-[#1C2B3F] font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-all transform active:scale-95 shadow-lg">
        SUBMIT ENQUIRY
      </button>

    </form>
  </div>
</div>
</div>
</>
  )
};

export default Services;