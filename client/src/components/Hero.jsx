import { useState, useEffect } from "react";

const Hero = ({ title, subtitle, image, description }) => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden mt-16">
      
      <div
        className="relative w-full aspect-[16/9] 
        bg-cover 
        bg-center 
        flex items-center justify-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "scroll",
        }}
      >

        {/* Overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-3 sm:px-6 md:px-7">
          
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold  text-yellow-500 mb-1 sm:mb-3">
            {title}
          </h1>
          
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-amber-300 mb-3 sm:mb-4">
            {subtitle}
          </p>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed opacity-90">
            {description}
          </p>

        </div>
      </div>

    </section>
  );
};

export default Hero;