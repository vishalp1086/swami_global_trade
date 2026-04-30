


import { TbMailFilled } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";

// const Contact = () => {

//   const contactData = [
//   {
//     Icon: TbMailFilled,
//     title: "Mail Us 24/7",
//     content: (
//       <>
//          info@swamiglobaltrade.com<br />
        
//       </>
//     )
//   },
//   {
//     Icon: FaMapMarkerAlt,
//     title: "Our Location",
//     content: (
//       <>
//         Saileela, Plot No.4, Unit No.3,<br /> Third Floor, 
//         Narayan Hut Society, Bhosari,
//         Pune 411 039, <br/>Maharashtra, India
//       </>
//     )
//   },
//   {
//     Icon: FaPhone,
//     title: "Call Us 24/7",
//     content: (
//       <>
        
//         Mobile: +91 9673136519
//       </>
//     )
//   },
//   {
//     Icon: BsFillBriefcaseFill,
//     title: "Working Days",
//     content: (
//       <>
//         Monday To Saturday <br/>
//         09:00am To 06:00pm(IST) <br />
//          Sunday - Closed
//       </>
//     )
//   }
// ];
//   return (
//     <div className="bg-[#f4f6fb] ">
//       <Hero
//       title="Contact"
        
//         image={homeHero}
      
//       />

//       {/* TOP INFO CARDS */}
//      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 font-">
//   <div className="grid md:grid-cols-4 gap-6">
//     {contactData.map((item, index) => (
//       <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-2xl ">
//         <item.Icon className="mx-auto text-blue-600 mb-4" size={40} />
//         <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//         <p className="text-gray-500 text-sm">{item.content}</p>
//       </div>
//     ))}
//   </div>
// </section>

//       {/* CONTACT SECTION */}
//       <section className="max-w-7xl mx-auto px-6 pb-24">
//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           {/* LEFT SIDE CONTENT */}
//           <div>
//             <p className="text-blue-600 font-semibold mb-4">Contact Us</p>

//             <h2 className="text-5xl font-bold leading-tight text-gray-900">
//               Write us  <br />
//               <span className="text-blue-600">Global Inquiries Welcome</span>
//             </h2>

//             <p className="mt-6 text-gray-600 text-lg leading-relaxed">
//               We welcome international buyers seeking reliable sourcing and consistent export quality.
//             </p>
//           </div>

//           {/* RIGHT SIDE DARK FORM */}
//           <div className="bg-[#071A2D] text-white p-12 rounded-3xl shadow-2xl relative">

//             <h3 className="text-3xl font-semibold mb-4">
//               Send a Message 
//             </h3>

//             <p className="text-gray-400 text-sm mb-8">
//               Your email address will not be published. Required fields are marked *
//             </p>

//             <form className="space-y-6">

//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500"
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   placeholder="Your Phone"
//                   className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500"
//                 />
//               </div>

//               <textarea
//                 rows="4"
//                 placeholder="Your Message"
//                 className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl font-semibold"
//               >
//                 Send Message →
//               </button>

//             </form>

//           </div>

//         </div>
//       </section>

//     </div>
//   );
// };


import React, { useState } from 'react';
import { Mail, Clock, MapPin, Send, MessageSquare, BriefcaseBusiness, X } from 'lucide-react';
import Hero from "../components/Hero";
import homeHero from "../assets/home1.jpg";
import { useNavigate } from "react-router-dom";
import contact from "../assets/contact.jpg";

