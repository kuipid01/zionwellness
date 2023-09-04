/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
const About = () => {
  let textStyle = {
    fontFamily: " Jost, sans-serif",
  };
  // const scrollToTopRef = useRef(null);

  // useEffect(() => {
  //   scrollToTopRef.current.scrollIntoView({ behaviour: "smooth" });
  // });
  return (
    <div
      // ref={scrollToTopRef}
      className=" flex flex-col justify-center relative items-center w-full h-full "
    >
      <img
        className="w-full h-full fixed  top-0 left-0  object-contain object-center md:object-cover "
        src="https://i.pinimg.com/736x/0e/cc/d5/0eccd583cbf5e5226e6d61c6d3092088.jpg"
      />
      <div className="w-full h-full fixed bg-black opacity-50 z-[555] top-0 left-0 object-cover "></div>
      <div className="h-fit z-[999] font-bold w-full py-32 md:py-52 bg-transparent">
        <h1 className="text-6xl text-[#D28F40] text-center"> About Us </h1>
      </div>
      <div className="w-full bg-white px-2 md:px-12  z-[888] h-full py-[40px] md:py-32">
        <p
          style={textStyle}
          className="w-full px-[5px] font-light md:text-lg leading-7 md:leading-8 "
        >
          At Zion Support Services we provide a range of disability support
          services. With the range of services, we provide, we aim to make a
          difference in the lives of those with disability. The goal is to make
          each of our participant’s lives easier, fairer and more involved by
          participating within their own communities. Zion Support Services is a
          company that was establishe:ence and progression in a safe and
          non-discriminative environment.
        </p>
        <hr className="w-full h-[2px] my-4 bg-gray-400" />
        <h1 className="md:text-6xl font-bolder  text-center text-[#D28F40] mb-3 text-3xl">
          Our Statements
        </h1>
        <div className="w-fit my-[20px]  p-3  md:p-5 mx-auto border border-[#d28f40] rounded-[4px]">
          <h1 className="md:text-3xl font-bolder  text-center text-[#d28f40] mb-3 text-lg">
            Values Statement
          </h1>
          <span
            style={textStyle}
            className=" text-[14px] md:text-[20px] font-[400] leading-[30px]   md:tracking-wider "
          >
            Our values are centred around our staff, participants and their
            families or guardians.
          </span>
        </div>
        <div>
          <br />
          <p className=" text-black text-xl ">
            Respect-{" "}
            <span
              style={textStyle}
              className="text-[15px] md:text-[17px] font-[500] md:font-[300] leading-[30px]   md: md:tracking-wider "
            >
              We respect people’s decisions, opinions and views.
            </span>{" "}
            <br />
          </p>
          <br />
          <p>
            <span className="text-black text-xl">Honesty </span>{" "}
            <span
              style={textStyle}
              className="text-[15px] md:text-[17px] font-[500] md: leading-[30px] md:font-[300]  md: md:tracking-wider "
            >
              -We are trustworthy and tell the truth to keep our promise to you.{" "}
            </span>
          </p>
          <br />
          <p>
            <span className="text-black text-xl">
              {" "}
              Privacy and Confidentiality{" "}
            </span>{" "}
            <span
              style={textStyle}
              className="text-[15px] md:text-[17px] font-[500] md:font-[300] leading-[30px]   md: md:tracking-wider "
            >
              -This is of utmost importance as outlined in our Privacy and
              Confidentiality Policy and Procedure.
            </span>
          </p>
          <br />
          <p>
            <span className="text-black text-xl">
              {" "}
              Development and Improvement{" "}
            </span>{" "}
            <span
              style={textStyle}
              className="text-[15px] md:text-[17px] font-[500] md:font-[300] leading-[30px]  md:tracking-wider "
            >
              - We will identify, with your help, where we can develop projects.
              We always work to improve our services and to uphold the Service
              Standards. Your feedback is always valued.{" "}
            </span>
          </p>
          <br />
          <p>
            <span className="text-black text-xl">
              {" "}
              Safe and Harmonious working environment
            </span>{" "}
            <span
              style={textStyle}
              className="text-[15px] md:text-[17px] font-[500] md:leading-[30px] md:font-[300]  md:tracking-wider "
            >
              -We offer a workplace that provides support, guidance and
              acceptance to staff and participants.{" "}
            </span>
          </p>{" "}
          <br />
          <p>
            <span className="text-black text-xl">Passion </span> -{" "}
            <span
              style={textStyle}
              className="text-[15px] md:text-[17px] font-[500] md:font-[300] leading-[30px]   md: md:tracking-wider "
            >
              We have a passion to our work ethics. Every member of staff is
              passionate about his work and takes the participant as part of the
              family.{" "}
            </span>
          </p>
          <br />
          <div className="w-fit my-[40px]  p-3  md:p-5 mx-auto border border-[#d28f40] rounded-[4px]">
            <h1 className="md:text-3xl font-bolder  text-center text-[#D28F40] mb-3 text-lg">
              Vision Statement
            </h1>
            <span
              style={textStyle}
              className="text-[14px] md:text-[20px] font-[400] leading-[30px]   md:tracking-wider "
            >
              To excel as a community disability support services provider.
            </span>
          </div>
           <hr className="w-full my-[30px] h-[2px]  bg-gray-400" />
          <h1 className="md:text-6xl font-bolder  text-center text-[#D28F40] mb-3 text-3xl">
            Mission Statement
          </h1>
          <span
            style={textStyle}
            className="text-[15px] md:text-[17px] font-[500] md:font-[300] leading-[30px]   md:tracking-wider "
          >
            To provide high-quality and effective disability support services,
            where every person we care for matters. Our Planning Process
            Operation plans are developed in conjunction with Strategic plans to
            support the overarching goals and completion of the strategic plan
            along with identifying what is expected upon the following year.
            Operational plans are a one-year plan which will be created annually
            along with input of key personnel, staff, care recipients and their
            families. Upon our Strategic planning, we incorporate organisational
            management activity that is used to set priorities, focus energy and
            resources and strengthen operations to ensure that employees and
            other stakeholders are working toward common goals. Our organisation
            uses a 3-year Strategic plan approach.
            <br />
            Zion Support Services is a disability support services provider
            based in 8/70 Freeman road Durack 4077. At Zion Support Services we
            provide a range of disability support services. With the range of
            services, we provide, we aim to make a difference in the lives of
            those with disability. The goal is to make each of our participant’s
            lives easier, fairer and more involved by participating within their
            own communities. Zion Support Services is a company that was
            established with the sole aim of offering disability support
            services that puts the participant as a priority in creating
            opportunities, promoting independence and progression in a safe and
            non-discriminative environment.
          </span>
          <hr className="w-full my-[30px] h-[2px]  bg-gray-400" />
          <h1 className="md:text-6xl font-bolder  text-center text-[#D28F40] mb-3 text-3xl">
            Our Planning Process
          </h1>{" "}
          <span
            style={textStyle}
            className="md:font-[300] text-[15px] md:text-[17px] font-[500] md: leading-[30px]  md:tracking-wider "
          >
            Operation plans are developed in conjunction with Strategic plans to
            support the overarching goals and completion of the strategic plan
            along with identifying what is expected upon the following year.
            Operational plans are a one-year plan which will be created annually
            along with input of key personnel, staff, care recipients and their
            families. Upon our Strategic planning, we incorporate organisational
            management activity that is used to set priorities, focus energy and
            resources and strengthen operations to ensure that employees and
            other stakeholders are working toward common goals. Our organisation
            uses a 3-year Strategic plan approach Zion Support Services is a
            disability support services provider based in 8/70 Freeman road
            Durack.
            <br />
            At Zion Support Services we provide a range of disability support
            services. With the range of services, we provide, we aim to make a
            difference in the lives of those with disability. The goal is to
            make each of our participant’s lives easier, fairer and more
            involved by participating within their own communities. Zion Support
            Services is a company that was established with the sole aim of
            offering disability support services that puts the participant as a
            priority in creating opportunities, promoting independence and
            progression in a safe and non-discriminative environment.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
