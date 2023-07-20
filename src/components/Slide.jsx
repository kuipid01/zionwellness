/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './slide.css'

const slidesData = [
  // Replace these URLs with your actual slide content (images, text, etc.)
  'https://via.placeholder.com/800x400?text=Slide%201',
  'https://via.placeholder.com/800x400?text=Slide%202',
  'https://via.placeholder.com/800x400?text=Slide%203',
];
const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current slide index every 5 seconds
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);
  return (
    <div className="slider">
    <div
      className="slides-wrapper"
      style={{
        transform: `translateX(-${currentSlide * 100}%)`,
        transition: 'transform 0.5s ease',
      }}
    >
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className="slide"
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      ))}
    </div>
  </div>
    // <div className='w-full px-[65px] h-[90vh] overflow-x-hidden'>
    //      <div className="container w-full  ">
    //         <div className="w-full  flex flex-row ">
    //           <div className={`w-full categoryDashboard rounded-[8px] overflow-hidden flex mb-[76px] text-white items-center pl-[10px] md:pl-[40px] h-[350px] md:h-[450px] relative`}>
    //             <img
    //               src="/assets/disabled6.jpg"
    //               className="absolute top-0 rounded-[8px] overflow-hidden  left-0 w-full h-full object-cover"
    //               alt=""
    //             />
    //             <div className="absolute bgStyle  h-full  top-0 left-0 w-full"></div>
    //             <div className="absolute bottom-[49px]">
    //               <div className="rounded-[100px] mb-[16px] text-black bg-[#9EFF51] py-2 md:py-6 w-fit h-[32px] px-[12px] flex justify-center items-center">
    //                 {" "}
    //                 <span className="w-[6px] h-[6px] rounded-full mr-[6px] bg-[#222222]"></span>{" "}
    //                 <span className="text-xs md:text-base"> Technology </span>
    //               </div>
    //               <h1 className="font-[600] text-[20px] md:text-[36px] leading-6 md:leading-[44px] text-left max-w-[816px] mb-[24px]">
    //                 {topCat[Index].name}
    //               </h1>
    //               <div className="flex items-center justify-start gap-[15px]">
    //                 <img
    //                   src= "/assets/disabled5.jpg"
    //                   className="md:w-[57px] w-[30px] h-[30px] md:h-[57px] rounded-full object-cover"
    //                   alt=""
    //                 />
    //                 <div>
    //                   <p>Dennis Sadah</p>
    //                   <div className="flex justify-center items-center">
    //                     {" "}
    //                     <small className="font-[600] text-[10px] md:text-[16px] leading-[19px]">
    //                       June 15, 2023
    //                     </small>{" "}
    //                     <div className="w-[4px] h-[4px] rounded-full text-white bg-white mx-3 md:mx-10"></div>{" "}
    //                     <small className="font-[400] text-[9px] md:text-[14px] leading-[10px] md:leading-[17px]">
    //                       5 Min Read
    //                     </small>{" "}
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="w-[59px] flex justify-center items-center  h-[47px]  text-black bg-[#26311d] absolute bottom-0 right-0"></div>
    //             <div className="w-[64px] flex justify-center items-center  h-[58px]  text-black bg-[#78985e] absolute bottom-0 right-[11px]"></div>
    //             <div className="w-[69px] flex justify-center items-center  h-[69px]  text-black bg-[#9EFF51] absolute bottom-0 right-[21px]">
    //               <div className="flex w-fit h-fititems-start justify-center">
    //                 <h1 className="text-[25px] font-[700]">01</h1>
    //                 <div className="h-[20px] my-auto w-[1px] rotate-[5deg]  bg-gray-700"></div>
    //                 <h1 className="text-[12.8571px] pt-1 text-[#222222] font-[500]">
    //                   6
    //                 </h1>
    //               </div>
    //             </div>
    //           </div>
    //           {/* {  topCat.map((cat) =>  
    //  <div key={cat.id} className="w-[90vw] rounded-[8px] overflow-hidden flex mb-[76px] text-white items-center pl-[10px] md:pl-[40px] h-[350px] md:h-[450px] relative">
    //         <img
    //           src={bg}
    //           className="absolute top-0 rounded-[8px] overflow-hidden  left-0 w-full h-full object-cover"
    //           alt=""
    //         />
    //         <div className="absolute bgStyle  h-full  top-0 left-0 w-full"></div>
    //         <div className="absolute bottom-[49px]">
    //           <div className="rounded-[100px] mb-[16px] text-black bg-[#9EFF51] py-2 md:py-6 w-fit h-[32px] px-[12px] flex justify-center items-center">
    //             {" "}
    //             <span className="w-[6px] h-[6px] rounded-full mr-[6px] bg-[#222222]"></span>{" "}
    //             <span className="text-xs md:text-base"> Technology </span>
    //           </div>
    //           <h1 className="font-[600] text-[20px] md:text-[36px] leading-6 md:leading-[44px] text-left max-w-[816px] mb-[24px]">
    //             Lorem ipsum dolor sit amet consectetur. Neque non iaculis
    //             integer malesuada.
    //           </h1>
    //           <div className="flex items-center justify-start gap-[15px]">
    //             <img
    //               src={img7}
    //               className="md:w-[57px] w-[30px] h-[30px] md:h-[57px] rounded-full object-cover"
    //               alt=""
    //             />
    //             <div>
    //               <p>Dennis Sadah</p>
    //               <div className="flex justify-center items-center">
    //                 {" "}
    //                 <small className="font-[600] text-[10px] md:text-[16px] leading-[19px]">
    //                   June 15, 2023
    //                 </small>{" "}
    //                 <div className="w-[4px] h-[4px] rounded-full text-white bg-white mx-3 md:mx-10"></div>{" "}
    //                 <small className="font-[400] text-[9px] md:text-[14px] leading-[10px] md:leading-[17px]">
    //                   5 Min Read
    //                 </small>{" "}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-[59px] flex justify-center items-center  h-[47px]  text-black bg-[#26311d] absolute bottom-0 right-0"></div>
    //         <div className="w-[64px] flex justify-center items-center  h-[58px]  text-black bg-[#78985e] absolute bottom-0 right-[11px]"></div>
    //         <div className="w-[69px] flex justify-center items-center  h-[69px]  text-black bg-[#9EFF51] absolute bottom-0 right-[21px]">
    //           <div className="flex w-fit h-fititems-start justify-center">
    //             <h1 className="text-[25px] font-[700]">01</h1>
    //             <div className="h-[20px] my-auto w-[1px] rotate-[5deg]  bg-gray-700"></div>
    //             <h1 className="text-[12.8571px] pt-1 text-[#222222] font-[500]">
    //               6
    //             </h1>
    //           </div>
    //         </div>
    //       </div> )} */}
    //         </div>
    //       </div>
    // </div>
  )
}

export default Slide