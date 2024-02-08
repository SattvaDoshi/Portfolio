import React from 'react'

const About = () => {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl text-black rounded-tr-3xl'>
            <h1 className='text-[3vw] tracking-tight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure perferendis exercitationem esse vitae corrupti blanditiis ea ut aliquam.</h1>        
        
            <div className='w-full flex gap-8 border-t-[2px] mt-8 border-[#3c5e17]'>
                <div className="w-1/2 mt-32">
                    <h1 className='text-5xl'>About Me</h1>
                    <p className='pr-20 mt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestiae quibusdam alias aut neque ullam est earum similique. Et corrupti architecto facere tempora quo, laudantium incidunt atque tenetur nemo, iste amet earum nostrum? Culpa commodi quam repellendus, doloremque hic ipsum odio eos illum ipsa unde assumenda minus ex accusamus natus.</p>
                </div>
                <div className="w-1/2 h-[50vh] w-[60vh] ml-20 mt-8 rounded-3xl bg-red-500">

                </div>
            </div>
        </div>    
    )
}

export default About