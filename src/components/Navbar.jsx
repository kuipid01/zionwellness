/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navLinks, setNavLinks] = useState([
    {
      id: 1,
      name: "Home",
      links: false,
      nav: "/",
    },
    {
      id: 2,
      name: "Services",
      links: false,
      nav: "/services",
    },
    {
      id: 3,
      name: "About us",
      links: false,
      nav: "/about",
    },
    {
      id: 4,
      name: "Team",
      links: false,
      nav: "/team",
    },
    {
      id: 5,
      name: "Testimonials",
      links: false,
      nav: "/testimonials",
    },
    {
      id: 6,
      name: "Contact Us",
      links: false,
      nav: "/contact",
    },
  ]);
  const [navShow, setNavShow] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  const changeLink = (id) => {
    const newLinks = navLinks.map((link) => ({
      ...link,
      links: id + 1 === link.id ? true : false,
    }));

    setNavLinks(newLinks);
  };
  const isActive = () => {
    window.scrollY === 0 ? setNavShow(false) : setNavShow(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });

  let navStyle = {
    transition: "top .7s ease-in-out",
  };
  return (
    <div
      className={`w-full sticky top-0 left-0 z-[9999] font-[500] transition-all  flex justify-center bg-[#801645] text-white items-center ${
        navShow ? "h-[15vh] " : "h-[20vh] "
      } z-[9999999]`}
    >
      <nav className="w-[97%] md:w-[80%] flex justify-between h-full items-center">
        <div className="flex h-full items-center">

        
        <div className={` flex ${
        navShow ? "md:w-[80px] w-[60px] h-[50px] md:h-[60px]" : " w-[80px] h-[80px] md:w-[100px] md:h-[100px] "
      }  transition-all  ` }>
         <img src="/assets/singleLogo.png"  className="w-full  md:hidden h-full object-contain" alt="" />
       
          <img src="/assets/ZionFire.png"  className="w-full hidden md:flex h-full object-contain" alt="" />
        </div>
        <span className='text-gray-100 md:hidden text-[20px] font-[600]'>Zion Support Services</span>
        </div>
        {navMobile ? (
           <div className="w-fit h-fit p-2 mr-2 rounded-full bg-[#D28F40]">
          <AiOutlineClose
            onClick={() => setNavMobile(false)}
            className="text-[30px] cursor-pointer hover:text-[#D28F40] transition-all hover:text-[28px] md:hidden  font-[900] text-gray-100"
          /> </div>
        ) : (
          <div className="w-fit h-fit p-2 flex md:hidden mr-2  rounded-full bg-[#D28F40]">
 <AiOutlineMenu
            onClick={() => setNavMobile(true)}
            className="text-[25px] cursor-pointer  hover:text-[#D28F40] transition-all  font-[500] text-white"
          />
          </div>
         
        )}
        <div className="hidden  w-fit h-full md:flex items-center justify-center">
          <ul className="flex h-full  items-center gap-5 uppercase text-lg font-[400]">
            {navLinks.map((links, index) => (
              <Link key={links.id} to={links.nav}>
                <li
                  onClick={() => changeLink(index)}
                  className={`transition-all ${
                    links.links && "border-b-2 text-[#D28F40] border-[#D28F40]"
                  } hover:text-red-300 cursor-pointer text-[17px] `}
                  key={links.id}
                >
                  {links.name}
                </li>
              </Link>
            ))}
            <li className="w-[2px] bg-gray-400 text-gray-400 h-[20px]"></li>
            {/* <div className="flex text-2xl gap-5 ">
              <AiOutlineShoppingCart className="cursor-pointer hover:text-red-300" />
              <BiUser className="cursor-pointer hover:text-red-300" />
            </div> */}
          </ul>
        </div>
      </nav>

      {/* ////navmobile */}
      <div
        style={navStyle}
        className={`w-[70%] md:hidden h-screen right-0 fixed ${
          navMobile ? "top-[15vh]" : "-top-[100vh]"
        } z-[999999] bg-[#801645]`}
      >
        {/* <img className='absolute top-0 left-0 w-full h-full object-cover' src="1d?ixlib=rb-4.0.3&ixid=Mp&w=387&q=80" alt="" /> */}
        <div className="  w-full px-5 py-7 text-white h-full md:hidden flex flex-col items-center justify-center">
          <ul className="flex flex-col items-end h-full  w-full gap-5 uppercase text-lg font-[400]">
            {navLinks.map((links, index) => (
              <Link onClick={() => setNavMobile(false)} key={links.id} to={links.nav}>
                <li
                  onClick={() => changeLink(index)}
                  className={`transition-all ${
                    links.links && "border-b-2 text-white-400 border--[#D28F40]"
                  } hover:text-[#D28F40] cursor-pointer `}
                  key={links.id}
                >
                  {links.name}
                </li>
              </Link>
            ))}

        
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
