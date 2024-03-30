import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const Landing = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(textRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-[70vh] md:h-screen bg-zinc-900 pt-1'>
    <div className="text mt-20 md:mt-32 px-5 md:px-20">
      <div className="masker">
        <h1 className='text-4xl md:text-8xl leading-[5vw] md:leading-[6vw] tracking-tighter font-semibold md:mt-2 text-white text-center md:text-left mt-8'>
          WEB-DEVELOPER
        </h1>
        <h1 className='text-4xl md:text-8xl leading-[5vw] md:leading-[6vw] tracking-tighter font-semibold md:mt-2 text-white text-center md:text-left mt-8'>
          THAT EXCEEDS 
        </h1>
        <h1 className='text-4xl md:text-8xl leading-[5vw] md:leading-[6vw] tracking-tighter font-semibold md:mt-2 text-white text-center md:text-left mt-8'>
          YOUR EXPECTATION
        </h1>
      </div>
    </div>
    <div className="border-t-2 mt-16 md:mt-32 px-5 md:px-20 border-zinc-700 flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div className="mb-4 md:mb-0">
        <div className="px-6 py-3 md:px-8 md:py-4 rounded-full border-[1px] mt-16 text-base md:text-lg text-white border-zinc-500 text-center md:text-left">
          Contact Me
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Landing