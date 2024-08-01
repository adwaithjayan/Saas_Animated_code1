import React from 'react'
import { motion } from "framer-motion"

function Brands() {
  return (
    <div className='flex items-center justify-center py-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
      <motion.div className='flex gap-14 flex-none pr-14' animate={{
        translateX:'-20%',
      }}
      transition={{
        duration:15,
        ease:"linear",
        repeat:Infinity,
        repeatType:'loop'
      }}>

        <img className='image' src={require("../assets/logo1.png")}  alt="logo" />
      
      
        <img className='image' src={require("../assets/logo2.png")}  alt="logo" />
      
      
        <img className='image' src={require("../assets/logo3.png")}  alt="logo" />
      
      
        <img className='image' src={require("../assets/logo4.png")}  alt="logo" />
      
      
        <img className='image' src={require("../assets/logo5.png")}  alt="logo" />
      
      
        <img className='image' src={require("../assets/logo6.png")}  alt="logo" />
      

{/** duplicate */}

        <img className='image' src={require("../assets/logo1.png")}  alt="logo" />
      
      
        <img className='image' src={require("../assets/logo2.png")}  alt="logo" />
      
      
        <img className='image' src={require("../assets/logo3.png")}  alt="logo" />
      
      
        <img className='image' src={require("../assets/logo4.png")}  alt="logo" />
      
      
        <img className='image' src={require("../assets/logo5.png")}  alt="logo" />
      
      
        <img className='image' src={require("../assets/logo6.png")}  alt="logo" />
      


      </motion.div>
    </div>
  )
}

export default Brands