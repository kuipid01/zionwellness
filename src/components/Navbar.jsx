import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
const Navbar = () => {
  const [navLinks, setNavLinks] = useState([
    {
      id: 1,
      name: "Home",
      links: true,
    },
    {
      id: 2,
      name: "Services",
      links: false,
    },
    {
      id: 3,
      name: "About us",
      links: false,
    },
    {
      id: 4,
      name: "Careers",
      links: false,
    },
    {
      id: 5,
      name: "Contact Us",
      links: false,
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
    transition: "top 1s ease-in-out",
  };
  return (
    <div
      className={`w-full sticky top-0 left-0 z-[9999] transition-all  flex justify-center bg-white  items-center ${
        navShow ? "h-[15vh] " : "h-[20vh] "
      } `}
    >
      <nav className="w-[80%] flex justify-between h-full items-center">
        <div>ZIONS HEALTH SERVICES</div>
        {navMobile ? (
          <AiOutlineClose
            onClick={() => setNavMobile(false)}
            className="text-[25px] cursor-pointer hover:text-red-600 transition-all hover:text-[27px] md:hidden  font-[900] text-gray-500"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setNavMobile(true)}
            className="text-[25px] cursor-pointer hover:text-red-600 transition-all hover:text-[27px] md:hidden  font-[900] text-gray-500"
          />
        )}
        <div className="hidden  w-fit h-full md:flex items-center justify-center">
          <ul className="flex h-full  items-center gap-5 uppercase text-lg font-[400]">
            {navLinks.map((links, index) => (
              <li
                onClick={() => changeLink(index)}
                className={`transition-all ${
                  links.links && "border-b-2 text-red-400 border-red-400"
                } hover:text-red-300 cursor-pointer `}
                key={links.id}
              >
                {links.name}
              </li>
            ))}
            <li className="w-[2px] bg-gray-400 text-gray-400 h-[20px]"></li>
            <div className="flex text-2xl gap-5 ">
              <AiOutlineShoppingCart className="cursor-pointer hover:text-red-300" />
              <BiUser className="cursor-pointer hover:text-red-300" />
            </div>
          </ul>
        </div>
      </nav>

      {/* ////navmobile */}
   <div
        style={navStyle}
        className={`w-full md:hidden h-screen left-0 fixed ${
          navMobile ? "top-[15vh]" : "-top-[200vh]"
        }  bg-red-600`}
      >
        <div className="  w-full px-5 py-7 text-white h-full md:hidden flex flex-col items-center justify-center">
          <ul className="flex flex-col items-end h-full  w-full gap-5 uppercase text-lg font-[400]">
            {navLinks.map((links, index) => (
              <li
                onClick={() => changeLink(index)}
                className={`transition-all ${
                  links.links && "border-b-2 text-white-400 border-red-400"
                } hover:text-red-300 cursor-pointer `}
                key={links.id}
              >
                {links.name}
              </li>
            ))}

            <div className="flex text-2xl gap-5 ">
              <AiOutlineShoppingCart className="cursor-pointer hover:text-red-300" />
              <BiUser className="cursor-pointer hover:text-red-300" />
            </div>
          </ul>
        </div>
      </div> 
    </div>
  );
};

export default Navbar;
