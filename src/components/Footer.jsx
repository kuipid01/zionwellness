import React from "react";
import {
  AiFillPhone,
  AiOutlineArrowRight,
  AiOutlineMail,
} from "react-icons/ai";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full z-[999] flex flex-col gap-2 relative justify-center items-center md:h-[50vh] h-[]80vh py-5">
      <img
        src="https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJrJTIwZGVzaWducyUyMHdpdGglMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="w-full absolute max-h-full object-cover h-full top-0 left-0 "
      />
      <div  className="w-full max-h-full bg-red-500 opacity-70 absolute object-cover h-full top-0 left-0 ">

      </div>
      <div className="md:w-[80%] z-[999] w-full px-3 py-20 text-white justify-between gap-9 md:gap-0 flex md:flex-row flex-col mx-auto h-fit ">
        <div className="md:w-[30%] mb-9 w-full">
          <h1 className="text-4xl text-center mb-3">Logo</h1>
          {/* <img src="https://scicarers.com.au/wp-content/uploads/2021/05/sci-care-1024x265.jpg" alt="" /> */}
          <p className="md:text-left leading-[30px] text-center font-medium md:font-semibold text-[15px]">
            Zion Wellness Services: Empowering disabilities, connecting
            communities, fostering well-being.
          </p>
        </div>
        <div>
          <h1 className="mb-5">Quick Links</h1>
          <hr className="text-[5px] mb-4" />
          <ul className="flex flex-col gap-2">
            <li>Our Team</li>
            <li> Testimonials</li>
            <li>Contact Us</li>
            <li>About Zion Wellness</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-5">Official information</h1>
          <hr className="text-[5px] mb-4" />
          <p className="flex  mb-8 items-center gap-3">
            <AiOutlineMail />
            <span> abc@example.com </span>
          </p>
        </div>
        <div>
          <h1 className="mb-5">Call Now</h1>
          <hr className="text-[5px] mb-4" />
          <p className="flex  mb-8 items-center gap-3">
            <AiFillPhone />
            <span> 12345678 </span>
          </p>
          <div className="w-[300px] relative flex justify-center py-1 items-center bg-white h-[50px]">
            <input
              type="text"
              className="w-full h-full text-black outline-none pl-3 bg-transparent"
              placeholder="Enter your email to join"
            />
            <button className="absolute flex font-[700] px-5  bg-red-700 justify-center items-center gap-2 right-0 h-full ">
              {" "}
              <span>Send</span> <AiOutlineArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] text-white" />
      <p className="text-white w-fit font-bold text-base md:text-base items-center flex mx-auto text-center">
        Copyright &copy; Devkuipid | Inspired <br className="flex md:hidden" />{" "}
        by Major Wellness Center - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
