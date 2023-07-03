
import { AiFillMail, AiFillPhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div className=" flex flex-col justify-center relative items-center w-full h-full ">
      <img
        className="w-full h-full fixed  top-0 left-0 object-cover "
        src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
      <div className="h-fit z-[999] font-bold w-full py-32 md:py-52 bg-transparent">
        <h1 className="text-6xl text-red-600 text-center">Contact Us</h1>
      </div>
      <div className="w-full z-[999] flex justify-center items-center bg-white">
        <div className="text-center z-[999] w-[80%] text-black gap-5 flex flex-col justify-center items-center">
          <h1 className="md:text-5xl text-[35px] text-left md:py-8 py-5 font-[500]">Let&apos;s Get In Touch </h1>
          <div className="w-full pb-7 flex md:flex-row flex-col gap-3 md:gap-12 justify-between">
            <div className="flex p-3 flex-1 gap-3 flex-col">
              <div className="flex text-[20px]  items-center gap-3">
                <hr className="h-[40px] w-[2px] bg-purple-800 " />
                <h1 className="md:text-5xl text-2xl">Message</h1>
              </div>
              <div className="flex md:flex-row flex-col  w-full  gap-5">
                <input
                  className="p-2 flex-1 text-gray-400 border border-gray-400"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className="p-2 flex-1 text-gray-400 border border-gray-400"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex w-full gap-5">
                <input
                  className="p-2 w-full text-gray-400 border border-gray-400"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="w-full">
                <textarea
              
                  name=""
                  id=""
                  cols="20"
                  rows="10"
                  className="p-2   resize-none w-full text-gray-400 border border-gray-400"
                ></textarea>
              </div>
              <button className="w-full h-fit py-4 text-white font-bold uppercase bg-purple-800">
                Submit
              </button>
            </div>
            <div className="flex-1 px-3  justify-start flex flex-col">
              <div className="w-full  gap-8 flex flex-col">
                <div className="flex md:-mt-4 text-[20px] items-center gap-3">
                  <hr className="h-[40px] w-[2px] bg-purple-800 " />
                  <h1 className="md:text-5xl text-[35px] text-left md:py-8 py-5">Our Contact</h1>
                </div>
                <div className="flex h-[60px] gap-3">
                  <div className="w-[60px] flex justify-center items-center h-full p-3 bg-purple-800 rounded-full ">
                    <AiFillMail className="text-white text-2xl" />{" "}
                  </div>

                  <div className="flex gap-1 justify-between flex-col items-start">
                    <h1 className="text-xl font-[400]">Email Address</h1>
                    <p className="text-[17px] text-gray-700 font-light  leading-6">abc@xyz.com.au</p>
                  </div>
                </div>
                <div className="flex h-[60px] gap-3">
                  <div className="w-[60px] flex justify-center items-center h-full p-3 bg-purple-800 rounded-full ">
                    <AiFillPhone className="text-white text-xl" />{" "}
                  </div>
                  <div className="flex gap-1 justify-between flex-col items-start">
                    <h1  className="text-xl font-[400]">Call Us</h1>
                    <p className="text-[17px] text-gray-700 font-light leading-6">0410546651</p>
                  </div>
                </div>
                <div className="flex items-center mt-8 gap-3">
                  <hr className="h-[40px] w-[2px] bg-purple-800 "  />
                  <h1 className="text-[25px] leading-6">Zionwellness.com.au</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
