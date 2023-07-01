import React, { useState } from "react";

const Services = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      details: "Assistance with Social & Community Participation",
    },
    {
      id: 2,
      details: "Transport",
    },
    {
      id: 3,
      details: "Assistance with daily life",
    },
    {
      id: 4,
      details: "Home Modification",
    },
    {
      id: 5,
      details: "Improved Daily living",
    },
    {
      id: 6,
      details: "Improved Life Choices",
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
          <h1 className="md:text-3xl text-lg left-9 font-light md:font-semibold mb-4 text-purple-500">What services can we at Zion wellness deliver under the NDIS</h1>
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
                className="md:w-[20%] w-full text-xl  flex flex-col justify-center items-center py-4 px-4 items-left md:h-[200px] h-fit  bg-white text-gray-700"
              >
                <small className="text-2xl mb-1"> {index + 1}. </small>
                <p className=" text-center "> "{test.details}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
