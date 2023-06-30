import React from "react";

import { motion } from "framer-motion";
const WeareHer = () => {
  const arr = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1469573054742-64da3f2527fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
      title: "Community Nursing Care",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1665990292881-6adfe20470d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291bnNlbGxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",

      title: "Counselling Services",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1661963955274-275dedea1024?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hhcmVkJTIwbGl2aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",

      title: "Daily Task & Shared Living",
    },

    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1661397064847-7880b41ab83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2xkJTIwcGVvcGxlJTIwZGFuY2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",

      title: "Therapeutic Supports",
    },

    {
      id: 5,
      image:
        "https://media.istockphoto.com/id/1396696311/photo/group-study-in-college.jpg?s=612x612&w=0&k=20&c=gZYzKdybbDZrM-o6gaA8_4eY1In9OsKU7FDYESkrnmE=",

      title: "Development of Life Skills",
    },
    {
      id: 6,
      image:
        "https://img1.wsimg.com/isteam/ip/c64ffec2-84e4-4501-b300-d66d7c5617fe/Household%20Tasks.jpg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:776,h:388,cg:true",

      title: "Household tasks",
    },
  ];
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0.1,
      }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      
      className="w-full bg-white z-[999] relative px-[30px] py-10 md:py-32  h-fit"
    >
      <div className="md:w-[80%] w-full first-letter: mx-auto min-h-screen flex flex-col items-center h-fit">
        <h1 className="md:text-5xl text-3xl w-[90%] font-[800] text-center md:font-bold text-red-800">
          We are here for you
        </h1>
        <div className="flex mt-[3rem] gap-[2rem] flex-row flex-wrap">
          {" "}
          {arr.map((card) => (
            <div
              key={card.id}
              className="md:w-[30%] w-full flex flex-col items-center h-fit"
            >
              <p className="mb-[1rem] font-[200] text-red-800 text-3xl">
                {card.title}
              </p>
              <img
                className="w-full object-cover h-[250px] mb-[1rem]"
                src={card.image}
                alt=""
              />
              <button className="w-fit font-bold uppercase h-fit py-3 px-6 text-white bg-red-800">
                find out more{" "}
              </button>
            </div>
          ))}{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default WeareHer;
