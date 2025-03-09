import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const StartButton = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/fitness-home/login");
  };

  return (
    <div>
      <section className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MyFitnessInfo</h1>
          <div
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 "
            onClick={handleStartClick}
          >
            <svg
              className="w-6 h-6 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A6 6 0 0112 15a6 6 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-600 to-white text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 px-6 ml-40">
            <p className="text-xl">#1 nutrition tracking app</p>
            <h1 className="text-6xl font-bold mt-2">
              Nutrition tracking <br />
              for <span className="text-yellow-300">real life</span>
            </h1>
            <p className="mt-4 text-lg text-blue-900">
              Make progress with the all-in-one food, exercise, and calorie
              tracker.
            </p>
            <button
              className="mt-6 bg-white text-blue-600 px-10 py-3 rounded-full shadow-lg font-bold cursor-pointer hover:bg-gray-200 "
              onClick={handleStartClick}
            >
              START TODAY →
            </button>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 px-6">
            <img
              src={assets.hero_phone_small}
              alt="img"
              className="w-40 md:w-60 mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartButton;
