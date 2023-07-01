import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col justify-center relative items-center w-full h-full ">
      <img
        className="w-full h-full fixed  top-0 left-0 object-cover "
        src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
      <div className="w-full h-full fixed bg-black opacity-50 z-[555] top-0 left-0 object-cover "></div>
      <div className="h-fit z-[999] font-bold w-full py-32 md:py-52 bg-transparent">
        <h1 className="text-6xl text-red-600 text-center">About Us</h1>
      </div>
      <div className="w-full bg-white px-2 md:px-12 z-[888] h-full py-[40px] md:py-32">
        <p className="w-full font-light text-gray-700 md:w-[900px] leading-7 md:leading-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          eaque dolorem doloribus, tenetur est fuga esse reiciendis voluptatum
          labore, officia molestiae aut laborum et, asperiores veritatis
          deserunt veniam saepe assumenda velit praesentium rem eum! In enim
          est, eligendi nemo ipsum soluta. Odit ipsum labore ea nam consequatur
          optio dignissimos. Quas harum a dicta quisquam facere ab maiores
          tempora ipsum in? Quis, ratione iste magnam sapiente sint non quaerat
          laborum officia aperiam accusamus saepe voluptatum soluta dolor porro
          possimus dolorem sequi quisquam! Tempore dolor suscipit, aliquam ipsa
          at perspiciatis. Dignissimos ullam non nihil illum amet ut quos
          ratione fugit animi perspiciatis.
        </p>
      </div>
    </div>
  );
};

export default About;
