import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
import logo from '../assets/img/Logo/Nill logo work files lo.png'


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className=" fixed w-full z-10 text-white">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-[5%] px-5 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <img src={logo} width={80} className="mr-[5%]"/>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8 ml-[20%] text-black ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[blue] transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="  hover:text-[blue]  transition-all cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="working"
              spy={true}
              smooth={true}
              duration={500}
              className="  hover:text-[blue]  transition-all cursor-pointer"
            >
             How it works
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="  hover:text-[blue]  transition-all cursor-pointer"
            >
              Features
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="  hover:text-[blue]  transition-all cursor-pointer"
            >
             Contact US
            </Link>
          </nav>

          {showForm && <Contact closeForm={closeForm} />}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[blue] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[blue] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="working"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[blue] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            How it works
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[blue] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Features
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[blue] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Contact Us
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
