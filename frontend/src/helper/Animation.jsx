import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const Animation = ({ reviews }) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReviewIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg shadow-lg max-w-md mx-auto"
          >
            <p className="italic">"{reviews[currentReviewIndex].text}"</p>
            <p className="text-s mt-4">
              - {reviews[currentReviewIndex].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Animation;
