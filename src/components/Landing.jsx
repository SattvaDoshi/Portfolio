import React from 'react'

const Landing = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="text mt-32 px-20">
            <div className="masker">
                <h1 className='text-8xl leading-[5vw] tracking-tighter font-semibold text-white'>WEB-DEVELOPER</h1>
            </div>
            <div className="masker">
                <h1 className='text-8xl leading-[5vw]  tracking-tighter font-semibold text-white'>THAT EXCEEDS</h1>
            </div>
            <div className="masker">
                <h1 className='text-8xl leading-[5vw] tracking-tighter font-semibold text-white'>YOUR EXPECTATION</h1>
            </div>
            <div className="border-t-2 mt-32 border-zinc-700 flex justify-between">
                {["For Private","lorem we is about"].map((item,idx)=>(
                    <p className='text-md mt-5 font-light tracking-tight leading-none text-white'>{item}</p>
                ))}

                <div className="px-4 py-2 mt-5 rounded-full border-[1px] text-white border-zinc-500">Contact Me</div>
            </div>
        </div>
    </div>
  )
}

export default Landing