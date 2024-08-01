import { CheckIcon } from '@heroicons/react/16/solid';
import React from 'react'
import { motion } from 'framer-motion';

const pricetiers =[
  {
    title:"Free",
    monthlyPrice:0,
    buttonText:"Get started for free",
    popular:false,
    inverse:false,
    features:[
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title:"Pro",
    monthlyPrice:9,
    buttonText:"Sign up now",
    popular:true,
    inverse:true,
    features:[
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title:"Business",
    monthlyPrice:19,
    buttonText:"Sign up now",
    popular:false,
    inverse:false,
    features:[
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];
function Buy() {
  return (
    <section className='py-10'>
      <div className="container">
        <div className='flex flex-col items-center px-5 sectionHeading'>
          <span className="transbutton">
            Boost your productivity
          </span>
          <h2 className=' mt-5 text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text'>A more effective way to track progress</h2>
          <p className='text-center mt-5  text-[22px] leading-[30px] tracking-tight text-[#010d3e]'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
        </div>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
          {pricetiers.map(({title,monthlyPrice,buttonText,popular,inverse,features})=>{
            return(
              <div key={title}
               className={`max-w-xs w-full p-10 rounded-3xl shadow-[0_7px_14px_#eaeaea] border border-[#f1f1f1] ${inverse && 'text-white bg-black border border-black'}`}>
                <div className='flex justify-between'>

                    <h4 className={`text-lg font-bold text-black/50 ${ inverse && '!text-white/60'}`}>{title}</h4>
                    {popular && (

                   
                    <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                    <motion.span 
                    animate={{
                      backgroundPositionX:'-100%',
                    }}
                    transition={{
                      repeat:Infinity,
                      ease:'linear',
                      repeatType:'loop',
                      duration:2,
                    }}
                    className='bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)] [background-size:200%] text-transparent bg-clip-text'> 
                    Popular
                      </motion.span>
                      </div>
                       )}
                </div>
                    <div className='flex items-baseline gap-1 mt-[30px]'>
                      <span className='text-4xl font-bold tracking-tighter leading-none'>${monthlyPrice}</span>
                      <span className='tracking-tight font-bold text-black'>/monthly</span>
                    </div>
                    <button className={`buttonclass btn-prime w-full mt-[30px] ${inverse && 'text-black bg-white'}`}>{buttonText}</button>
                    <ul className='flex flex-col gap-5 mt-8'>
                      {features.map((feature,index) =>(
                       <li key={index} className='text-sm flex items-center gap-4'>
                        <CheckIcon className='h-6 w-6'/>
                        <span>{feature}</span>
                       </li> 
                      ))}
                    </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Buy