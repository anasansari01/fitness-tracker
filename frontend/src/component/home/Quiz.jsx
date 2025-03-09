import React from "react";
import { assets } from "../../assets/assets";

const Quiz = () => {
  return (
    <div className="relative flex items-center justify-center bg-gradient-to-b from-blue-600 to-transparent">
      <div className="max-w-5xl flex flex-col md:flex-row items-center text-white w-full pt-10">
        <div className="md:w-1/2 space-y-4">
          <p className="text-sm font-light">Have 2 mins?</p>
          <h1 className="text-4xl font-bold leading-tight">
            Get your <span className="text-white/80">personalized</span> daily
            plan
          </h1>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 cursor-pointer">
            TAKE THE QUIZ
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <div className="w-60 shadow-lg overflow-hidden mt-auto">
            <img
              src={assets.daily_plan}
              alt="Quiz Screen"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
