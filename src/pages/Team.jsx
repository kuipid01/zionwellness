/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import ProgressiveImage from "react-progressive-image";
import { motion } from "framer-motion";
const Team = () => {
  const scrollToTopRef = useRef(null);

  useEffect(() => {
    scrollToTopRef.current.scrollIntoView({ behaviour: "smooth" });
  });
  const [toBedisplayed, setToBedisplayed] = useState(0);
  const [teamMembers, setteamMembers] = useState([
    {
      id: 1,
      name: "Isaac Akefe",
      position: "Director,Chief logistics officer",
      text: "Welcome to Zion Disability Service, where our mission is driven by compassion and responsibility. As the Director, I take great pride in leading our dedicated team that strives to empower individuals with disabilities. At Zion, we believe in fostering a sense of community and independence. Our commitment goes beyond services. We’re here to understand and support each individual’s unique journey. By exploring our comprehensive offerings and impactful stories, you’ll see that we’re more than service providers; we’re your partners on the path to a more inclusive and fulfilling life. Thank you for considering Zion Disability Service as your trusted choice. Warm regards",
      whatsapp: "",
      twitter: "",
      instagram: "",
      imgageUrl: "/assets/ceo.png",
      active: true,
    },
    
    {
      id: 2,
      name: "Victoria Akefe",
      position: "Chief executive officer",
      text: "Meet Victoria Akefe, a visionary leader and the CEO of Zion wellness, a pioneering disability service organization. With a profound commitment to inclusivity, Victoria spearheads initiatives that empower individuals with disabilities to achieve their fullest potential. Her strategic mindset and unwavering dedication drive forward innovative solutions, ensuring a world where diversity is celebrated and opportunities are accessible to all.",
      whatsapp: "",
      twitter: "",
      instagram: "",
      imgageUrl: "/assets/ceo2.png",
      active: false,
    },
    {
      id: 3,
      name: "Damilola Akefe",
      position: "Chief operating officer",
      text: "Introducing Damilola Akefe, the dynamic Chief Operational Officer at Zion Disability Services. With her exceptional operational acumen, Damilola orchestrates seamless experiences for individuals with disabilities. Her passion for enhancing lives shines through her strategic leadership, ensuring that Zion remains a beacon of excellence in the disability service sector. With a keen eye for detail and a heart for empowerment, Damilola's dedication drives the mission of creating a more inclusive and vibrant community",
      whatsapp: "",
      twitter: "",
      instagram: "",
      imgageUrl: "/assets/second.png",
      active: false,
    },
  ]);
  // const arr = [1, 2];
  const handleChangeUserFocus = (index) => {
    setToBedisplayed(index);
    const newArray = teamMembers.map((arr) => ({
      ...arr,
      active: arr.id - 1 === index ? true : false,
    }));

    setteamMembers(newArray);
  };

  return (
    <div ref={scrollToTopRef} className="w-full">
      <div className="imageContainer w-full h-fit md:h-[120vh]">
        <div className="mainbody relative  h-full w-full flex md:flex-row flex-col  ">
          <motion.div
            className="left  w-full relative bg-blue-200  md:w-1/2 h-[500px] md:h-full flex "
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            key={teamMembers[toBedisplayed].id}
          >
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
            <ProgressiveImage src="large-image.jpg" placeholder="tiny-image.jpg">
            {src => 
              <img
                src={teamMembers[toBedisplayed].imgageUrl}
                className="w-[80%] h-[100%] object-cover -translate-x-1/2 absolute top-1/2 -translate-y-1/2 left-1/2"
                alt=""
              />}
            </ProgressiveImage>
          </motion.div>
          <div className="right flex flex-col md:pt-[6rem] p-[20px] md:pl-[3rem] w-full md:w-1/2  md:h-full">
            <h1 className="md:text-[70px] text-[#D28F40] text-[40px] ">
              {teamMembers[toBedisplayed].name}
            </h1>
            <p className="md:text-[25px] capitalize text-[15px] mb-[1rem] text-gray-800">
              {teamMembers[toBedisplayed].position}
            </p>
            <p className="text-[15px] leading-[24px] tracking-wide mb-[1rem] ">
              {teamMembers[toBedisplayed].text}
            </p>
          </div>
          <div className="others bg-gray-100 w-full flex gap-[20px] p-[10px] md:absolute md:min-w-[50vw] bottom-[3rem] right-[3rem] md:w-fit ">
            {teamMembers.map((image, index) => (
              <div
                className={`w-[150px] bg-gray-400 ${
                  image?.active ? "border-[5px]  border-blue-300" : ""
                } transition-all hover:scale-95 flex justify-center items-center cursor-pointer  h-[150px]`}
                key={image.id}
                onClick={() => handleChangeUserFocus(index)}
              >
               <ProgressiveImage src="large-image.jpg" placeholder="tiny-image.jpg">
               {src => <img
                    src={image?.imgageUrl}
                    className="w-full max-h-[120px]  h-full object-cover"
                    alt=""
                  />}
               </ProgressiveImage>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
