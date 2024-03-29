import React from 'react'
import { motion } from 'framer-motion'

function Marque () {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="1" className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
  <div className="text text-white flex flex-col md:flex-row items-center justify-center md:justify-between whitespace-nowrap overflow-hidden border-t-2 border-b-2 border-zinc-300'">
     <motion.h1 initial={{x:"100%"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:10,repeat:Infinity}} className='text-5xl md:text-10xl text-[10vw] leading-none mb-4 pr-0 md:pr-20 text-center md:text-left md:mb-0'>
     I am Sattva Doshi
   </motion.h1>
    {/* You can uncomment and adjust the second motion.h1 element similarly */}
  </div>
</div>


  )
}

export default Marque