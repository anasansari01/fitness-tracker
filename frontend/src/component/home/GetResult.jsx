import { assets } from "../../assets/assets";
import Animation from "../../helper/Animation";
import { getResult } from "../../helper/Review.js";

const GetResult = () => {
  return (
    <div className="bg-white flex items-center justify-center mb-16 px-10">
      <div className="max-w-6xl text-center">
        <p className="text-gray-500 text-2xl">Get Results</p>
        <h2 className="text-6xl font-bold mt-2 leading-tight">
          Nutrition tracking works, <br /> here's the proof
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 ">
          <img
            src={assets.people1}
            className="w-[400px] h-[400px] rounded-lg object-cover mr-10"
            alt="Left Person"
          />

          <div className="flex-1 flex justify-center">
            <Animation reviews={getResult} />
          </div>

          <img
            src={assets.people2}
            className="w-[400px] h-[400px] rounded-lg object-cover ml-10"
            alt="Right Person"
          />
        </div>
      </div>
    </div>
  );
};

export default GetResult;
