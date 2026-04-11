import { useState, useEffect } from "react";

const Hero = ({ title, subtitle, image, description }) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* 1. ASPECT RATIO CONTAINER: 
         This ensures the hero has a consistent height on mobile 
         similar to your other site.
      */}
      <div className="relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] min-h-[500px] md:min-h-[600px]">
        
        {/* Background Image */}
        <img
          src={image}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-transparent"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 pt-20">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 italic text-amber-400">
            {title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-300 mb-4">
            {subtitle}
          </p>

          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;