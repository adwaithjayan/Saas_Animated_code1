import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'


import { ArrowRightIcon } from '@heroicons/react/16/solid'

function CTA() {
  const sectionRef =useRef(null);
 const  {scrollYProgress} = useScroll({
    target:sectionRef,
    offset:['start end','end start']
  })
  const translateY =useTransform(scrollYProgress,[0,1],[150,-150]);
  return (
    <section id='cta' ref={sectionRef} className='pb-10 pt-20 relative bg-gradient-to-b from-white to-[#d2dcff] overflow-x-clip'>
      <div className="container flex items-center justify-center">
        <div className='flex flex-col items-center  max-w-[540px] px-5 md:px-0'>
          <h3 className=' mt-5 text-center text-2xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text'>Sign up for free today</h3>
          <p className='text-center mt-5  text-[22px] leading-[30px] tracking-tight text-[#010d3e]'>
          Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
          <motion.img style={{translateY:translateY}} src={require("../assets/helix2 1.png")} alt="helix" width={360} 
          className='absolute  -right-[12rem] bottom-0 hidden md:block lg:right-0'/>
          <motion.img style={{translateY:translateY}} src={require("../assets/emojistar 1.png")} alt="helix" width={360}
          className='absolute -left-[13.5rem] -top-20 hidden md:block lg:left-0'/>
          <div className='flex gap-1 items-center mt-[30px]'>
          <button className='buttonclass btn-prime'>Get for free</button>
          <button className='buttonclass btn-text gap-1'>
          <span>Learn more 
          </span>
          <ArrowRightIcon className='w-5'/>
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default CTA