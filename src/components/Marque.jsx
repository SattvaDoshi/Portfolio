import React from 'react'
import {motion} from 'framer-motion'

const Marque = () => {
  return (
    <div className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl '>
        <div className="text text-white flex whitespace-nowrap border-t-2 border-b-2 border-zinc-300">
            <motion.h1 className='text-10xl text-[10vw] leading-none mb-4 pt-10'>I am Sattva</motion.h1>
            <motion.h1 className='text-10xl text-[10vw] leading-none ml-5 mb-4 pt-10'>I am Sattva</motion.h1>

        </div>
    </div>
  )
}

export default Marque