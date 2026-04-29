import React from "react";
import { Home, Phone, Mail } from "lucide-react";
import bgweb from "../assets/bgweb.jpg"

const Helpcenter = () => {
  return (
    <div className="w-full min-h-screen bg-white">

    
      <div className="relative w-full h-[420px] flex items-center justify-center">

        <img
  src={bgweb} 
  alt="Background"
  className="absolute w-full h-full object-cover"
/>

        {/* Dark Overlay */}
        <div className="absolute w-full h-full bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 tracking-wide">
            CONTACT US
          </h1>

          

          <p className="mt-5 text-sm md:text-base max-w-xl mx-auto text-gray-200">
            Need an expert? you are more than welcomed to leave your contact info
            and we will be in touch shortly
          </p>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-6">

        {/* VISIT US */}
        <div className="text-center border-r md:border-gray-200">
          <Home className="mx-auto text-red-500 w-10 h-10" />
          <h3 className="mt-4 font-semibold text-lg">VISIT US</h3>
          {/* <p className="text-gray-400 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p> */}
          <p className="text-red-500 mt-3 font-medium">
            Hyderbad
          </p>
        </div>

        {/* CALL US */}
        <div className="text-center border-r md:border-gray-200">
          <Phone className="mx-auto text-red-500 w-10 h-10" />
          <h3 className="mt-4 font-semibold text-lg">CALL US</h3>
          {/* <p className="text-gray-400 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p> */}
          <p className="text-red-500 mt-3 font-medium">
            8897283598
          </p>
        </div>

        {/* EMAIL US */}
        <div className="text-center">
          <Mail className="mx-auto text-red-500 w-10 h-10" />
          <h3 className="mt-4 font-semibold text-lg">CONTACT US</h3>
          {/* <p className="text-gray-400 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p> */}
          <p className="text-red-500 mt-3 font-medium">
            parvya@.com
          </p>
        </div>

      </div>
    </div>
  );
};

export default Helpcenter;