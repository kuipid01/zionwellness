import React from 'react'

const WeareHer = () => {
    const arr = [1,2,3,4,5,6,7,8,9]
  return (
    <div className='w-full px-[30px] mt-32  h-fit'>
        <div className='md:w-[80%] w-full first-letter: mx-auto min-h-screen flex flex-col items-center h-fit'>
<h1 className='md:text-5xl text-3xl w-[90%] font-[800] text-center md:font-bold text-red-800'>We are here for you</h1>
    <div className='flex mt-[3rem] gap-[2rem] flex-row flex-wrap'> {
        arr.map(card => <div className='md:w-[30%] w-full flex flex-col items-center h-fit'>
            <p className='mb-[1rem] font-[200] text-red-800 text-3xl'>Lorem ipsum dor</p>
            <img className='w-full object-cover h-[250px] mb-[1rem]' src="https://img1.wsimg.com/isteam/stock/4085/:/cr=t:14.58%25,l:0%25,w:100%25,h:70.83%25/rs=w:776,h:388,cg:true" alt="" />
       <button className='w-fit font-bold uppercase h-fit py-3 px-6 text-white bg-red-800'>find out more </button>
        </div> )
        } </div>
        </div>
    </div>
  )
}

export default WeareHer