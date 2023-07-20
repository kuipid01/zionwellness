/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Ndis = ({ type }) => {
  if (type === "choose") {
    return (
      <div className="px-3 my-[15px] md:my-[10px]  md:px-[75px] h-fit w-full md:h-[85vh] gap-5 flex md:flex-row flex-col justify-center items-center">
        <div className="flex-1 flex  justify-center items-center md:flex h-full">
          <img
            className=" w-[full] h-full pt-[10px] md:w-[80%] md:h-[80%] object-cover"
            src="/assets/mainJpg.jpg"
            alt=""
          />
        </div>
        <div className="flex md:px-3 flex-1 flex-col  gap-1">
          <h1 className="font-[700] text-[25px] md:text-2xl md:font-[500]  text-gray-800 leading-10">
            Why Choose Us?{" "}
          </h1>
          <p className="text-[17px] font-[200] leading-[30px] ">
            Our organization offers personalized and expert assistance to
            enhance the well-being of individuals with disabilities, empowering
            them to lead more independent lives and actively engage in their
            communities. We place great emphasis on involving family members,
            loved ones, and caregivers throughout the entire process to ensure
            that our services encompass all aspects of a person's daily life.
            Valuing the distinctive qualities of each individual is at the core
            of our team's commitment, making our work truly fulfilling.{" "}
          </p>
          <Link className="mb-[50px]" to="/about">
            <button className=" mt-3 w-full  hover:-translate-y-[5px] rounded-[5px]  py-3 font-semibold bg-[#D28F40] text-white   ">
              About Us
            </button>
          </Link>
        </div>
      </div>
    );
  }
  if (type === "disability") {
    return (
      <div className="px-3 md:px-[75px] bg-gray-100 w-full h-fit md:h-[85vh] flex md:flex-row gap-3 flex-col-reverse justify-center items-center">
        <div className="flex md:px-3 flex-1 flex-col gap-1">
          <h1 className="font-[700] text-[25px] md:text-2xl md:font-[500] text-gray-800 leading-10">
            Disability Support and Care Services{" "}
          </h1>
          <p className="text-[17px] font-[200] leading-[30px] ">
            Zion Support Services provides high-quality, personalized support
            for individuals with diverse challenges. Our services are
            respectful, flexible, affordable, and accessible to people of all
            backgrounds. We tailor our support to meet individual needs and help
            clients achieve personal goals. Our genuine care extends to both our
            staff and clients.{" "}
          </p>
          <Link to="/about">
            <button className=" mt-3 w-full mb-[100px] hover:-translate-y-[5px] rounded-[5px]  py-3 font-semibold bg-[#D28F40] text-white   ">
              About Us
            </button>
          </Link>
        </div>
        <div className="flex-1 flex  justify-center items-center md:flex h-full">
          <img
            className=" w-[full] h-full pt-[10px] md:w-[80%] md:h-[80%] object-cover"
            src="/assets/disabled.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
  return (
    <div className="px-3 md:px-[75px] w-full h-fit my-[40px] md:my-0 md:h-[85vh] flex justify-center items-center">
      <div className="flex md:px-3 flex-1 flex-col gap-8">
        <h1 className="font-[200] text-[25px] md:text-2xl md:font-[500] text-gray-800 leading-10">
          Who is the NDIS for?{" "}
        </h1>
        <p className="text-[14px] font-[500] ">
          The NDIS is for Australians under 65 years old, who have a permanent
          and significant disability. Disabilities may include intellectual,
          physical, sensory, cognitive and psychosocial.{" "}
        </p>
        <p className="font-bold">
          To find out if you are eligible for the NDIS, please visit the
          <a
            className="text-[#801645] ml-[3px]"
            href="https://www.ndis.gov.au/applying-access-ndis/am-i-eligible"
          >
            official NDIS Eligibility Checklist.
          </a>
        </p>
        <button className=" mt-3 w-fit  hover:-translate-y-[5px] rounded-[5px]  py-2 px-7 font-semibold bg-[#D28F40] text-white  ">
          Disabilty Services
        </button>
      </div>
      <div className="flex-1 hidden justify-center items-center md:flex h-full">
        <img
          className=" w-[80%] h-[80%] object-cover"
          src="https://img.freepik.com/free-photo/team-supporting-invalid-coworker_23-2148476555.jpg?w=1060&t=st=1688411445~exp=1688412045~hmac=c1bc6959666fe549f9447fb0eca78e04a383b776a07577aa8fb35fd9e9139ba5"
          alt=""
        />
      </div>
    </div>
  );
};

export default Ndis;
