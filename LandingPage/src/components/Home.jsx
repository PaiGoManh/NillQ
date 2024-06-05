import React from "react";
import img from '../assets/img/home7.png';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        <div className="w-full lg:w-3/5 space-y-5 mt-10 lg:mt-0">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white mt-[20%] lg:mt-[30%]">
            Revolutionizing
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
            Medical Appointment Scheduling
          </h2>
          <p className="text-base lg:text-lg">
            Scheduling for hospitals, doctors, and patients alike
          </p>
          <button className="mt-5 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition duration-300">
            Learn More
          </button>
        </div>
        <div className="w-full lg:w-2/5 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <img src={img} className="w-full max-w-md h-auto" alt="Medical Scheduling" />
        </div>
      </div>
    </div>
  );
};

export default Home;
