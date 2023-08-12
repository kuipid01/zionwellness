/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Team = () => {
   const scrollToTopRef = useRef(null);

   useEffect(() => {
     scrollToTopRef.current.scrollIntoView({ behaviour: "smooth" });
   });
const [toBedisplayed, setToBedisplayed] = useState(0)
  const [teamMembers, setteamMembers] = useState([
{
  id:1,
  name:"Isaac Akefe",
  position:"Ceo, Managing Director",
  text:"Welcome to Zion Disability Service, where our mission is driven by compassion and responsibility. As the CEO, I take great pride in leading our dedicated team that strives to empower individuals with disabilities. At Zion, we believe in fostering a sense of community and independence. Our commitment goes beyond services – we’re here to understand and support each individual’s unique journey. By exploring our comprehensive offerings and impactful stories, you’ll see that we’re more than service providers; we’re your partners on the path to a more inclusive and fulfilling life. Thank you for considering Zion Disability Service as your trusted choice. Warm regards",
  whatsapp:"",
  twitter:"",
  instagram:"",
  imgageUrl:"/assets/ceo.png",
  active:true,
},
{
  id:2,
  name:"Placeholder",
  position:"Placeholder",
  text:"Placeholder",
  whatsapp:"",
  twitter:"",
  instagram:"",
  imgageUrl:"/assets/second.png",
  active:false,
},
  ])
  // const arr = [1, 2];
  const  handleChangeUserFocus =( index) => {
setToBedisplayed(index)
const newArray = teamMembers.map(arr => ({
  ...arr,
  active: arr.id-1===index ?true:false
 
}))

setteamMembers(newArray)
  }
  console.log(teamMembers)
  return (
    <div
    ref={scrollToTopRef}
    >
    
   

      <div className="container w-full h-fit lg:h-[120vh]">
        <div className="mainbody relative  h-full w-full flex lg:flex-row flex-col  ">
          <div className="left relative bg-blue-200 w-full lg:w-1/2 h-[500px] lg:h-full flex ">
            <div className="icons text-xl h-full gap-[20px]  w-[50px] flex flex-col justify-center items-center mt-auto">
              <a href={teamMembers[toBedisplayed].instagram}>
                <FaInstagram />
              </a>
              <a href={teamMembers[toBedisplayed].twitter}>
                <FaTwitter />
              </a>
             
              <a href={teamMembers[toBedisplayed].whatsapp}>
                <FaWhatsapp />
              </a>
            </div>
            <img
              src={teamMembers[toBedisplayed].imgageUrl}
              className="w-[80%] h-[100%] object-cover -translate-x-1/2 absolute top-1/2 -translate-y-1/2 left-1/2"
              alt=""
            />
          </div>
          <div className="right flex flex-col lg:pt-[6rem] p-[10px] lg:pl-[3rem] w-full lg:w-1/2  lg:h-full">
            <h1 className="lg:text-[70px] text-[40px] ">{teamMembers[toBedisplayed].name}</h1>
            <p className="lg:text-[25px] text-[15px] mb-[1rem] text-gray-800">
            {teamMembers[toBedisplayed].position}
            </p>
            <p className="text-[15px] leading-[24px] tracking-wide mb-[1rem] ">
            {teamMembers[toBedisplayed].text}
            </p>
          </div>
          <div className="others bg-gray-100 w-full flex gap-[20px] p-[10px] lg:absolute lg:min-w-[50vw] bottom-[3rem] right-[3rem] lg:w-fit ">
            {teamMembers.map((image,index) => (
              <div
                className={`w-[150px] bg-gray-400 ${image?.active ? 'border-[5px]  border-blue-300' : ''} transition-all hover:scale-95 flex justify-center items-center cursor-pointer  h-[150px]`}
                key={image.id}
                onClick={() => handleChangeUserFocus(index)}
              >
                <img src={image?.imgageUrl} className="w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
