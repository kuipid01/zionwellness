import React, { useState } from "react";

const Services = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      details: "Accommodation/Tenancy Assistance ",
    },
    {
      id: 2,
      details: "	Assistance to Access and Maintain Employment or Higher Education ",
    },
    {
      id: 3,
      details: "Assistive Products for Personal Care and Safety ",
    },
    {
      id: 4,
      details: "	Assistance with Daily Personal Activities (High-Intensity)",
    },
    {
      id: 5,
      details: "	Personal Mobility Equipment ",
    },
    {
      id: 6,
      details: "Assistance with Life Stage Transitions and Support ",
    },
    {
      id: 7,
      details: "	Specialised Driver Training ",
    },
    {
      id: 8,
      details: "	Assistance with Daily Personal Activities  ",
    },
    {
      id: 9,
      details: "	Assistance with Travel and Transport ",
    },
    {
      id: 10,
      details: "	Vehicle Modifications ",
    },
    {
      id: 11,
      details: "	Assistance Animals  ",
    },
    {
      id: 12,
      details: "Custom Prosthetics ",
    },
    {
      id: 13,
      details: "	Specialist Disability Accommodation (SDA)  ",
    },
    {
      id: 14,
      details: "	NDIS Planning and Plan Management ",
    },
    {
      id: 15,
      details: "	Exercise Physiology and Personal Wellbeing Activities  ",
    },
    {
      id: 16,
      details: "	Assistance with Household Tasks ",
    },
    {
      id: 17,
      details: "Hearing Equipment  ",
    },
    {
      id: 18,
      details: "	Development of Daily Living and Life Skills  ",
    },
    {
      id: 19,
      details: "	Specialised Driver Training ",
    },
    {
      id: 20,
      details: "		Community Nursing Care  ",
    },
   
  ]);
  return (
    <div className=" flex flex-col justify-center relative items-center w-full h-full ">
      <img
        className="w-full h-full fixed  top-0 left-0 object-cover "
        src="https://plus.unsplash.com/premium_photo-1682437271487-372d22ec7548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwc2hha2luZyUyMGhhbmRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      />
      <div  className="w-full h-full fixed bg-black opacity-50 z-[555] top-0 left-0 object-cover ">

      </div>
      <div className="h-fit z-[999] flex md:flow-row flex-col justify-center items-center gap-7 font-bold w-full py-32 md:py-52 bg-transparent">
        <div className="md:w-2/3 px-[10px] w-full flex md:flow-row flex-col gap-8">
        <h1 className="md:text-6xl flex gap-2 md:flex-col flex-1 text-4xl font-light text-red-500 text-center">
            <span>Our </span>
        <span>Services</span>  
        </h1>
        <div className="flex flex-1 flex-col">
          <h1 className="md:text-3xl md:text-center text-lg left-9 font-light md:font-semibold mb-4 text-purple-900">What services can we at Zion Support Services deliver under the NDIS</h1>
          <p className=" md:leading-10 leading-6 text-gray-200 font-[300]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sit
            officia laudantium ratione rem, quae autem labore corrupti, voluptas
            sed animi eius reprehenderit. Ad pariatur, ea illum deleniti quis
            sint?
          </p>
        </div>
        </div>
        
      </div>
      <div className="w-full z-[999] bg-gray-200 h-fit py-32 justify-center items-center">
        <div className="flex px-6 flex-col gap-5">
          <h1 className="md:text-4xl text-xl font-light md:font-normal  leading-9 text-center mb-3">
            These supports fall into categories aligned with their purpose.
            These are:
          </h1>
          <div className="flex gap-[20px] flex-wrap justify-center">
            {services.map((test, index) => (
              <div
                key={test.id}
                className="md:w-[20%] w-full text-xl  flex flex-col justify-center items-center py-3 px-4 items-left  h-fit  bg-white text-gray-700"
              >
                <small className="text-2xl mb-1"> {index + 1}. </small>
                <p className=" text-center text-[15px]"> "{test.details}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
