import React from 'react'


import Component from './component'

const tesimonials = [
  {
    text:"Our team’s productivity has skyrocketed since we started using this tool. ",
    imageSrc:require("../assets/Ellipse1.png"),
    name:"John Smith",
    username:"@jjsmith",
  },
  {
    text:"As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc:require("../assets/Ellipse2.png"),
    name:"Alex Rivera",
    username:"@jamitetechguru00",
  },
  {
    text:"The customizability and integration capabilities of this app are top-notch.",
    imageSrc:require("../assets/Ellipse3.png"),
    name:"Riley Smith",
    username:"@rileyssmith",
  },

]
function Testimonials() {
  return (
    <section id='testimonials' className='py-10 pb-20 mt-5 bg-white'>
      <div className="container">
        <div className='flex flex-col items-center'>
            <span className="transbutton">
              Testimonials
            </span>
            <h2 className=' mt-5 text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text'>What our users says</h2>
        </div>
        <div className='flex flex-row justify-center items-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden'>
         
          <Component tesimonials={tesimonials} />
           <Component clas="hidden md:block" tesimonials={tesimonials} duration={15}/>
           <Component clas="hidden lg:block" tesimonials={tesimonials} duration={20}/>
          
        </div>
      </div>
    </section>
  )
}

export default Testimonials