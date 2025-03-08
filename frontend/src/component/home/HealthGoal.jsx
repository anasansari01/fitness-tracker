import React from "react";
import { assets } from "../../assets/assets";

const HealthGoal = () => {
  return (
    <div className="items-center justify-center">
      <section className="max-w-3xl mx-auto p-6 relative">
        <div className="flex items-center justify-center">
          <img src={assets.flag} alt="Goal flag" className="w-5" />
        </div>
        <h2 className="text-center text-2xl font-bold mb-10">
          Hit your health goals in 1-2-3
        </h2>

        <div className="relative space-y-12">
          <div className="relative flex flex-col md:flex-row items-center md:items-start">
            <img
              src={assets.track_food_large}
              className="w-80 md:w-[380px] rounded-lg shadow-lg relative z-10"
              alt="Tracking food and fitness"
            />
            <div className="md:absolute md:left-[50%] md:top-1/2 md:transform md:-translate-y-1/2 md:ml-10 text-center md:text-left">
              <h3 className="text-blue-600 text-5xl font-bold">1.</h3>
              <p className="font-semibold text-2xl">
                Track food, fitness & fasting
              </p>
              <p className="text-gray-600">
                Tracking calories and macros is easy with our barcode scanner
                and device integration.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row-reverse items-center md:items-start -mt-16 md:-mt-32">
            <img
              src={assets.learn_what_works_large}
              className="w-80 md:w-[380px] rounded-lg shadow-lg relative z-20"
              alt="Learning personalized nutrition"
            />
            <div className="md:absolute md:right-[50%] md:top-1/2 md:transform md:-translate-y-1/2 md:mr-10 text-center md:text-left">
              <h3 className="text-blue-600 text-5xl font-bold">2.</h3>
              <p className="font-semibold text-2xl">Learn what works</p>
              <p className="text-gray-600">
                Personalized nutrition insights reveal what's working so you can
                make smarter choices.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center md:items-start -mt-16 md:-mt-32">
            <img
              src={assets.change_your_habits_large}
              className="w-80 md:w-[380px] rounded-lg shadow-lg relative z-30"
              alt="Building healthy habits"
            />
            <div className="md:absolute md:left-[50%] md:top-1/2 md:transform md:-translate-y-1/2 md:ml-10 text-center md:text-left">
              <h3 className="text-blue-600 text-5xl font-bold">3.</h3>
              <p className="font-semibold text-2xl">
                Change your habits and reach your goals
              </p>
              <p className="text-gray-600">
                Now you have the tools and knowledge to build healthy habits for
                life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <section className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg max-w-xl flex flex-col sm:flex-row items-center justify-center">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm text-gray-400">25+ apps and devices</p>
            <h2 className="text-2xl font-semibold mt-2">
              Sync steps, weight, workouts & more
            </h2>
          </div>
          <div className="flex space-x-2 mt-4 sm:mt-0">
            <img
              src={assets.app_integrations_large}
              alt="Fitness Icons"
              className="w-56 h-36 object-cover rounded-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HealthGoal;
