import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-[blue] text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">NillQ</h1>
          <p className=" text-sm">
            Our team of dedicated doctors, each specializing in unique fields
            such as orthopedics, cardiology, pediatrics, neurology, dermatology,
            and more.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[black] transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[black] transition-all cursor-pointer"
            >
              Features
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[black] transition-all cursor-pointer"
            >
              Working
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[black] transition-all cursor-pointer"
            >
              Admin Dashboard
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[black] transition-all cursor-pointer"
            >
              Hospital Dashboard
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[black] transition-all cursor-pointer"
            >
              Doctor Dashboard
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[black] transition-all cursor-pointer"
            >
              Doctor Mobile App
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[black] transition-all cursor-pointer"
            >
              Pateint Mobile App
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              Synergen, CUSAT Kalamasherry
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              synergen@gmail.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +9961774953
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-hoverColor">Synergen</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
