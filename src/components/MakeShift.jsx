/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"


const MakeShift = () => {
    const arr1 =[1,2,3,4,5,6,7,8,9,10,12,]
    const [displaceValue, setDisplaceValue] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const [index, setIndex] = useState(1)
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth<= 768)
        }
        handleResize();
    
        window.addEventListener('resize',handleResize);    
        return () => {
            window.removeEventListener('resize',handleResize);    
        };
    }, [])
    let slide = {
        transform :` translateX(${displaceValue}px)`,
        transition : 'transform 0.5s ease-in-out'
    }
console.log(isMobile)
const handleLeft = () => {
    if (isMobile && index >= arr1.length-1  ) return
   if (!isMobile && index >= arr1.length -   5  ) return
    setIndex(prev =>  prev + 1 )
        setDisplaceValue(prev => isMobile ? prev - 292 : prev  - 196 )
    
 

}
const handleRight = () => {
    if (index=== 0 ) return
    setIndex(prev =>  prev - 1 )
    setDisplaceValue(prev => isMobile ? prev + 292 : prev   + 196 )

}

   const checkIndex = ( id) =>  { 
    setIndex(id )
        setDisplaceValue( isMobile ? id * -292 :  id * -196   )
   }
   console.log(index,displaceValue)
  return (
    <div className="relative flex flex-col bg-red-900 justify-center items-center pt-[60px] w-screen h-fit md:h-[85vh]">
<div className="w-[86%] h-1/2  bg=teal-600 mx-auto my-auto overflow-x-hidden ">
<div style={slide} className={`w-fit   h-full my-auto flex  flex-row gap-3`}>
{arr1.map((arr) =>  <div key={arr}  className={`w-[280px] h-[200px] md:w-[184px] md:h-full rounded-xl bg-purple-300`}>  {arr} </div> )}
</div>
</div>
<div className="flex gap-2 my-6 md:absolute md:left-1/2 md:-translate-x-1/2 bottom-10"> {arr1.map((arr,index) =>  <div key={arr} onClick={ () =>  checkIndex(index)}  className={`w-[10px] cursor-pointer h-[10px] rounded-full bg-green-300`}>   </div> )} </div>
<div className="flex mb-6 w-[86%] md:w-full  mx-auto  justify-between px-[4rem] md:absolute md:top-1/2 md:-translate-y-1/2">
<h1 onClick={handleLeft} className="md:absolute  p-2 bg-green-600 left-[40px] cursor-pointer "  >left</h1>
<h1 onClick={handleRight} className="md:absolute  p-2 bg-green-600 right-[40px] cursor-pointer" >Right</h1>
</div>

    </div>
  )
}

export default MakeShift