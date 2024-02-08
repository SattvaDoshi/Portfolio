import React from 'react'

const Featured = () => {
    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zince-700 pb-10 '>
                <h1 className='text-6xl'>Featured Projects</h1>
            </div>

            <div className="px-20 mt-10">
                <div className="cards w-full flex gap-10">
                    <div className="card w-1/2 rounded-xl relative h-[70vh] ">
                        
                        <h1 className='text-6xl bg-red-500 absolute left-full top-1/2
                        -translate-x-1/2 -translate-y-1/2'>
                            {"BLOG".split("").map((item,idx)=>(
                                <span>{item}</span>
                            ))}
                        </h1>
                        <div className='w-full h-full bg-green-500 overflow-hidden'>
                            <img className='w-full h-full bg-cover' src=""  alt="" />
                        </div>
                        <div className="flex gap-10">
                        <div className="text-5xl mt-2 ">BLOG</div>
                        <a className='text-2xl p-2 border-2 border-white mt-2 rounded-3xl w-1/4 text-center' href="">Github</a>
                        <a className='text-2xl p-2 border-2 border-white mt-2 rounded-3xl w-1/4 text-center' href="">Visit</a>
                        </div>
                    </div>
                    <div className="card w-1/2 rounded-xl relative h-[70vh] ">
                        <h1 className='text-6xl bg-red-500 absolute right-full top-1/2
                        translate-x-1/2 -translate-y-1/2'>
                             {"CLONE".split("").map((item,idx)=>(
                                <span>{item}</span>
                            ))}
                        </h1>
                        <div className='w-full h-full bg-green-500 overflow-hidden'>
                            <img className='w-full h-full bg-cover' src=""  alt="" />
                        </div>
                        <div className="flex gap-10">
                        <div className="text-5xl mt-2 ">BLOG</div>
                        <a className='text-2xl p-2 border-2 border-white mt-2 rounded-3xl w-1/4 text-center' href="">Github</a>
                        <a className='text-2xl p-2 border-2 border-white mt-2 rounded-3xl w-1/4 text-center' href="">Visit</a>
                        </div>
                    </div>
                    
                                       
                </div>
                <div className="cards w-full mt-12 flex gap-10">
                    <div className="card w-1/2 rounded-xl relative h-[70vh] ">
                        <h1 className='text-6xl bg-red-500 absolute left-full top-1/2
                        -translate-x-1/2 -translate-y-1/2'>
                            {"BLOG".split("").map((item,idx)=>(
                                <span>{item}</span>
                            ))}
                        </h1>
                        <div className='w-full mt-10 h-full bg-green-500 overflow-hidden'>
                            <img className='w-full h-full bg-cover' src=""  alt="" />
                        </div>
                        <div className="flex gap-10">
                        <div className="text-5xl mt-2 ">BLOG</div>
                        <a className='text-2xl p-2 border-2 border-white mt-2 rounded-3xl w-1/4 text-center' href="">Github</a>
                        <a className='text-2xl p-2 border-2 border-white mt-2 rounded-3xl w-1/4 text-center' href="">Visit</a>
                        </div>
                    </div>
                    <div className="card w-1/2 rounded-xl relative h-[70vh] ">
                        <h1 className='text-6xl bg-red-500 absolute right-full top-1/2
                        translate-x-1/2 -translate-y-1/2'>
                             {"CLONE".split("").map((item,idx)=>(
                                <span>{item}</span>
                            ))}
                        </h1>
                        <div className='w-full mt-10 h-full bg-green-500 overflow-hidden'>
                            <img className='w-full h-full bg-cover' src=""  alt="" />
                        </div>
                        <div className="flex gap-10">
                        <div className="text-5xl mt-2 ">BLOG</div>
                        <a className='text-2xl p-2 border-2 border-white mt-2 rounded-3xl w-1/4 text-center' href="">Github</a>
                        <a className='text-2xl p-2 border-2 border-white mt-2 rounded-3xl w-1/4 text-center' href="">Visit</a>
                        </div>
                    </div>
                    
                                       
                </div>
            </div>
        </div>
    )
}

export default Featured