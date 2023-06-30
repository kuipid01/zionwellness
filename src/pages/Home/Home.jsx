import React from 'react'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'
import {FaQuoteLeft,FaInstagram,FaFacebook} from 'react-icons/fa'
import WeareHer from '../../components/WeareHer'
import Footer from '../../components/Footer'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <div className='md:px-[50px] my-12  p-[5px] py-14 relative w-[80%] mx-auto h-screen md:h-[70vh] gap-[50px] items-center flex md:flex-row flex-col justify-between'>
                <FaQuoteLeft className='md:text-4xl text-2xl text-gray-300 absolute top-3 left-0 md:top-20'/>
                <div className='flex-1'>
                    <p className='font-[300] max-w-[500px] text-[20px] md:text-[25px] text-gray-700 text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat tempore iste quas suscipit voluptatibus beatae iure dolorem mollitia quam! Eaque,
                        sit corrupti? Incidunt mollitia itaque voluptatum voluptate. Id, aspernatur.
                    </p>
                </div>
                <div className='h-[400px] w-full md:w-[500px]'>
                    <img src="https://img1.wsimg.com/isteam/stock/4433/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:853" className='w-full h-full object-cover' alt="" />
                </div>
            </div>
            <WeareHer/>
            <div className='w-full my-[10vh] flex flex-col gap-12 items-center justify-center h-fit md:h-[40vh] bg-red-800 text-white'>
                <h1 className='font-[800] text-[35px] mt-12 md:text-[55px] '>Online Booking</h1>
<div className='md:w-[60%] pb-[3rem] px-[30px] w-full  mx-auto flex md:flex-row flex-col gap-3 justify-between'>
    <div className='flex flex-col '>
        <p className='text-[25px] font-light '>Professional Consultation</p>
        <small className='text-[17px] font-light'> 1hr <span></span> Contact Us </small>
    </div>
    <button className='w-fit h-fit px-4 py-2 bg-white text-black font-[400]'>BOOK</button>
</div>
            </div>
            {/* //contactus section */}
            <div className='w-full my-[10vh] flex flex-col gap-8 items-center justify-center h-[35vh] text-red-800 bg-white'>
                <h1 className='font-[800] text-center text-[35px] mt-12 md:text-[55px] '>Connect with Booking</h1>
<div className='w-fit gap-[3rem] text-4xl pb-[3rem] mx-auto flex justify-between'>
   <FaFacebook/> <FaInstagram/>
   </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home