import React from "react";
import Animation from "../../helper/Animation";
import { reviews } from "../../helper/Review.js";

const ReviewSlider = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
        <h2 className="text-3xl font-bold mb-4">3.7 Million 5-Star Reviews</h2>
        <Animation reviews={reviews} />
      </div>
    </section>
  );
};

export default ReviewSlider;
