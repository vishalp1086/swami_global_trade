import { Truck, Package, Warehouse, Box, ArrowUp, PackageSearch, PackageOpen } from "lucide-react";
import { Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Eye, Target, ArrowUpRight } from 'lucide-react';
import Hero from "../components/Hero";
import homeHero from "../assets/aboutpage.jpg";
import { CheckCircle, ShieldCheck, FileText, Users, MessageSquare, Phone } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import about from "../assets/about.jpeg";

export default function About() {
  const navigate = useNavigate();
  
  const stats = [
    {
      number: "245+",
      text: "Successful Delivery Completion All over World",
    },
    {
      number: "30k",
      text: "Happy Customers",
    },
    {
      number: "10",
      text: "Country Connected with Us",
    },
  ];

  const steps = [
    {
      id: '01',
      title: 'Sourcing & Processing Standards',
      icon: <PackageSearch size={40} className="text-blue-600" />,
      points: [
        "We source our products from processing facilities operating under internationally recognized food safety and quality standards such as:",
        "HACCP",
        "ISO",
        "GMP",
        "BRC"
      ],
      showChecks: true
    },
    {
      id: '02',
      title: 'Quality Assurance Practices',
      icon: <Warehouse size={40} className="text-blue-600" />,
      points: [
        "Hygienic processing & handling",
        "Inspection prior to shipment",
        "Proper storage & handling practices",
        "Export-safe packaging standards",
        "Traceable sourcing & quality monitoring"
      ],
      showChecks: true
    },
    {
      id: '03',
      title: 'Food Safety Compliance',
      icon: <Warehouse size={40} className="text-blue-600" />,
      points: [
        "Our products comply with international food safety norms",
        "Microbiological safety compliance",
        "Pesticide residues within permissible international MRL limits",
        "Controlled sourcing and handling practices"
      ],
      showChecks: true
    },
    {
      id: '04',
      title: 'Testing & Third-Party Inspection',
      icon: <Warehouse size={40} className="text-blue-600" />,
      points: [
        "Third-party inspection and laboratory testing can be arranged prior to shipment as per buyer requirements",
        "microbiological analysis",
        "pesticide residue testing",
        "heavy metals testing",
        "product quality & purity analysis"
      ],
      showChecks: true
    },
  ];

  const team = [
    {
      name: 'Mr. Vinayak Kisan Aher',
      role: 'CHIEF OFFICER',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Mrs. Reshma Vinayak Aher',
      role: 'Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <>
      <Hero
        title="Delivering Trust Globally"
        subtitle="Swami Global Trade LLP"
        image={homeHero}
        description="We export dehydrated vegetables, spices, and frozen food from India — with one clear purpose and a firm belief that honest trade is good trade."
      />

      <div className="font-sans text-slate-800 bg-linear-to-r from-purple-200 via-blue-100 to-purple-300 overflow-x-hidden">

        {/* SECTION 2 — THE NAME */}
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xs md:text-sm uppercase tracking-widest text-blue-600 font-bold mb-4">Why "Swami"?</h2>
            <p className="text-lg md:text-2xl italic text-slate-700 leading-relaxed mb-8">
              "Swami Global Trade LLP takes its name from Shri Swami Samarth — a great spiritual master from India, revered across Maharashtra and beyond as a master of unwavering integrity."
            </p>
            <div className="max-w-2xl mx-auto text-left space-y-4 text-slate-600">
              <p className="text-sm md:text-base">
                We chose this name deliberately. It is a reminder — to ourselves and to everyone we work with — that how we do business matters as much as what we do.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-medium text-slate-900">
                <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-blue-600 w-4 h-4 md:w-5 md:h-5 shrink-0" /> Honesty with buyers</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-blue-600 w-4 h-4 md:w-5 md:h-5 shrink-0" /> Fairness with manufacturers</li>
                <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-blue-600 w-4 h-4 md:w-5 md:h-5 shrink-0" /> Transparency at every step</li>
              </ul>
              <p className="pt-4 border-t border-slate-200 font-semibold italic text-center text-sm md:text-base">
                That is not a marketing line. It is simply how we operate.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — OUR PURPOSE */}
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why We Do This</h2>
              <p className="mb-4 text-sm md:text-base leading-relaxed">Most businesses exist to make a profit. That is not wrong. But we believe profit should be the result of doing something well — not the starting point.</p>
              <p className="mb-6 text-slate-600 text-sm md:text-base leading-relaxed">Our purpose is to bring quality Indian products to buyers around the world. Sourced responsibly. Documented properly. Delivered without surprises.</p>
              <div className="bg-blue-50 p-5 md:p-6 rounded-lg border-l-4 border-blue-600">
                <p className="font-medium text-sm md:text-base">When buyers receive exactly what was promised — right specification, right documentation, right condition — that is a good day for us.</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src={about} alt="about" className="rounded-2xl w-full h-64 md:h-96 object-cover shadow-lg" />
            </div>
          </div>
        </section>

        {/* SECTION 4 — HOW WE WORK */}
        <section className="py-12 md:py-20 px-4 md:px-6 bg-slate-900 text-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Operational Standards</h2>
              <p className="text-slate-400 text-sm md:text-base mb-2">What You Can Expect From Us</p>
              <p className="max-w-3xl mx-auto text-sm md:text-base text-slate-300">We are a trading firm. We source exclusively from manufacturers with certified processing facilities. Depending on the product and manufacturer, certifications include HACCP, ISO 22000, BRCGS, FSSC 22000, and IFS — and we verify this before onboarding any new supplier</p>
            </div>

            {/* Wrapper Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto px-4">
  
  {/* Documentation Card */}
  <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 flex flex-col w-full h-full">
    <FileText className="w-10 h-10 text-blue-400 mb-6 shrink-0" />
    <h3 className="text-xl font-bold mb-4 text-white">Documentation</h3>
    <p className="text-slate-400 text-sm leading-relaxed text-left whitespace-normal break-words">
      Every shipment comes with a batch-wise Certificate of Analysis. Phytosanitary certificates, 
      certificates of origin, and full export documentation come standard with every shipment. 
      Pesticide residue and heavy metals reports tested at an accredited laboratory are arranged 
      prior to dispatch and provided on request. Halal and Kosher certification is available 
      on request please specify at enquiry. For new buyers, we recommend third-party 
      inspection before shipment and are happy to facilitate it.
    </p>
  </div>

  {/* Sourcing Standard Card */}
  <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 flex flex-col w-full h-full">
    <ShieldCheck className="w-10 h-10 text-blue-400 mb-6 shrink-0" />
    <h3 className="text-xl font-bold mb-4 text-white">Sourcing Standard</h3>
    <p className="text-slate-400 text-sm leading-relaxed text-left">
      We do not work with every manufacturer who approaches us. Before onboarding any supplier, 
      we verify their certifications independently. If the certifications are not current, 
      valid, and relevant to the product — the conversation ends there. This is not a one-time 
      check. It is the foundation of how we source.
    </p>
  </div>

  {/* Quality Promise Card */}
  <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 flex flex-col w-full h-full">
    <CheckCircle className="w-10 h-10 text-blue-400 mb-6 shrink-0" />
    <h3 className="text-xl font-bold mb-4 text-white">Quality Promise</h3>
    <p className="text-slate-400 text-sm leading-relaxed text-left">
      We arrange independent third-party testing on every batch before dispatch — not 
      manufacturer self-testing, not occasional spot checks. Every batch, every time. 
      The batch-wise Certificate of Analysis travels with your shipment. Pesticide residue 
      and heavy metals reports are arranged on request.
    </p>
  </div>
</div>
          </div>
        </section>

        {/* SECTION 5 — WHO WE ARE */}
        <section className="py-12 md:py-20 px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Users className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The People Behind It</h2>
            <p className="text-base md:text-lg mb-4">
              Behind <strong>Swami Global Trade LLP</strong> and is a dedicated team based in India — people who care about how trade is done, not just that it gets done.
            </p>
            <p className="text-slate-600 text-sm md:text-base">
              We started this with one belief — that honest, well-documented trade builds relationships that last.
            </p>
          </div>
        </section>

        {/* SECTION 6 — REGISTRATIONS */}
        <section className="py-12 md:py-20 bg-blue-800 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl font-bold text-white mb-2">Accreditations & Compliance</h2>
              <div className="w-16 h-1 bg-white mx-auto"></div>
              <p className="text-blue-100 mt-4 text-[10px] md:text-xs uppercase tracking-widest">Verified Export Registrations</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { title: "IEC", desc: "Import Export Code" },
                { title: "FSSAI", desc: "Food Safety Standard" },
                { title: "APEDA", desc: "Agri-Export Authority" },
                { title: "SPICES BOARD", desc: "Ministry of Commerce" }
              ].map((item, idx) => (
                <div key={idx} className="group border border-white/20 p-6 md:p-8 rounded-xl text-center hover:bg-white hover:border-white transition-all bg-white/10">
                  <div className="text-lg md:text-xl font-black text-white group-hover:text-blue-800 transition-colors mb-1">
                    {item.title}
                  </div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-tighter font-bold text-blue-100 group-hover:text-blue-600">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — CALL TO ACTION */}
        <section className="py-16 md:py-24 px-4 md:px-6 text-black text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Have a sourcing requirement?</h2>
            <p className="text-sm md:text-[14px] mb-10 opacity-90 max-w-2xl mx-auto">
              Send us an enquiry and we will respond within 24 hours — with a Technical Data Sheet, pricing indication, and sample availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="w-full sm:w-auto bg-white text-blue-600 cursor-pointer px-8 py-4 rounded-full font-bold hover:bg-slate-100 flex items-center justify-center gap-2 transition-colors shadow-sm"
                onClick={() => navigate(`/services`)}
              >
                <MessageSquare size={20} /> Send an Enquiry
              </button>
              <a
                href="https://wa.me/919135666519"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Phone size={20} /> WhatsApp Us
              </a>
            </div>
            <p className="mt-12 text-[10px] md:text-sm tracking-widest opacity-75 uppercase">SWAMI GLOBAL TRADE LLP — DELIVERING TRUST GLOBALLY</p>
          </div>
        </section>

      </div>
    </>
  );
}