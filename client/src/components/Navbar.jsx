import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (path, label) => (
    <button
      onClick={() => {
        navigate(path);
        setIsOpen(false);
      }}
      className={`text-xs lg:text-sm tracking-wide uppercase transition duration-300 cursor-pointer block w-full text-left md:w-auto ${
        location.pathname === path
          ? "text-yellow-400 font-bold"
          : "text-white hover:text-yellow-400"
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-cyan-900/90 backdrop-blur-md shadow-md`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        
        {/* Logo Section */}
        <div
          onClick={() => navigate("/")}
          className="bg-white/95 px-2 py-1 cursor-pointer flex items-center rounded-sm shrink-0"
        >
          <img src={Logo} alt="Logo" className="w-32 h-8 md:w-44 md:h-12 object-contain" />
        </div>

        {/* Desktop Menu & CTA */}
        <div className="hidden md:flex flex-1 items-center justify-between ml-8 lg:ml-12">
          <div className="flex space-x-4 lg:space-x-8">
            {navItem("/", "HOME")}
            {navItem("/about", "ABOUT US")}
            {navItem("/products", "PRODUCTS")}
            {navItem("/services", "ENQUIRY")}
            {navItem("/contact", "CONTACT US")}
            {navItem("/blog", "BLOGS")}
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-black px-4 lg:px-6 py-2 rounded-xl font-semibold hover:bg-gray-200 transition text-sm lg:text-base whitespace-nowrap"
          >
            Get In Touch →
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0c4a6e] z-40 transition-opacity" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-80 bg-[#0c4a6e] text-white transition-transform duration-300 ease-in-out shadow-2xl ${
    isOpen ? "translate-x-0" : "translate-x-full"
  } z-100`}
      >
        <div className="flex justify-end p-4">
          <button className="text-3xl" onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col space-y-8 px-6 text-lg font-medium bg-[#0c4a6e]">
          {navItem("/", "HOME")}
          {navItem("/about", "ABOUT US")}
          {navItem("/products", "PRODUCTS")}
          {navItem("/services", "ENQUIRY")}
          {navItem("/contact", "CONTACT US")}
          {navItem("/blog", "BLOGS")}
          
          <button
            onClick={() => { navigate("/contact"); setIsOpen(false); }}
            className="bg-amber-400 text-cyan-900 px-3 py-2 rounded-lg font-bold text-center"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;