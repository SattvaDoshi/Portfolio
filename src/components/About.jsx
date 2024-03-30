import React from 'react'

const About = () => {
    return (
        <div className='w-full p-10 md:p-20 bg-[#CDEA68] rounded-tl-3xl text-black rounded-tr-3xl'>
            <h1 className='text-3xl md:text-5xl tracking-tight'>Sattva Doshi | B.tech in IT | MERN Developer</h1>
            <div className='w-full flex flex-col md:flex-row gap-8  border-t-2 md:border-t-0 border-[#3c5e17] mt-8'>
                <div className="w-full md:w-1/2 mt-8 md:mt-16">
                    <h1 className='text-3xl md:text-5xl'>About Me</h1>
                    <p className='mt-4 md:mt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestiae quibusdam alias aut neque ullam est earum similique. Et corrupti architecto facere tempora quo, laudantium incidunt atque tenetur nemo, iste amet earum nostrum? Culpa commodi quam repellendus, doloremque hic ipsum odio eos illum ipsa unde assumenda minus ex accusamus natus.</p>
                </div>
                <div className="w-full md:w-1/2 md:ml-32 h-[50vh] md:w-[60vh] mt-8 md:mt-0 rounded-3xl bg-red-500">

                </div>
            </div>
        </div>

    )
}

export default About