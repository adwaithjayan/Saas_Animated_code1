
import React from 'react'


import Insta from '../assets/insta.svg'
import  X from '../assets/x.svg'
import  Pin from '../assets/pin.svg'
import  Linkdin from '../assets/link.svg'
import  Yt from '../assets/yt.svg'


function Footer() {
  return (
    <footer id='about' className='bg-black text-[#bcbcbc] text-sm py-10 text-center'>
      <div className='container'>
        <div
        className='inline-flex relative before:h-full before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute'>
        <img src={require("../assets/logosaas.png")} alt="logo" height={40}  className='relative'/>
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <button>About</button>
          <button>Features</button>
          <button>Customers</button>
          <button>Pricing</button>
          <button>Help</button>
          <button>Careers</button>

        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <img src={X} alt="icon" />
          <img src={Insta} alt="icon" />
          <img src={Linkdin} alt="icon" />
          <img src={Pin} alt="icon" />
          <img src={Yt} alt="icon" />
          
        </div>
        <p className='mt-6 '>&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer