import { Button, IconButton } from '@mui/material'
import React from 'react'
import logo from '../image/logo.png'
import section1 from '../image/IMAGE.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function Navbar() {
  return (
    <div>
      <div className='flex flex-wrap justify-around bg-[#4A2B33] p-5 items-center'>
          <div className='flex space-x-5'>
            <li className='cursor-pointer list-none hover:text-white text-[#D27487]'>About</li>
            <li className='cursor-pointer list-none hover:text-white text-[#D27487]'>Menu</li>
            <li className='cursor-pointer list-none hover:text-white text-[#D27487]'>Info</li>
            <li className='cursor-pointer list-none hover:text-white text-[#D27487]'>Booking</li>
          </div>
          <div>
          <img className='cursor-pointer' src={logo} alt="logo" />
          </div>
          <div>
          <IconButton > <MailOutlineIcon sx={{color:'#D27487'}} /> </IconButton>
          <IconButton> <FacebookIcon sx={{color:'#D27487'}} /> </IconButton>
          <IconButton> <InstagramIcon sx={{color:'#D27487'}} /> </IconButton>
          </div>
      </div>
      <div className='bg-[#4A2B33] flex justify-center pb-5'>
        <img src={section1} alt="section1" />
      </div>
    </div>
  )
}

export default Navbar