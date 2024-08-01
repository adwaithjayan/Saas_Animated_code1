import React from 'react'
import { motion } from 'framer-motion'
export default function Component({tesimonials,clas,duration}) {
  return(
    <div className={`${clas}`}>
        <motion.div className='pb-6 flex flex-col gap-5'
        animate={{
          translateY:'-50%',
        }}
        transition={{
          repeat:Infinity,
          ease:'linear',
          repeatType:'loop',
          duration:duration || 10,
        }}>
    {[...new Array(2).fill(0).map((_,index) => (
      <React.Fragment key={index}>
    {tesimonials.map(({text,imageSrc,name,username})=>{
            return(
              <div key={username} className='max-w-xs w-full p-10 rounded-3xl shadow-[0_7px_14px_#eaeaea] border border-[#f1f1f1]'>
                <p>{text}</p>
                <div className='flex flex-row items-center gap-2 mt-5'>
                  <img src={imageSrc} alt="userimage" className='w-10 h-10 rounded-full'/>
                  <div className='flex flex-col'>
                    <h5 className='font-medium tracking-tight leading-5'>{name}</h5>
                    <span className='leading-5 tracking-tight'>{username}</span>
                  </div>
                </div>
              </div>
            )
          })}
      </React.Fragment>
    ))]}
    </motion.div>
    </div>
  )
}
