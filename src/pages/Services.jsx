/* eslint-disable no-unused-vars */

import React, { useEffect,useState, useRef } from "react";
const Services = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      details: "Assistance with Daily Personal Activities (High-Intensity)",
    },

    {
      id: 2,
      details: "Assistance with Life Stage Transitions and Support ",
    },

    {
      id: 3,
      details: "	Assistance with Daily Personal Activities  ",
    },

    {
      id: 4,
      details: "	Vehicle Modifications ",
    },

    {
      id: 5,
      details: "	Specialist Disability Accommodation (SDA)  ",
    },
    {
      id: 6,
      details: "	NDIS Planning and Plan Management ",
    },

    {
      id: 7,
      details: "	Assistance with Household Tasks ",
    },

    {
      id: 8,
      details: "	Development of Daily Living and Life Skills  ",
    },

    {
      id: 9,
      details: "Community Nursing Care",
    },
  ]);
  // const scrollToTopRef = useRef(null);
  let textStyle = {
    fontFamily: " Jost, sans-serif",
  };
  // useEffect(() => {
  //   scrollToTopRef.current.scrollIntoView({behaviour:'smooth'});
  // });

  return (
    <div  
    // ref={scrollToTopRef}  
    className=" flex flex-col justify-center relative items-center w-full h-full ">
      <img
        className="w-full h-full fixed  top-0 left-0 object-cover "
        src="/assets/disabled2.jpg"
      />
      <div className="w-full h-full fixed bg-black opacity-60 z-[555] top-0 left-0 object-cover "></div>
      <div className="h-fit z-[999] flex md:flow-row flex-col justify-center items-center gap-7 font-bold w-full py-32 md:py-52 bg-transparent">
        <div className="md:w-2/3 px-[10px] w-full flex md:flow-row flex-col gap-8">
        <h1 className="text-6xl text-[#D28F40] text-center">Our services</h1>
          <div className="flex flex-1 flex-col">
            {/* <h1 className="md:text-3xl md:text-center text-lg left-9 font-light md:font-semibold mb-4 text-[#A700AE]">
              What services can we at Zion Support Services deliver under the
              NDIS
            </h1> */}
            <p  style={textStyle} className=" md:leading-10 text-[18px] md:text-[25px] leading-6  text-gray-200 font-[300]">
              Zion Support  Services consistently deliver a standard of
              excellence in disability care by placing people at the heart of
              everything we do.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full z-[999] bg-gray-200 h-fit py-32 justify-center items-center">
        <div className="flex px-6 flex-col gap-5">
          <h1  style={textStyle}  className="md:text-4xl text-xl font-light md:font-normal  leading-9 text-center mb-3">
            These supports fall into categories aligned with their purpose.
            These are:
          </h1>
          <div className="flex gap-[20px] flex-wrap justify-center">
            {services.map((test, index) => (
              <div
                key={test.id}
                className="md:w-[20%] w-full text-xl  flex justify-center items-center py-[20px] px-4 items-left  h-fit  bg-white text-gray-700"
              >
                <p  style={textStyle}  className=" text-center text-[15px] md:text-[20px]">
                  {" "}
                  &apos;{test.details}&apos;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
