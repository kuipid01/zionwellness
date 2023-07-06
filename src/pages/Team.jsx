import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Team = () => {
  return (
    <div className=" flex flex-col justify-center relative items-center w-full h-full ">
      <img
        className="w-full h-full fixed  top-0 left-0 object-cover "
        src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
      <div className="w-full h-full fixed bg-black opacity-50 z-[555] top-0 left-0 object-cover "></div>
      <div className="h-fit z-[999] font-bold w-full py-32 md:py-52 bg-transparent">
        <h1 className="text-6xl text-[#801645] text-center">The Team</h1>
      </div>
      <div className="w-full bg-white px-2 md:px-12 z-[888] h-full py-[40px] md:py-32">
        <div className="flex flex-col px-2 md:px-[60px] gap-4 ">
            <h1 className="text-center text-[#D28F40] text-2xl md:text-5xl mb-2"> 
                Team Members
            </h1>
            <hr className="md:w-[200px] w-[100px] mb-[100px] mx-auto h-[3px] rounded-full bg-[#801645]" />
          <div className="w-fit items-center justify-center">
            <div className="md:w-[500px] w-full h-[300px] md:h-[500px] bg-white shadow-2xl shadow-gray-600">
              <img src="" alt="" />
            </div>

            <p className="text-center mt-5"> Test User</p>
            <p className="md:w-[500px] w-full text-center my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              quos inventore laborum eaque exercitationem odit minima? Quam
              eligendi numquam at.
            </p>
            <div className="w-[40px] p-1 h-[40px] flex justify-center items-center mx-auto bg-[#D28F40]  rounded-full">
            <AiOutlineMail className="mx-auto outline-black text-white text-center" />
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
