import React, { useRef } from 'react'
import Leaf from '../assets/leaf.svg'
import Bell from '../assets/bell.svg'
import Marks from '../assets/mark.svg'
import Locks from '../assets/lock.svg'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { motion,useScroll, useTransform } from 'framer-motion'

function StartDoc() {
  const startRef= useRef(null);
 const {scrollYProgress}= useScroll({
    target:startRef,
    offset:['start end ','end start'],
  })
  const translateY =useTransform(scrollYProgress,[0,1],[150,-150]);
  return (
    <section id='features' ref={startRef} className='bg-gradient-to-b from-[#fff] to-[#d2dcff] pt-20 pb-10'>
      <div className='container'>
        <div className='max-w-[540px] mx-auto'>

        <div className='flex items-center justify-center'>

      <span className='transbutton'>Boost your productivity</span>
        </div>
      <h2 className='text-center md:text-[54px] md:leading-[60px] text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5'>A more effective way to track progress</h2>
      <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5'>Effortlessly turn your ideas into a fully funtional,responsive, no-code SaaS website in just minutes with the set of free components for Framer</p>
      
      </div>
      
      <div className='relative overflow-x-clip'>

      <img
       src={require("../assets/Product Image.png")}
       className='mt-10 w-full '
       alt="productimg" />
       <motion.img style={{translateY:translateY}} src={require("../assets/pyramid 1.png")} alt="pyramod" className='absolute hidden sm:inline-flex -top-24 -right-10 lg:top-32 ' />
       <motion.img style={{translateY:translateY}} src={require("../assets/torus 1.png")} alt="torus" className='absolute hidden sm:inline-flex top-44 -left-10 lg:bottom-36 lg:top-auto' />
       </div>
       <ul className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 m-auto px-20  items-center justify-center py-10 gap-20'>
        <li className='listItem '>
          <img src={Leaf} alt="icon" className='w-5'/>
          <h4 style={{fontWeight:'bold'}} className='listH4'>Integration ecosystem</h4>
          <p className='listP'>Track your progress and motivate<br/> your efforts everyday</p>
          <button className='buttonclass btn-text gap-1 p-0'>
          <span>Learn more 
          </span>
          <ArrowRightIcon className='w-5'/>
          </button>
        </li>
        <li className='listItem'>
          <img src={Marks} alt="icon" className='w-5'/>
          <h4 style={{fontWeight:'bold'}} className='listH4'>Goal setting and tracking</h4>
          <p className='listP'>Set and track goals with<br/>manageable task breakdowns.</p>
          <button className='buttonclass btn-text gap-1 p-0'>
          <span>Learn more 
          </span>
          <ArrowRightIcon className='w-5'/>
          </button>

        </li>


        <li className='listItem'>
          <img src={Locks} alt="icon" className='w-5'/>
          <h4 style={{fontWeight:'bold'}} className='listH4'>Secure data encryption</h4>
          <p className='listP'>Ensure your data’s safety with top-<br/>tier encryption.</p>
          <button className='buttonclass btn-text gap-1 p-0'>
          <span>Learn more 
          </span>
          <ArrowRightIcon className='w-5'/>
          </button>

        </li>


        <li className='listItem'>
          <img src={Bell} alt="icon" className='w-5'/>
          <h4 style={{fontWeight:'bold'}} className='listH4'>Customizable notifications</h4>
          <p className='listP'>Get alerts on tasks and deadlines<br/>that matter most.</p>
          <button className='buttonclass btn-text gap-1 p-0'>
          <span>Learn more 
          </span>
          <ArrowRightIcon className='w-5'/>
          </button>

        </li>


       </ul>
      </div>
    </section>
  )
}

export default StartDoc