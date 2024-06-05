import React from 'react';
import Admin from '../assets/img/admin.jpg';
import Doctor from '../assets/img/doctor.jpg';
import Hospital from '../assets/img/hospital.jpg';
import Doctorapp from '../assets/img/doctorapp.jpg';
import Patient from '../assets/img/patientapp.jpg';
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospitalSymbol } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const Features = () => {
  return (
    <div className='w-full h-auto mt-10 mb-10'>
      <h2 className='text-4xl lg:text-2xl font-bold text-white mx-auto mt-2 mb-[5%] w-80 h-20 bg-[#1f1f3a] shadow-2xl  hover:bg-[white] hover:text-[blue] rounded-full flex justify-center items-center'>
        Web Dashboards
      </h2>

      <div className='flex flex-col lg:flex-row justify-between mx-20 mb-[3%]'>
        <h1 className='text-xl font-bold text-center lg:text-left ml-[10%]'>Admin Dashboard</h1>
        <h1 className='text-xl font-bold text-center lg:text-right mr-[10%]'>Doctor Dashboard</h1>
      </div>

      <div className='flex flex-col lg:flex-row gap-5 mx-3'>
        <div className='flex flex-col lg:flex-row gap-3 w-full border hover:border-2 hover:border-[blue] shadow-lg'>
          <div className='flex flex-col items-center p-4'>
            <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex justify-center items-center mb-3 mt-3 mx-auto border border-1 hover:border-blue">
              <MdAdminPanelSettings size="30" className="text-primary text-blue" />
            </div>
            <div className='text-md w-full lg:w-64 h-32 border border-2 border-[blue] p-4 rounded-lg bg-blue-50'>
              View and manage patients, hospitals, and doctors. Approve or reject registrations.
            </div>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300'>
              Register as Admin
            </button>
          </div>
          <img src={Admin} className='w-full lg:w-1/2 h-auto shadow-lg ml-2' alt="Admin Dashboard" />
        </div>

        <div className='flex flex-col lg:flex-row gap-3 w-full border hover:border-2 hover:border-[blue] shadow-lg'>
          <div className='flex flex-col items-center p-4'>
            <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex justify-center items-center mb-3 mt-3 mx-auto border border-1 hover:border-[blue]">
              <FaUserDoctor size="30" className="text-primary text-blue" />
            </div>
            <div className='text-md w-full lg:w-64 h-32 border border-2 border-blue-500 p-4 rounded-lg bg-blue-50'>
              View today's, future, and past appointments. Access patient details.
            </div>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300'>
              Register as Doctor
            </button>
          </div>
          <img src={Doctor} className='w-full lg:w-1/2 h-auto shadow-lg ml-2' alt="Doctor Dashboard" />
        </div>
      </div>

      <h1 className='text-xl font-bold text-center lg:text-left mt-[3%] mb-[3%] ml-[43%] '>Hospital Dashboard</h1>
      <div className='flex flex-col lg:flex-row gap-3 w-full lg:w-1/2 mx-auto border hover:border-2 hover:border-[blue] shadow-lg mb-[3%]'>
        <div className='flex flex-col items-center p-4'>
          <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex justify-center items-center mb-3 mt-3 mx-auto border border-1 hover:border-[blue]">
            <FaHospitalSymbol size="30" className="text-primary text-blue" />
          </div>
          <div className='text-md w-full lg:w-64 h-36 border border-2 border-blue-500 p-4 rounded-lg bg-blue-50'>
            Register hospitals, manage departments and appointment slots. View doctor and patient lists.
          </div>
          <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300'>
            Register as Hospital
          </button>
        </div>
        <img src={Hospital} className='w-full lg:w-1/2 h-auto shadow-lg ml-5' alt="Hospital Dashboard" />
      </div>

      <h2 className='text-4xl lg:text-2xl font-bold text-white mx-auto mt-[5%] mb-[4%] w-80 h-20 bg-[#1f1f3a] shadow-2xl hover:text-[blue] hover:bg-white rounded-full flex justify-center items-center'>
        Mobile Applications
      </h2>

      <div className='flex flex-col lg:flex-row justify-between mx-20 mb-[3%]'>
        <h1 className='text-xl font-bold text-center lg:text-left ml-[12%]'>User/Patient App</h1>
        <h1 className='text-xl font-bold text-center lg:text-right mr-[18%]'>Doctor App</h1>
      </div>

      <div className='flex flex-col lg:flex-row gap-5 mx-3'>
        <div className='flex flex-col lg:flex-row gap-3 w-full border hover:border-2 hover:border-[blue] shadow-lg'>
          <div className='flex flex-col items-center p-4'>
            <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex justify-center items-center mb-3 mt-3 mx-auto border border-1 hover:border-[blue]">
              <FaUserFriends size="30" className="text-primary text-blue" />
            </div>
            <div className='text-md w-full lg:w-64 h-36 border border-2 border-blue-500 p-4 rounded-lg bg-blue-50'>
              Register patients, schedule or cancel appointments. Handle payments, explore hospital and doctor listings.
            </div>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300'>
              Register as Patient
            </button>
          </div>
          <img src={Patient} className='w-full lg:w-1/2 h-auto shadow-lg ml-2' alt="Patient App" />
        </div>

        <div className='flex flex-col lg:flex-row gap-3 w-full border hover:border-2 hover:border-[blue] shadow-lg'>
          <div className='flex flex-col items-center p-4'>
            <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex justify-center items-center mb-3 mt-3 mx-auto border border-1 hover:border-[blue]">
              <FaUserDoctor size="30" className="text-primary text-blue" />
            </div>
            <div className='text-md w-full lg:w-64 h-36 border border-2 border-blue-500 p-4 rounded-lg bg-blue-50'>
              View today's, future, and past appointments. Access patient details on the doctor profile in the app.
            </div>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300'>
              Register as Doctor
            </button>
          </div>
          <img src={Doctorapp} className='w-full lg:w-1/2 h-auto shadow-lg ml-2' alt="Doctor App" />
        </div>
      </div>
    </div>
  );
}

export default Features;
