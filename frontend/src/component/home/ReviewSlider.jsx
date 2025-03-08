import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    text: "This fitness program transformed my life! I've never felt stronger or more energized.",
    author: "Alex P.",
  },
  {
    text: "The trainers are incredibly knowledgeable and supportive. Highly recommend this gym!",
    author: "Sarah L.",
  },
  {
    text: "I achieved my weight loss goals faster than I ever thought possible. Thank you!",
    author: "Mike T.",
  },
  {
    text: "The variety of classes keeps me motivated and excited to work out every day.",
    author: "Emily R.",
  },
  {
    text: "The community here is amazing. Everyone is so encouraging and positive!",
    author: "Chris M.",
  },
];

const ReviewSlider = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
        <h2 className="text-3xl font-bold mb-4">3.7 Million 5-Star Reviews</h2>
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReviewIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto"
            >
              <p className="text-gray-300 italic">
                "{reviews[currentReviewIndex].text}"
              </p>
              <p className="text-sm text-gray-400 mt-4">
                - {reviews[currentReviewIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
