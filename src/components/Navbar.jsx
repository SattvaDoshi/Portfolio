import React from 'react'

const Navbar = () => {
    return (
        <div className='z-[99] w-full px-20 py-8 text-white flex justify-between item-center'>
            <h1>Sattva</h1>
            <div className="links flex gap-10">
                {["Services", "Our Work", "About Us", "Insights","Contact"].map((item, idx) => (
                    <a key={idx} className={`text-md font-semibold ${idx==4 && "ml-32"} `}>{item}</a>
                ))}
            </div>
        </div>
    )
}

export default Navbar