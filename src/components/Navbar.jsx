import React, { useEffect, useState } from 'react'
import {AiOutlineShoppingCart,AiOutlineMenu} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
const Navbar = () => {
    const [navLinks, setNavLinks] = useState([
        {
            id: 1,
            name: "Home",
            links: true
        },
        {
            id: 2,
            name: "Services",
            links: false
        },
        {
            id: 3,
            name: "About us",
            links: false
        },
        {
            id: 4,
            name: "Careers",
            links: false
        },
        {
            id: 5,
            name: 'Contact Us',
            links: false
        }

    ])
    const [navShow, setNavShow] = useState(false)

    const changeLink = (id) => {

        const newLinks = navLinks.map((link) => ({
            ...link,
            links: id+1 === link.id ? true : false

        }

        ))

        setNavLinks(newLinks)
    }
    const isActive = () => {
        window.scrollY===0 ? setNavShow(false) :  setNavShow(true) 
    }
    useEffect(() => {
    window.addEventListener('scroll', isActive)
    
      return () => {
        window.removeEventListener('scroll', isActive)
      }
    }, )
    console.log(navShow)
    return (
        <div className={`w-full sticky top-0 left-0 z-[9999] transition-all  flex justify-center bg-white  items-center ${ navShow ? 'h-[15vh] ' : 'h-[20vh] ' } `}>
            <nav className='w-[80%] flex justify-between h-full items-center'>
                <div>
                    ZIONS HEALTH SERVICES
                </div>
                <AiOutlineMenu className='text-2xl md:hidden  font-[900] text-gray-500'/>
                <div className='hidden  w-fit h-full md:flex items-center justify-center'>
                    <ul className='flex h-full  items-center gap-5 uppercase text-lg font-[400]'>{
                        navLinks.map((links, index) => <li onClick={() => changeLink(index)} className={`transition-all ${links.links && 'border-b-2 text-red-400 border-red-400'} hover:text-red-300 cursor-pointer `} key={links.id}>{links.name}</li>)
                    }
<li className='w-[2px] bg-gray-400 text-gray-400 h-[20px]'></li>
                        <div className='flex text-2xl gap-5 '>
<AiOutlineShoppingCart className='cursor-pointer hover:text-red-300'/>
<BiUser className='cursor-pointer hover:text-red-300'/>

                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar