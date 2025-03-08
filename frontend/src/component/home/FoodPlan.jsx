import React from "react";
import { assets } from "../../assets/assets";

const FoodPlan = () => {
  return (
    <div className="flex items-center justify-center bg-blue-600 text-white text-center p-10 mb-10 h-100">
      <div>
        <div className="flex justify-center mb-2">
          <img src={assets.food_plan} alt="Food Icon" className="w-10 h-10" />
        </div>

        <h2 className="text-15xl sm:text-5xl font-bold">
          If it's edible, it's in here
        </h2>

        <p className="text-sm sm:text-base text-gray-200 mt-2">
          Food tracking app with 18 million global foods
        </p>
      </div>
    </div>
  );
};

export default FoodPlan;
