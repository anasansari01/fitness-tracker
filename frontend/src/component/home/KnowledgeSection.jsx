import React from "react";
import { assets } from "../../assets/assets";

const KnowledgeSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-16  m-20">
        <div className="relative flex w-full justify-center min-h-[400px]">
          <img
            src={assets.running_full}
            alt="Person running on a path"
            className="w-32 h-48 object-cover rounded-xl shadow-lg absolute left-2 top-[50px] ml-24"
          />

          <img
            src={assets.dietician_large}
            alt="Smiling dietitian, Stephanie Nelson"
            className="w-60 h-80 object-cover rounded-2xl shadow-xl relative z-10"
          />

          <img
            src={assets.food_full}
            alt="A plate of healthy food"
            className="w-32 h-48 object-cover rounded-xl shadow-lg absolute right-2 top-[50px] mr-24"
          />
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-12 text-center md:text-left">
          <p className="text-gray-500 text-sm font-semibold">Our Philosophy</p>
          <h2 className="text-4xl font-bold mt-2">Knowledge is power</h2>
          <p className="text-gray-700 mt-4 text-lg">
            “Studies show people who keep a food diary are more likely to hit
            their goals. MyFitnessPal simplifies nutrition and calorie tracking,
            provides the data you want, and helps you make sense of it all.”
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            Healthy eating is a continuous journey of self-discovery. And the
            more you track, the more empowered you'll become to make healthy
            choices that support your goals.”
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Stephanie Nelson, MyFitnessPal Registered Dietitian
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-3xl font-bold mb-10">As Seen in...</h1>
        <img src={assets.as_seen_large} alt="platforms we are visible on" />
      </div>
    </div>
  );
};

export default KnowledgeSection;
