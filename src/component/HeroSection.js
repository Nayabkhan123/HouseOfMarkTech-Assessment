import React, { useEffect, useRef, useState } from 'react'
import hero from '../assests/50.jpg'
import mobile from '../assests/mobile.jpg'
import {IoIosArrowDown} from 'react-icons/io'
import { Link } from 'react-router-dom' 
const HeroSection = () => {
  return (
    <div className='h-full w-full'>
        <div className='absolute top-0 bottom-0 h-full w-full -z-10 overflow-y-hidden'>
            {/* first I thought to set image but video looks amazing so i go with it 😊 */}
                {/* <img 
                    loading='lazy'
                    src={width>768 ? hero:mobile}
                    className='bg-cover w-full h-full'
                /> */}
                <video autoPlay loop muted
                    src="https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/najvbvtrg9jqn2eu2sqw.mp4"
                    className='object-cover h-full w-full g-auto overflow-y-hidden'>
                </video>
            </div>
        <div className='z-1 flex flex-col items-center justify-center h-screen shadow-lg'>
            <h2 className='text-[4rem]  font-bold text-white text-center'>Welcome to Our Service</h2>
            <p className='text-2xl font-semibold text-center text-white'>Scroll down to see more</p>
            <a href='#our-services'><IoIosArrowDown className='text-white mt-3 cursor-pointer' size={50}/></a>
        </div>
        
        
    </div>
  )
}

export default HeroSection