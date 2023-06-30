import React from 'react'
import { FaCopyright } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='w-full flex justify-center items-center bg-black h-fit py-5'>
            <p className='text-gray-500 w-fit font-bold text-base md:text-lg items-center flex mx-auto text-center'>
                Copyright &copy; Devkuipid |   Inspired <br className='flex md:hidden' />  by Major Wellness Center - All Rights Reserved
            </p>
        </div>
    )
}

export default Footer