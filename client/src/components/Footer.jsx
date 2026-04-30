import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaLinkedinIn 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#243c61] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Newsletter Section */}
        {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12 border-b border-white/10">

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              Subscribe to <br /> Our Newsletter
            </h2>
          </div>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full md:w-80 px-5 py-3 rounded-l-xl bg-white text-black outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-r-xl font-semibold">
              Subscribe Now
            </button>
          </div>

        </div> */}

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 py-12">

          {/* Logo + Social */}
          <div>
            <h3 className=" text-lg font-semibold mb-4">Swami Global Trade</h3>
            <p className="text-gray-400 text-sm mb-6">
              Delivering excellence with trust and transparency worldwide.
            </p>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578449472757" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition cursor-pointer">
                <FaFacebookF size={14} />
              </a>
              <a href="https://www.linkedin.com/company/111393211/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition cursor-pointer">
                <FaLinkedinIn  size={14} />
              </a>
              <a className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition cursor-pointer">
                <FaInstagram size={14} />
              </a>
              <a className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition cursor-pointer">
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer"onClick={() => navigate("/about")} >About Us</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigate("/services")} >Enquiry</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigate("/products")} >Products</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigate("/contact")} >Contact Us</li>
            <li className="hover:text-white cursor-pointer" onClick={() => navigate("/blog")} >Blogs</li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
  <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
  <ul className="space-y-3 text-gray-400 text-sm">
    <li className="flex items-center gap-2">
      <FaClock className="text-white/70" />
      We Work All Day
    </li>
    <li className="flex items-center gap-2">
      <FaClock className="text-green-400" />
      24×7
    </li>
  </ul>
</div>

          {/* Contact */}
         <div>
  <h4 className="text-lg font-semibold mb-4">Contact</h4>
  <ul className="space-y-3 text-gray-400 text-sm">
    <li className="flex items-center gap-2">
      <FaEnvelope className="text-white/70" />
      info@swamiglobaltrade.com
    </li>
    <li className="flex items-center gap-2">
      <FaPhoneAlt className="text-white/70" />
      +91 91356 66519
    </li>
  </ul>
</div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 text-gray-500 text-sm">
          <p>© 2026 Swami Global Trade. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer"  onClick={() => navigate("/terms")} >Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer"  onClick={() => navigate("/privacy")} >Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;