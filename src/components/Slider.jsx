import  { useEffect, useState } from 'react'

const Slider = () => {
    const [slideValue, setSlideValue] = useState(0)
    const [reverse, setReverse] = useState(false)
    const images  = [
        'https://plus.unsplash.com/premium_photo-1663134272749-95163ecfff20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
          'https://images.unsplash.com/photo-1599817086997-131b19b42f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
'https://images.unsplash.com/photo-1469573054742-64da3f2527fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',

'https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80']
    let sliderStyle = {
        transform: `translateX(${slideValue}vw)`,
        transition: 'transform 0.7s ease-in-out',
        
        
    }
    const setSlideImage = (index) => {
setSlideValue(-index*100)
    }  
  
     useEffect(() => {


        if (slideValue ===-300) {
         
            setReverse(true)
        }
        if (slideValue ===0) {
            setReverse(false)
        }

        if (reverse) {
            const interval =  setInterval(() => {
               
                 setSlideValue(p => p + 100)
                
                }, 2000);
                return () => {
                    clearInterval(interval)
                  }
        }
        else{
            const interval =  setInterval(() => {
               
                 setSlideValue(p => p - 100)
                
                }, 2000);

                return () => {
                    clearInterval(interval)
                  }
        }

    
    
       
     }, [slideValue,reverse])
    
 

  return (
    <div className='w-full flex relative overflow-hidden h-[80vh] md:h-[85vh]'>
        <div style={sliderStyle} className='flex w-fit h-full'>
            {
                images.map((image) => <div key={image} className='w-screen  h-full'>
                    <img src={image} className='w-full h-full object-cover' alt="image" />
                </div> )
            }
        </div>

<div className='flex h-full w-full opacity-10 left-0 bg-black bottom-0 absolute' >

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