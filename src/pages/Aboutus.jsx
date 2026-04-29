import React from "react";
import fastresImg from "../assets/fastres.jpg";
import arrows from "../assets/arrows.jpg"
import group from "../assets/group.jpg"

const Aboutus = () => {
  return (
    <div className="w-full min-h-screen bg-white">

      {/* Top Section */}
      <div className="bg-red-400 text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-10 text-white">About us</h1>
        <p className="max-w-xl mx-auto text-slate-900">
          We make sure that we are connecting the buyers and customers by our website
        </p>
      </div>

      {/* Image Section - Same structure, cleaner visuals */}
      <div className="flex justify-center items-center gap-6 -mt-12 px-5 py-5">
        <img
          src="https://www.shutterstock.com/image-vector/checklist-icon-featuring-heart-symbol-600nw-2610288633.jpg"
          alt="img1"
          className="bg-white rounded-2xl shadow-xl w-44 h-44 p-4"
        />
        <img
          src={fastresImg}
          alt="img2"
          className="bg-white rounded-2xl shadow-xl w-44 h-44 p-4"
        />
        <img
          src={arrows}
          alt="img3"
          className="bg-white rounded-2xl shadow-xl w-44 h-44 p-4"
        />
        <img
          src={group}
          alt="img4"
          className="bg-white rounded-2xl shadow-xl w-44 h-44 p-4"
        />
      </div>

      {/* Bottom Text Section */}
      <div className="text-center mt-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 max-w-2xl mx-auto">
          We make sure your idea & creation delivered properly
        </h2>
      </div>

    </div>
  );
};

export default Aboutus;