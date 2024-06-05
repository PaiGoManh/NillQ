import React from "react";
import img from "../assets/img/home6.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-bold text-center lg:text-start text-[blue]">About Us</h1>
        <div className="text-justify 2xl:text-start pt-5 pr-6">
          At NillQ, we understand that accessing healthcare services conveniently is essential. The traditional appointment scheduling process can be time-consuming and cumbersome, leading to frustration for patients and administrative challenges for healthcare providers.Our mission is to address these challenges by offering a seamless, user-friendly platform that simplifies appointment booking and management.
        </div>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
