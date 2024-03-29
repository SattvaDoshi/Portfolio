import React from "react";
import wave from "/wave.png"

const Project = () => {
    return (
        <div class="flex flex-col sm:flex-row min-h-screen px-8 pt-8 md:pt-16 flex-wrap justify-center bg-zinc-900 gap-16" style={{ backgroundImage: `url(${wave})`, backgroundSize: 'cover', }}>
            <div class="group md:h-[50vh] md:w-[40vw] h-[60%] w-[100%]   [perspective:1000px]">
                <div class="relative h-full  w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <img className=" border-2 md:p-6 p-4 md:h-[50vh] md:w-[40vw] h-[60%] w-[100%] rounded-xl " src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" />

                    <div class="absolute inset-0 h-full w-full rounded-xl bg-[#fdfcf7] p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex flex-col justify-between h-full">

                            <div class="mt-auto md:space-y-4 sm:mt-0 sm:space-y-2">
                                <h1 class="text-[#16453a] text-xl sm:text-2xl font-bold leading-5">Expense Tracker</h1>
                                <p class="text-[#16453a] text-lg sm:text-base font-light leading-5 overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam error, doloribus ullam, ipsam natus nihil earum voluptatem labore, neque officiis temporibus similique expedita optio nobis? Mollitia minus hic alias numquam!</p>
                                <p class="text-[#16453a] text-lg sm:text-base font-light leading-5">React | Localhost | Tailwind CSS</p>
                                <div class="flex gap-4 mt-16 sm:gap-16">
                                    <button class="bg-[#CDEA68] h-12 w-24 sm:h-12 sm:w-32 rounded-xl cursor">Live</button>
                                    <button class="bg-[#CDEA68] h-12 w-24 sm:h-12 sm:w-32 rounded-xl cursor">Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>




    );
};

export default Project;
