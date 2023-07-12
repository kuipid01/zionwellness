/* eslint-disable no-unused-vars */
import  { useEffect,useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Percy 1 Jackson",
      title: "Father",
      details: "Nice one Zion",
    },
    {
      id: 2,
      name: "Percy 2 Jackson",
      title: "Father",
      details: "Nice one Zion",
    },
    {
      id: 3,
      name: "Percy 3 Jackson",
      title: "Father",
      details: "Nice one Zion",
    },
    {
      id: 4,
      name: "Percy 4 Jackson",
      title: "Father",
      details: "Nice one Zion",
    },
    {
      id: 5,
      name: "Percy 5 Jackson",
      title: "Father",
      details: "Nice one Zion",
    },
    {
      id: 6,
      name: "Percy 6 Jackson",
      title: "Father",
      details: "Nice one Zion",
    },
  ]);
  const [sliderPosition, setSliderPosition] = useState(0)
  const MaxWidth = (testimonials.length -1 )*366
  const divWidth = 3 * 366
  let Slidestyle= {
    transform:`translateX(-${sliderPosition}px)`,
    transition:'transform .4s ease-in-out'
  }
  let widthStyle= {
    width:`${divWidth}px`,
   
  }
  const scrollToTopRef = useRef(null);

  useEffect(() => {
    scrollToTopRef.current.scrollIntoView({behaviour:'smooth'});
  },[]);

const setLeft  = () => {
if (sliderPosition===0) {
        
    setSliderPosition(MaxWidth -(366*3))
}
else{

    const newSlidePosition =  sliderPosition - 366
    setSliderPosition(newSlidePosition)
}
}
const setRight  = () => {
    if (sliderPosition >= ( MaxWidth - (366 * 3 ))) {
        
        setSliderPosition(0)
    }
  else{

    const newSlidePosition =  sliderPosition + 366
    setSliderPosition(newSlidePosition)
  }
    }
  
  return (
    <div ref={scrollToTopRef}  className=" flex flex-col justify-center relative items-center w-full h-full ">
      <img
        className="w-full h-full fixed  top-0 left-0 object-cover "
        src="https://plus.unsplash.com/premium_photo-1682437271487-372d22ec7548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwc2hha2luZyUyMGhhbmRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      />
 <div className="h-fit z-[999] font-bold w-full py-32 md:py-52 bg-transparent">
        <h1 className="md:text-6xl text-2xl text-[#801645] text-center">Testimonials</h1>
      </div>
      <div className="relative flex justify-center pr-5 sm:pr-0 items-center  bg-gray-100 w-full h-[70vh]">
<div style={widthStyle} className=" flex p-3  overflow-hidden h-full  mx-auto">
<div  style={Slidestyle} className="w-fit  flex justify-center items-center  flex-row h-full gap-4">
{testimonials.map((test) => (
    
    <div key={test.id} className="w-[350px]  flex flex-col py-4 px-4 items-left h-[350px] bg-gray-200 text-gray-700">
      <p className="text-left"> &quot;{test.details}&quot;</p>
      <div className="flex flex-col">
        {" "}
        <small className="font-[400] text-[17px] text-[#D28F40] ">{test.name}</small>{" "}
        <small className="font-[300] text-xs"> {test.title}</small>
      </div>
    </div>

  ))}
</div>
</div>
<AiOutlineArrowLeft onClick={setLeft} className="text-xl cursor-pointer absolute top-1/2 -translate-y-1/2 text-[#D28F40]   left-4 md:left-[150px] "/>
<AiOutlineArrowRight onClick={setRight} className="text-xl cursor-pointer absolute top-1/2 text-[#D28F40]  -translate-y-1/2  right-4  md:right-[150px] "/>
      </div>
     
          
     
     
    </div>
  );
};

export default Testimonials;
