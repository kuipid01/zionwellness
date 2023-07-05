/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import { FaQuoteLeft, FaInstagram, FaFacebook } from "react-icons/fa";
import WeareHer from "../../components/WeareHer";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import Ndis from "../../components/Ndis";
import Support from "../../components/Support";
const Home = () => {
  return (
    <div className="w-full h-full relative">
      {/* <img
        className="w-full h-full absolute  top-0 left-0 object-cover b"
        src="/assets/bg.jpg"
      /> */}
 
  
    
       <Slider />
      <motion.div
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1 }}
        trigger
        transition={{ duration: 0.7 }}
        className="w-screen h-full relative z-20 bg-white "
      >
        <motion.div
      
         animate={{ opacity: 0, y:200 }}
         transition={{ duration: 0.6, dalay: 0.5 }} className="md:px-[90px] px-3 bg-white  w-full  p-[5px] py-14 relative mdw-[80%] mx-auto h-fit md:h-[70vh] gap-[50px] items-center flex md:flex-row flex-col justify-between">
          <div className="w-full md:w-[50%] h-full flex items-center justify-center">
            <p className="font-[200] flex flex-col  h-full w-fit relative  text-gray-700 text-left">
              <FaQuoteLeft className="md:text-4xl text-2xl   text-gray-300 absolute -top-6 left-0 md:top-2" />
              <span className="md:p-4 md:text-[13px] mt-9 text-centre  lg:text-[15px]">
                Zion Support Services: Promoting well-being and providing
                comprehensive support to individuals with disabilities. Our
                dedicated team of professionals, including therapists,
                counselors, and experts in various disability fields, 
                
                <span className="hidden lg:flex"> 
                is
                committed to empowering and enhancing the lives of our clients.
                We strive to address the unique needs of each individual through
                a range of specialized services.{" "}
                  Let us guide and assist you on your journey to better health
                  and overall wellness.
                </span>
              </span>
              <Link to='/contact' >  <button className="px-8 mt-6 w-fit py-3 uppercase font-[600] bg-red-800 text-white">Book an appointment</button></Link>
             
            </p>
          </div>
          <motion.div   initial={{ opacity: 0.1 , y:200 }}
         whileInView={{ opacity: 1, y:0  }}
         transition={{ duration: 0.7, dalay: 0.9 }} className="h-[400px] w-full md:w-[50%] ">
            <img
              src="https://img1.wsimg.com/isteam/stock/4433/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:853"
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div   initial={{ opacity: 0.1 , y:200 }}
         whileInView={{ opacity: 1, y:0  }}
         transition={{ duration: 0.7, dalay: 0.4 }} className="w-screen py-8 h-full relative z-20 bg-white ">
        <img
          src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdoaXRlJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <motion.div
          initial={{
            
            opacity: 0.3,
          }}
          whileInView={{  opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:px-[50px]    p-[5px] py-14 relative w-full md:w-[80%] mx-auto h-fit  items-center flex flex-col justify-between"
        >
          <h1 className="md:text-4xl text-2xl md:text-left text-center mb-2">
            How does the Zion Support Sevices help?
          </h1>
          <p className="mb-8 text-center text-gray-700 font-[400]">
            {" "}
            Zion Support Sevices helps people with disability to:
          </p>
          <div className=" w-full flex md:flex-row flex-col gap-5">
            <div className="flex flex-col gap-2 items-center justify-center ">
              <AiOutlineCheckCircle className="text-6xl text-red-700" />
              <p className="text-center font-[300] md:font-[500] text-gray-900">
                Zion Support Sevices : Accessing healthcare and education made
                easy. We assist you in connecting with disability-friendly
                healthcare providers and inclusive educational opportunities.
                Our team is here to support your journey towards equal access.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center ">
              <AiOutlineCheckCircle className="text-6xl text-red-700" />
              <p className="text-center font-[300] md:font-[500] text-gray-900">
                Zion Support Sevices Services: Connecting you to inclusive community
                support. Access sports clubs, groups, and charities tailored for
                individuals with disabilities. Empowering equal opportunities
                and a strong network.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center ">
              <AiOutlineCheckCircle className="text-6xl text-red-700" />
              <p className="text-center font-[300] md:font-[500] text-gray-900">
                Zion Support Sevices Services: Nurturing informal supports. We offer
                resources to help you maintain and enrich the valuable support
                you receive from family and friends, contributing to your
                well-being.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <Ndis/>
      <Support/>
      {/* <WeareHer /> */}
      {/* onlinebookingsection */}
      {/* <motion.div
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full py-[10vh] z-[555] relative flex flex-col gap-12 items-center justify-center h-fit md:h-[40vh] bg-red-800 text-white"
      >
        <h1 className="font-[800] text-[35px] mt-12 md:text-[55px] ">
          Online Booking
        </h1>
        <div className="md:w-[60%] pb-[3rem] px-[30px] w-full  mx-auto flex md:flex-row flex-col gap-3 justify-between">
          <div className="flex flex-col ">
            <p className="text-[25px] font-light ">Professional Consultation</p>
            <small className="text-[17px] font-light">
              {" "}
              1hr <span></span> Contact Us{" "}
            </small>
          </div>
          <button className="w-fit h-fit px-4 py-2 bg-white text-black font-[400]">
            BOOK
          </button>
        </div>
      </motion.div> */}
      {/* //contactus section */}
      <motion.div
        initial={{
     
          opacity: 0.7,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        
        className="w-full py-8 md:py-[10vh] z-[555] bg-red-800 relative flex flex-col gap-8 items-center justify-center h-fit md:h-[35vh] text-white"
      >
        <h1 className="font-[800] text-center text-[35px] mt-12 md:text-[55px] ">
          Connect with Booking
        </h1>
        <div className="w-fit gap-[3rem] text-4xl pb-[3rem] mx-auto flex justify-between">
          <FaFacebook /> <FaInstagram />
        </div>
      </motion.div>  
   
 
    </div>
  );
};

export default Home;
