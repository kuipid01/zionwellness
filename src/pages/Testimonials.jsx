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
      name: " Tom B.",
      title: "Testimonial from a Client",
      details: "Zion Support Services has made a significant impact on my life. Their dedication to empowering individuals with disabilities is truly commendable. They've helped me build confidence and independence, and I've made lifelong friends through their programs. It's a place where you're not defined by your disability but by your abilities.",
    },
    {
      id: 2,
      name: "Sarah M",
      title: "Testimonial from a Parent",
      details: "I cannot express how grateful our family is for the incredible support we've received from Zion Support Services. Their team has been a lifeline for us as we navigate the challenges of raising a child with special needs. They're not just a service; they're like an extended family, always there with a helping hand and a warm smile. I can't recommend them enough",
    },
    {
      id: 3,
      name: " Lisa D",
      title: "Testimonial from a Client",
      details: "Zion Support Services has been a ray of hope in my life. Their personalized care plans and compassionate support workers have made a world of difference. I've achieved goals I once thought were impossible, all thanks to their unwavering encouragement and guidance. They're not just a service; they're a lifeline.",
    },
    {
      id: 4,
      name: "David and Karen R. (Parents of a Client)",
      title: "Testimonial from a Client's Family",
      details: "We can't thank Zion Support Services enough for the incredible care they've provided to our son. From day one, they've treated him like family. The progress he's made under their guidance is nothing short of miraculous. They've not only supported our son but also provided invaluable support to our entire family.",
    },
    {
      id: 5,
      name: "Rebecca H",
      title: "Testimonial from a Community Member",
      details: "Zion Support Services is a cornerstone of our community. Their commitment to inclusivity and support for individuals with disabilities is truly remarkable. They organize fantastic events that bring our community together. It's not just about what they do for their clients; it's about what they do for our whole community.",
    },
    {
      id: 6,
      name: "Michael H.",
      title: "Testimonial from a Client",
      details: "Zion Support Services has been a game-changer in my life. Their team understands the unique challenges individuals with disabilities face, and they tailor their support to meet our individual needs and goals. Thanks to them, I'm living a more independent and fulfilling life. I couldn't be happier with their services.",
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
        className="w-full h-full fixed  top-0 left-0 object-top object-cover "
        src="/assets/disabled1.jpg"    />
 <div className="h-fit z-[999] font-bold w-full py-32 md:py-52 bg-transparent">
        <h1 className="md:text-6xl text-2xl text-[#D28F40]  text-center">Testimonials</h1>
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
<div className="w-[50px] flex cursor-pointer absolute top-1/2 -translate-y-1/2 text-[#ffffff]   left-4 md:left-[150px] h-[50px] rounded-full bg-[#d28f40] items-center justify-center">
<AiOutlineArrowLeft onClick={setLeft} className="text-xl  "/>

</div>
<div className="w-[50px] flexcursor-pointer absolute top-1/2 flex cursor-pointer text-[#ffffff]  -translate-y-1/2  right-4  md:right-[150px]  h-[50px] rounded-full bg-[#d28f40] items-center justify-center">
<AiOutlineArrowRight onClick={setRight} className="text-xl "/>

</div>

      </div>
     
          
     
     
    </div>
  );
};

export default Testimonials;
