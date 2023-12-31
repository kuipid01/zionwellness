/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'

function SharedLayout() {
  
  return (
    <div>
        <Navbar />
            <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout