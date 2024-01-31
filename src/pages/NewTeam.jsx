const NewTeam = () => {
  let textStyle = {
    fontFamily: " Jost, sans-serif",
  };
  return (
    <div className=" min-h-screen  flex flex-col justify-center relative items-center  h-full  w-full">
      <img
        className="w-full h-full fixed  top-0 left-0  object-contain object-center md:object-cover "
        src="https://i.pinimg.com/736x/0e/cc/d5/0eccd583cbf5e5226e6d61c6d3092088.jpg"
      />
      <div className="w-full h-full fixed bg-black opacity-50 z-[555] top-0 left-0 object-cover "></div>
      <div className="h-fit z-[999] font-bold w-full py-32 md:py-52 bg-transparent">
        <h1 className="text-6xl text-[#D28F40] text-center"> Our Team </h1>
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
      </div>
    </div>
  );
};

export default NewTeam;
