import React from "react";
import ReviewSlider from "../component/home/ReviewSlider";
import HealthGoal from "../component/home/HealthGoal";
import StartButton from "../component/home/StartButton";
import FoodPlan from "../component/home/FoodPlan";

const Home = () => {
  return (
    <div className="font-sans " style={{ fontFamily: "Arial, sans-serif" }}>
      {<StartButton />}
      {<ReviewSlider />}
      {<HealthGoal />}
      {<FoodPlan />}
    </div>
  );
};

export default Home;
