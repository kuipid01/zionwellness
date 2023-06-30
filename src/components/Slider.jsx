import React, { useEffect, useState } from 'react'

const Slider = () => {
    const [slideValue, setSlideValue] = useState(0)
    const images  = [
        'https://plus.unsplash.com/premium_photo-1663134272749-95163ecfff20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
          'https://images.unsplash.com/photo-1599818497948-eea9a2698ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
'https://images.unsplash.com/photo-1478061653917-455ba7f4a541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1150&q=80',

'https://images.unsplash.com/photo-1581090122319-8fab9528eaaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80']
    let sliderStyle = {
        transform: `translateX(${slideValue}vw)`,
        transition: 'transform 0.4s ease-in-out',
        
    }
    const setSlideImage = (index) => {
setSlideValue(-index*100)
    }
    // useEffect(() => {
    //     setInterval(() => {
    //         if (slideValue===0) {
                
    //             setSlideValue( ( images.length-1 )* -100)
    //         }
    // else{
    //     setSlideValue(slideValue+100)
    // }
           
           
    //     }, 5000);
    
    //   return () => {
    //     clearInterval()
    //   }
    // }, [])
    
   

  return (
    <div className='w-full flex relative overflow-hidden h-[80vh] md:h-[85vh]'>
        <div style={sliderStyle} className='flex w-fit h-full'>
            {
                images.map((image) => <div className='w-screen  h-full'>
                    <img src={image} className='w-full h-full object-cover' alt="image" />
                </div> )
            }
        </div>

<div className='flex h-full w-full opacity-20 left-0 bg-black bottom-0 absolute' >

</div>
<div className='flex gap-6 left-1/2 -translate-x-1/2 bottom-14 absolute'>
  {images.map((img,index) => <div key={img} onClick={() => setSlideImage(index)} className='w-[13px] cursor-pointer rounded-full h-[13px] bg-gray-300'></div> )}
</div>
<div className='w-full  absolute top-1/2 left-1/2 -translate-y-1/2 text-white flex justify-center text-center
flex-col -translate-x-1/2'>
<h1 className='text-[30px] md:text-[60px] md:leading-[100px] font-[900]'>Your Wellness,   Our <br className='flex md:hidden' /> Priority</h1>
<button className='md:w-fit w-[70%] px-10 py-4 mx-auto font-bold uppercase bg-red-900'>Learn More</button>
</div>

    </div>
  )
}

export default Slider