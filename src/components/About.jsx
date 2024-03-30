import React from 'react'
import photo from '/photo.jpg'

const About = () => {
    return (
        <div className='w-full p-10 md:p-20 bg-[#CDEA68] rounded-tl-3xl text-black rounded-tr-3xl'>
            <h1 className='text-3xl md:text-5xl tracking-tight'>Sattva Doshi | B.tech in IT | MERN Developer</h1>
            <div className='w-full flex flex-col md:flex-row gap-8  border-t-2 md:border-t-0 border-[#3c5e17] mt-8'>
                <div className="w-full md:w-1/2 mt-8 md:mt-16">
                    <h1 className='text-3xl md:text-5xl'>About Me</h1>
                    <p className='mt-4 md:text-xl  md:mt-10'>Greetings! I'm Sattva Doshi, midway through my B.Tech journey, 
                    specializing in MERN stack development. With a relentless work ethic and a genuine hunger for knowledge, 
                    I embrace challenges as opportunities for growth. Crafting meaningful digital solutions fuels my passion, 
                    and I'm dedicated to honing my skills to deliver impactful results.</p>
                </div>
                <div className="w-full md:w-1/2 md:ml-16 h-[50vh] md:w-[60vh] mt-8 md:mt-0  ">
                    <img className=' md:w-1/2 md:ml-16 h-[50vh] md:w-[60vh] rounded-3xl' src={photo} alt="" />
                </div>
            </div>
        </div>

    )
}

export default About