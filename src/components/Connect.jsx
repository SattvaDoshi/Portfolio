import React, { useEffect, useState } from 'react'

const Contact = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    }, [])


    return (
        <div className='w-full h-screen p-20 mt-20'>
            <div className="w-full relative h-full bg-blue-300 rounded-2xl ">
                <div className=" absolute flex gap-10  left-1/2 top-1/3 -translate-x-[50%] -translate-y-[50%] ">
                    <div className="w-[14vw] h-[14vw] bg-zinc-100 flex justify-center items-center rounded-full ">
                        <div className="w-2/3 h-2/3 relative bg-zinc-800  rounded-full">
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line absolute w-full h-8 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
                                <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[14vw] h-[14vw] bg-zinc-100 flex justify-center items-center rounded-full ">
                        <div className="w-2/3 h-2/3 relative bg-zinc-800  rounded-full">
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line absolute w-full h-8 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
                                <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="socials absolute left-[50%] top-[80%] flex flex-col items-center -translate-x-[50%] -translate-y-[50%] ">
                    <h1 className='text-5xl text-zinc-700 '>Let's Connect</h1>
                    <div className="social-links gap-20 flex relative left-[50%]  -translate-x-[50%] -translate-y-[50%] mt-16">
                        <a className='no-underline text-zinc-700 border-2 py-2 px-4 rounded-2xl border-zinc-700' target='_blank' href="https://twitter.com/Sattva_Doshi">Twitter</a>
                        <a className='no-underline text-zinc-700 border-2 py-2 px-4 rounded-2xl border-zinc-700' target='_blank' href="https://www.instagram.com/__sattva__10/">Instagram</a>
                        <a className='no-underline text-zinc-700 border-2 py-2 px-4 rounded-2xl border-zinc-700' target='_blank' href="https://github.com/SattvaDoshi">Github</a>
                        <a className='no-underline text-zinc-700 border-2 py-2 px-4 rounded-2xl border-zinc-700' target='_blank' href="https://www.linkedin.com/in/sattva-doshi-37b0851bb/">Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact