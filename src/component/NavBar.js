import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    
  return (
    <div className='text-white absolute top-0 z-50 h-16 w-full bg-black opacity-60 '>
        <div className='w-3/4 flex items-center justify-between mx-auto mt-1'>
        {/*image wrapped inside linktag to navigate to homepage */}
            <Link to={"/homepage"}>
                <img src='https://www.houseofmarktech.com/assets/HOM%20logo-CUW_Wu4h.png' width={120}/>
            </Link>
            {/* // hyperlinks */}
            <div className='flex gap-10 '>
                <a href="#our-services" className='text-md font-semibold hover:underline'>Our Services</a>
                <a href="#pricing-table" className='text-md font-semibold hover:underline'>Pricing Table</a>
                <a href="#users" className='text-md font-semibold hover:underline'>Users</a>
                <a href="#contact-us" className='text-md font-semibold hover:underline'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default NavBar