/* eslint-disable no-unused-vars */

import {
  AiFillPhone,
  AiOutlineArrowRight,
  AiOutlineMail,
} from "react-icons/ai";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMap,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full z-[999] flex flex-col relative justify-center items-center md:h-fit h-fit ">
      <img
        src="https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJrJTIwZGVzaWducyUyMHdpdGglMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="w-full absolute max-h-full object-cover h-full top-0 left-0 "
      />
      <div className="w-full max-h-full bg-[#801645] text-white  absolute object-cover h-full top-0 left-0 "></div>
      <div className="md:w-[90%] z-[999] w-full px-3 py-20  text-white justify-between gap-9 md:gap-0 flex md:flex-row flex-col mx-auto h-fit ">
        <div className="md:w-[30%] mb-9 w-full">
          <div className={`mx-auto w-[150px] h-[150px]`}>
          <div className="w-[200px] h-[100px] bg-white">
              {" "}
              <img
                className="w-full h-full object-fill"
                src="https://www.platinumcareservices.com.au/wp-content/uploads/2021/03/NDIS-Logo-sidebar-e1669253229454.webp"
                alt=""
              />{" "}
            </div>
          </div>
          {/* <img src="https://scicarers.com.au/wp-content/uploads/2021/05/sci-care-1024x265.jpg" alt="" /> */}
          <p className="md:text-left leading-[30px] text-center font-[300] md:font-[400] text-[15px]">
            The National Disability Insurance Scheme (NDIS) supports people with
            disability to live full, independent and meaningful lives.
          </p>
          <hr className="w-full h-[1px] bg-gray-700" />
          <p className="md:text-left leading-[30px] text-center font-[300] md:font-[400] text-[15px]">
            ABN | 54 366 429 676
          </p>
          <hr className="w-full h-[1px] bg-gray-700" />
  
        </div>
        <div>
          <h1 className="text-xl text-[#D28F40]  mb-5">Quick Links</h1>
          <hr className="text-[5px] mb-4" />
          <ul className="flex font-light flex-col gap-2">
            <Link to="/team">
              <li>Our Team</li>
            </Link>
            <Link to="/testimonials">
              <li> Testimonials</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-[#D28F40]  mb-5">Official information</h1>
          <hr className="text-[5px] mb-4" />
          <p className="flex  mb-8 items-center gap-3">
            <AiOutlineMail />
            <span className="text-[#D28F40] "> abc@example.com </span>
          </p>
        </div>
        <div>
          <h1 className="text-xl text-[#D28F40]  mb-5">Connect With Us</h1>
          <hr className="text-[5px] mb-4" />
          <p className="flex  mb-8 items-center gap-3">
            <AiFillPhone />
            <span> 0410546651 </span>
          </p>
          <p className="flex  mb-8 items-center gap-3">
            <FaMap />
            <span> 8/70 Freeman road Durack 4077 </span>
          </p>
          <div className="w-fit gap-[3rem] text-4xl pb-[3rem] text-[#D28F40]    mx-auto flex justify-between">
           
            <FaFacebook /> <FaInstagram />
          </div>
          <Link to='/contact' >  <button className="px-8 rounded-[20px] w-fit py-3 uppercase font-[600] bg-[#D28F40] text-white">Book an appointment</button></Link>
             
          {/* <div className="w-[300px] relative flex justify-center py-1 items-center bg-white h-[50px]">
            <input
              type="text"
              className="w-full placeholder:text-[12px] md:placeholder:text-[14px] h-full text-black outline-none pl-3 bg-transparent"
              placeholder="Enter your email to join"
            />
            <button className="absolute flex font-[700] px-5  bg-red-700 justify-center items-center gap-2 right-0 h-full ">
              {" "}
              <span>Send</span> <AiOutlineArrowRight />{" "}
            </button>
          </div> */}
        </div>
      </div>

      <p className="text-white py-2 relative font-[300] bg-gray-800 w-full  text-[12px] md:text-b[16px] items-center flex mx-auto text-center">
        Copyright &copy; Devkuipid 2023 | Inspired{" "}
        <br className="flex md:hidden" /> by Major Wellness Center - All Rights
        Reserved | Image by{" "}
        <a href="https://www.freepik.com/free-photo/portrait-smiley-student-wheelchair_12296566.htm#query=person%20with%20disability&position=8&from_view=search&track=ais">
          Freepik
        </a>
      </p>
    </div>
  );
};

export default Footer;
