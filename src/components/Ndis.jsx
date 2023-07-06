/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Ndis = ({type}) => {
  if (type==='choose') {
    return (
      <div className="px-3 my-[50px] md:my-[10px]  md:px-[75px] h-fit w-full md:h-[85vh] flex md:flex-row flex-col justify-center items-center">
       <div className="flex-1 flex  justify-center items-center md:flex h-full">
          <img className=" w-[full] h-full pt-[10px] md:w-[80%] md:h-[80%] object-cover" src="https://plus.unsplash.com/premium_photo-1680807869239-a22d00d378f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="" />
        </div>
        <div className="flex md:px-3 flex-1 flex-col gap-8">
          <h1 className="font-[200] text-[25px] md:text-2xl md:font-[500]  text-gray-800 leading-10">Who Choose Us? </h1>
          <p className="text-[17px] font-[200] leading-[30px] ">
          Our organization offers personalized and expert assistance to enhance the well-being of individuals with disabilities, empowering them to lead more independent lives and actively engage in their communities. We place great emphasis on involving family members, loved ones, and caregivers throughout the entire process to ensure that our services encompass all aspects of a person's daily life. Valuing the distinctive qualities of each individual is at the core of our team's commitment, making our work truly fulfilling.  </p>
          <Link className="mb-[50px]" to='/about'>
          <button className="w-full  hover:-translate-y-[5px] rounded-[5px]  py-3  bg-[#A700AE] text-white   font-[200]">About Us</button>
        
          </Link>
</div>
      
      </div>
    );
  }
  if (type==='disability') {
    return (
      <div className="px-3 md:px-[75px] w-full h-fit md:h-[85vh] flex md:flex-row flex-col-reverse justify-center items-center">
       
        <div className="flex md:px-3 flex-1 flex-col gap-8">
          <h1 className="font-[200] text-[25px] md:text-2xl md:font-[500] text-gray-800 leading-10">Disability Support and Care Services </h1>
          <p className="text-[17px] font-[200] leading-[30px] ">Zion Support Services provides high-quality, personalized support for individuals with diverse challenges. Our services are respectful, flexible, affordable, and accessible to people of all backgrounds. We tailor our support to meet individual needs and help clients achieve personal goals. Our genuine care extends to both our staff and clients.{" "}
          </p>
          <Link to='/about'>
          <button className="w-full mb-[100px] hover:-translate-y-[5px] rounded-[5px]  py-3  bg-[#A700AE] text-white   font-[200]">About Us</button>
        
          </Link>
</div>
<div className="flex-1 flex  justify-center items-center md:flex h-full">
          <img className=" w-[full] h-full pt-[10px] md:w-[80%] md:h-[80%] object-cover" src="https://plus.unsplash.com/premium_photo-1661774698683-ac91910928fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZGlzYWJsZWQlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
        </div>
      </div>
    );
  }
  return (
    <div className="px-3 md:px-[75px] w-full h-[85vh] flex justify-center items-center">
      <div className="flex md:px-3 flex-1 flex-col gap-8">
        <h1 className="font-[200] text-[25px] md:text-2xl md:font-[500] text-gray-800 leading-10">Who is the NDIS for? </h1>
        <p className="text-[14px] font-[500] ">
          The NDIS is for Australians under 65 years old, who have a permanent
          and significant disability. Disabilities may include intellectual,
          physical, sensory, cognitive and psychosocial.{" "}
        </p>
        <p className="font-bold">
          To find out if you are eligible for the NDIS, please visit the 
          <a className="text-purple-700 ml-[3px]" href="https://www.ndis.gov.au/applying-access-ndis/am-i-eligible">
            official NDIS Eligibility Checklist.
          </a>
        </p>
        <button className="w-fit  hover:-translate-y-[5px] rounded-[5px]  py-2 px-7 bg-[#A700AE] text-white   font-[200]">Disabilty Services</button>
      </div>
      <div className="flex-1 hidden justify-center items-center md:flex h-full">
        <img className=" w-[80%] h-[80%] object-cover" src="https://img.freepik.com/free-photo/team-supporting-invalid-coworker_23-2148476555.jpg?w=1060&t=st=1688411445~exp=1688412045~hmac=c1bc6959666fe549f9447fb0eca78e04a383b776a07577aa8fb35fd9e9139ba5" alt="" />
      </div>
    </div>
  );
};

export default Ndis;
