import React from 'react'
import { motion } from 'framer-motion'

function Youneed() {
  return (
    <section className='py-16 '>
      <div className='container '>
        <div className='flex flex-row items-center justify-center'>

          <div className='flex items-center flex-col gap-5 max-w-[540px] justify-center px-12 sm:px-0'>
            <button className='transbutton'>
              Everything you need
            </button>
            <h3 className='text-3xl tracking-tighter font-semibold text-center'>
              Streamlines for easy management
            </h3>
            <p className='font-normal text-xl tracking-tight text-center'>
            Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-20 gap-5 lg:flex-row'>

          <div className='border border-[#1B1B1B]/8 rounded-[20px] flex flex-col items-center w-max gap-3 p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <motion.img whileHover={{
              scale:1.1,
            }}
            transition={{
              duration:1,
              ease:"easeInOut",
              
            }} src={require("../assets/shape.png")} alt="illustration" className='' />
            
              <h5 className='text-2xl tracking-tight font-bold'>Integration ecosystem</h5>
              <p className='font-normal text-base tracking-tight text-center'>Enhance your productivity by connecting<br/> with your favorite tools, keeping all your<br/>
              essentials in one place.</p>
            
          </div>

          <div className='border border-[#1B1B1B]/8 rounded-[20px] flex flex-col items-center w-max gap-3 p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <motion.img whileHover={{
              scale:1.1,
            }}
            transition={{
              duration:1,
              ease:"easeInOut",
              
            }} src={require("../assets/cube-helix 1.png")} alt="illustration" className='' />
            
              <h5 className='text-2xl tracking-tight font-bold'>Goal setting and tracking</h5>
              <p className='font-normal text-base tracking-tight text-center'>Define and track your goals, breaking down<br/> objectives into achievable tasks to keep your<br/> targets in sight.</p>
            
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Youneed