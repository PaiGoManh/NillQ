import React from "react";
import { MdOutlineAppRegistration } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-5xl font-semibold lg:text-start ml-[30%]">
            How It Works!
          </h1>
          <section id="how-it-works" className="py-12 bg-white text-gray-800 mt-14">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="text-center md:w-1/3 p-4 rounded-lg bg-white shadow-2xl flex flex-col justify-center items-center transform hover:bg-blue-500 hover:text-white transition duration-300 hover:scale-110">
                  <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex justify-center items-center mb-6">
                    <MdOutlineAppRegistration size="30" className="text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Register</h3>
                  <p>Register as a Patient, Doctor, or Hospital</p>
                </div>
                <div className="text-center md:w-1/3 p-4 rounded-lg bg-white shadow-2xl flex flex-col justify-center items-center transform hover:bg-blue-500 hover:text-white transition duration-300 hover:scale-110">
                  <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex justify-center items-center mb-6">
                    <CgProfile size="30" className="text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Profile</h3>
                  <p>Manage your profile and activity in our dashboards</p>
                </div>
                <div className="text-center md:w-1/3 p-4 rounded-lg bg-white shadow-2xl flex flex-col justify-center items-center transform hover:bg-blue-500 hover:text-white transition duration-300 hover:scale-110">
                  <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex justify-center items-center mb-6">
                    <MdManageAccounts size="30" className="text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Appointment</h3>
                  <p>Book and Manage Appointments Easily</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
  );
};

export default Services;
