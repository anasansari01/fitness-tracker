import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col space-y-10">
        <div className="flex flex-wrap justify-between items-start ml-20">
          <div className="w-full md:w-1/3 text-left">
            <h2 className="text-2xl font-bold">myfitnesspal</h2>
            <p className="text-gray-400 mt-2">
              Find your healthy, and your happy.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-full cursor-pointer hover:bg-gray-200">
              START TODAY →
            </button>
          </div>

          <div className="flex justify-end text-sm text-gray-300 mt-6 space-x-12 mr-20">
            <div>
              <h3 className="font-bold text-white">Products</h3>
              <ul className="mt-2 space-y-1">
                <li>Exercise</li>
                <li>Apps</li>
                <li>Premium</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white">Resources</h3>
              <ul className="mt-2 space-y-1">
                <li>Blog</li>
                <li>Community</li>
                <li>Contact Us</li>
                <li>Support Center</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white">Company</h3>
              <ul className="mt-2 space-y-1">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Social Icons Aligned Right */}
        <div className="text-center text-gray-400 text-sm">
          <p>©2025 MyFitnessPal, Inc.</p>
          <div className="mt-2 flex justify-center space-x-4 flex-wrap">
            <span>Community Guidelines</span>
            <span>Feedback</span>
            <span>Terms</span>
            <span>Privacy</span>
            <span>API</span>
            <span>Cookie Preferences</span>
          </div>
        </div>

        <div className="flex justify-center space-x-6 text-xl text-gray-400">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-tiktok"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
