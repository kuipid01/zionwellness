/* eslint-disable no-unused-vars */
import  { useEffect, useState } from 'react'

const Slider = () => {
    const [slideValue, setSlideValue] = useState(0)
    const [reverse, setReverse] = useState(false)
    const images  = [
        'https://img.freepik.com/free-photo/team-supporting-invalid-coworker_23-2148476555.jpg?w=1060&t=st=1688411445~exp=1688412045~hmac=c1bc6959666fe549f9447fb0eca78e04a383b776a07577aa8fb35fd9e9139ba5',
        'https://img.freepik.com/free-photo/disabled-young-athlete-wheelchair_23-2149212877.jpg?w=826&t=st=1688605401~exp=1688606001~hmac=c3075ecaceecd9776f940044ccf164d2535d08251bd142cffc416ee7ef63b241',
        'https://plus.unsplash.com/premium_photo-1663134272749-95163ecfff20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
        'https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
       
      
]
    let sliderStyle = {
        transform: `translateX(${slideValue}vw)`,
        transition: 'transform 0.7s ease-in-out',
        
        
    }
    const setSlideImage = (index) => {
setSlideValue(-index*100)
    }  
  
    //  useEffect(() => {


    //     if (slideValue ===-300) {
         
    //         setReverse(true)
    //     }
    //     if (slideValue ===0) {
    //         setReverse(false)
    //     }

    //     if (reverse) {
    //         const interval =  setInterval(() => {
               
    //              setSlideValue(p => p + 100)
                
    //             }, 2000);
    //             return () => {
    //                 clearInterval(interval)
    //               }
    //     }
    //     else{
    //         const interval =  setInterval(() => {
               
    //              setSlideValue(p => p - 100)
                
    //             }, 2000);

    //             return () => {
    //                 clearInterval(interval)
    //               }
    //     }

    
    
       
    //  }, [slideValue,reverse])
    
 

  return (
    <div className='w-full flex relative overflow-hidden h-[80vh] md:h-[85vh]'>
        <div style={sliderStyle} className='flex w-fit h-full'>
            {
                images.map((image) => <div key={image} className='w-screen  h-full'>
                    <img src={image} className='w-full h-full object-center object-cover' alt="image" />
                </div> )
            }
        </div>

<div className='flex h-full w-full opacity-40 left-0 bg-black bottom-0 absolute' >

</div>
<div className='flex gap-6 left-1/2 -translate-x-1/2 bottom-14 absolute'>
  {images.map((img,index) => <div key={img} onClick={() => setSlideImage(index)} className='w-[13px] cursor-pointer rounded-full h-[13px] bg-gray-300'></div> )}
</div>
<div className='w-full  absolute top-1/2 left-1/2 -translate-y-1/2 text-white flex justify-center text-center
flex-col -translate-x-1/2'>
<h1 className='text-[25px] md:text-[50px] font-[300] md:leading-[100px] md:font-[900]'>The wholesome care,   you <br className='flex md:hidden' /> deserve</h1>
<button className='md:w-fit w-[80%] px-[60px] py-4 mx-auto font-bold uppercase bg-[#D28F40] text-white rounded-md'>Learn More</button>
</div>

    </div>
  )
}

export default Slider