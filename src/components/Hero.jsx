import { ArrowRightIcon } from '@heroicons/react/16/solid'
import React,{useRef} from 'react'
import { motion,useScroll, useTransform } from "framer-motion"

function Hero() {
  const heroRef =useRef(null);
  const {scrollYProgress}=useScroll({
    target:heroRef,
    offset:["start end ","end start"]
  });
  const translateY =useTransform(scrollYProgress,[0,1],[150,-150])
  return (
    <section ref={heroRef} className='md:pt-5 relative pl-5 lg:pl-20 pb-10 pt-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip '>
      <div className='container'>
        <div className='md:flex items-center'>
        <div className='md:w-[478px]'>

        <span className='transbutton'>Version 2.0 is here</span>
        <h1 className='text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001354} text-transparent bg-clip-text mt-6'>Pathway to production</h1>
        <p className='text-xl text-[#010d3e] tracking-tight mt-6'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.

        </p>
        <div className='flex gap-1 items-center mt-[30px]'>
          <button className='buttonclass btn-prime'>Get for free</button>
          <button className='buttonclass btn-text gap-1'>
          <span>Learn more 
          </span>
          <ArrowRightIcon className='w-5'/>
          </button>
        </div>
      </div>
      <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative '>
        <motion.img 
        animate={{
          translateY:[-30,30],
        }}
        transition={{
          repeat:Infinity,
          repeatType:'mirror',
          duration:2,
          ease:'easeInOut',
        }}
        src={require("../assets/Visual.png")} alt="cogimg" className='md:absolute md:h-full md:w-auto md:max-w-none lg:right-0'/>
      <motion.img 
      style={{
        translateY:translateY,
      }}
      src={require('../assets/cylinder 1.png')} alt="cylinder" width={220} height={220} className='hidden md:block right-32 md:absolute lg:left-20' />
      <motion.img 
      style={{
        translateY:translateY,
      }}
      src={require('../assets/half-torus 1.png')} alt="noodile" width={220} height={220} className='hidden lg:block  md:absolute -bottom-28 right-0' />
      </div>
      </div>
        </div>
    </section>
  )
}

export default Hero