const Contact = () => {
  const [showTooltip, setShowTooltip] = useState(false);
 const navigate= useNavigate()
  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      label: "Email",
      value: "info@swamiglobaltrade.com",
      link: "mailto:info@swamiglobaltrade.com",
    },
    {
      icon: <BriefcaseBusiness className="w-5 h-5 text-blue-600" />,
      label: "WhatsApp / Mobile",
      value: "+91 91356 66519",
      subtext: "For real-time shipment updates."
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      label: "Availability",
      value: "24 x 7 Response",
      subtext: "We respond within 24 hours across all time zones."
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      label: "Business Address",
      value: ' "Saileela", Unit No. 3, Third Floor, Plot No. 4, Narayan Hut Society, Bhosari, Pune 411039, Maharashtra, India.',
      subtext:"Registered office address. Visits by prior appointment only"
    }
  ];

  return (<>
  <Hero
      title="Contact Us"
        subtitle="Swami Global Trade LLP"
        image={homeHero}
        description="For pricing indication, sample requests, or any product question — reach us by email, phone, or through the enquiry form below. We respond to every enquiry within 24 hours."
      />
    <div className="bg-slate-50 font-sans text-slate-800 min-h-screen relative">
      
      {/* 🟢 WHATSAPP FLOATING ICON */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {showTooltip && (
          <div className="bg-white text-slate-900 px-4 py-2 rounded-lg shadow-xl border border-slate-100 text-xs font-medium relative whitespace-nowrap">
            Chat with us 24/7
            <button onClick={() => setShowTooltip(false)} className="absolute -top-1 -right-1 bg-slate-200 rounded-full p-0.5 text-slate-500 hover:bg-slate-300">
              <X size={10} />
            </button>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white border-r border-t border-slate-100"></div>
          </div>
        )}
        <a 
          href="https://wa.me/919135666519" 
          target="_blank" 
          rel="noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-200 hover:bg-green-700 hover:scale-110 transition-all duration-300"
          aria-label="Contact Us on WhatsApp"
        >
          <MessageSquare size={26} fill="white" className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>

      {/* SECTION 1 — HERO */}
      {/* <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 tracking-tight">Contact Us</h1>
          <p className="text-slate-400 max-w-xl text-md leading-relaxed">
            Reach us by email, phone, or through the enquiry form below. We provide Technical Data Sheets, pricing, and sample availability within 24 hours.
          </p>
        </div>
      </section> */}

      {/* MAIN CONTENT SECTION (SPLIT) */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CONTACT CARDS */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 px-2">Official Channels</h2>
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-stretch bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="w-16 bg-slate-50 flex items-center justify-center border-r border-slate-100 p-5">
                  {item.icon}
                </div>
                <div className="p-5 grow">
                  <p className="text-[10px] uppercase font-bold text-blue-600 tracking-tighter mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="text-md font-bold text-slate-900 hover:text-blue-600 transition-colors wrap-break-word">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-md font-bold text-slate-900 leading-tight wrap-break-word">{item.value}</p>
                  )}
                  {item.subtext && <p className="text-xs text-slate-500 mt-1 italic">{item.subtext}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: HIGH-QUALITY INDUSTRY IMAGE */}
          <div className="lg:col-span-7 sticky top-12">
            <div className="bg-slate-200 aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border-4 border-white shadow-slate-200/50">
              <img 
                src={contact}
                alt="Swami Global Trade - Spices and Dehydrated Foods Export" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white text-sm font-medium">Exporting Dehydrated Vegetables, Spices, and Frozen Foods from India — <span className='opacity-80 italic'>Reliable Trade, Quality Delivery.</span></p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 — CALL TO ACTION (CTA Band) */}
      <section className="w-full bg-linear-to-r from-purple-200 via-blue-100 to-purple-300 py-16 px-6 text-white text-center mt-12">
        <div className="max-w-4xl mx-auto">
          <Send className="w-10 h-10 mx-auto mb-6 text-green-600 opacity-60" />
          <h2 className="text-3xl font-bold mb-4 text-gray-600">Start With an Enquiry</h2>
          <p className="text-sm mb-10 opacity-90 leading-relaxed text-gray-600">
            Fill in the form below for pricing indication, sample requests, or any product question. We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 cursor-pointer rounded-md font-bold hover:bg-blue-50 transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2" onClick={() => navigate(`/services`)}>
              <Send size={18} /> Send an Enquiry 
            </button>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Contact;