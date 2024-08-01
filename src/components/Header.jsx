import { ArrowRightIcon, Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

function Header() {
  return (
    <header className='sticky top-0 backdrop-blur-sm bg-transparent z-50'>
      <div className='flex justify-center items-center bg-black px-[110px] py-3.5 gap-2'>
        <p className='text-white font-normal text-sm tracking-tighter text-white/60 hidden lg:block '>This page is included in a free SaaS Website Kit.</p>
        <p className='text-white font-normal text-sm tracking-tighter flex items-center gap-2'>View the complete Kits <span><ArrowRightIcon className='w-2.5 text-white mt-1'/></span></p>
      </div>

      <div className='flex justify-between items-center p-5'>
        <img src={require("../assets/logosaas.png")} alt="logo" className='w-10 object-cover'/>
        <Bars3Icon className='w-5 sm:hidden' />

        {/** for tab screen */}
        
          <nav className='justify-evenly items-center gap-6 hidden sm:flex'>
              <a href='#about' className='navLinks'>
              About
              </a>
              <a href='#features'className='navLinks'>
                Features
              </a>
              <a href='#testimonials'className='navLinks'>
                Customers
              </a>
              <a href='#cta'className='navLinks'>
                Updates
              </a>
              <a href='#footer'className='navLinks'>
                Help
              </a>
              <button className='buttonclass btn-prime'>
                  Get for free
              </button>
          </nav>
        </div>
    </header>
  )
}

export default Header