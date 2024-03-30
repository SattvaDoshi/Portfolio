import React from "react";
import backgroundImg from "/mesh-679.png"
import expense from "/Expense.png"
import bootstrap from "/image.png"
import dictionary from "/dictionary.png"
import wack from "/wack.png"

const Project = () => {
    return (
        <div class="flex flex-col sm:flex-row min-h-screen px-8 pt-8 md:pt-16 flex-wrap justify-center bg-zinc-900 gap-16" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', }}>
             <div class="group md:h-[50vh] md:w-[40vw] h-[45vh] w-[100%]   [perspective:1000px]">
                <div class="relative h-full  w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <img className=" border-2 md:p-6 p-4 md:h-[50vh] md:w-[40vw] h-[45vh] w-[100%] rounded-xl " src={expense} alt="" />

                    <div class="absolute inset-0 h-full w-full rounded-xl bg-[#fdfcf7] p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex flex-col justify-between h-full">

                            <div class="mt-auto md:space-y-4 sm:mt-0 sm:space-y-2">
                                <h1 class="text-[#16453a] text-xl sm:text-2xl mb-6 font-bold leading-5">Expense Tracker</h1>
                                <p class="text-[#16453a] mt-2 text-lg sm:text-base font-light leading-5 overflow-hidden">
                                This is the  Expense Tracker application developed using React where in you can enter Your
                                Budget and named it and then can remove expenditure , you can make N number of Expense. This will be
                                Stored in your local Storage
                                </p>
                                <p class="text-[#16453a] text-lg sm:text-base font-light leading-5">React.js | Tailwind | Localhost</p>
                                <div class="flex gap-4 md:mt-16 mt-8 sm:gap-16">
                                    <button class="bg-[#CDEA68] h-12 w-24 sm:h-12 sm:w-32 rounded-xl cursor"><a target="_blank" href="https://expense-traker-zeta.vercel.app/">Live Demo</a></button>
                                    <button class="bg-[#CDEA68] h-12 w-24 sm:h-12 sm:w-32 rounded-xl cursor"><a target="_blank" href="https://github.com/SattvaDoshi/Expense-Traker">Code</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="group md:h-[50vh] md:w-[40vw] h-[45vh] w-[100%]   [perspective:1000px]">
                <div class="relative h-full  w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <img className=" border-2 md:p-6 p-4 md:h-[50vh] md:w-[40vw] h-[45vh] w-[100%] rounded-xl " src={bootstrap} alt="" />

                    <div class="absolute inset-0 h-full w-full rounded-xl bg-[#fdfcf7] p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex flex-col justify-between h-full">

                            <div class="mt-auto md:space-y-4 sm:mt-0 sm:space-y-2">
                                <h1 class="text-[#16453a] text-xl sm:text-2xl mb-6 font-bold leading-5">Trading Guru</h1>
                                <p class="text-[#16453a] text-lg sm:text-base font-light leading-5 overflow-hidden">
                                This is the Website for the Trading who Wants to online and I helped them in Making website. 
                                This is Dynamic Website as well as Responsive</p>
                                <p class="text-[#16453a] text-lg sm:text-base font-light leading-5">HTML | BOOTSTRAP | JS</p>
                                <div class="flex gap-4 md:mt-16 mt-8 sm:gap-16">
                                    <button class="bg-[#CDEA68] h-12 w-24 sm:h-12 sm:w-32 rounded-xl cursor"><a target="_blank" href="https://trading-guru-ten.vercel.app/">Live Demo</a></button>
                                    <button class="bg-[#CDEA68] h-12 w-24 sm:h-12 sm:w-32 rounded-xl cursor"><a target="_blank" href="https://github.com/SattvaDoshi/Bootstrap">Code</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="group md:h-[50vh] md:w-[40vw] h-[45vh] w-[100%]   [perspective:1000px]">
                <div class="relative h-full  w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <img className=" border-2 md:p-6 p-4 md:h-[50vh] md:w-[40vw] h-[45vh] w-[100%] rounded-xl " src={dictionary} alt="" />

                    <div class="absolute inset-0 h-full w-full rounded-xl bg-[#fdfcf7] p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex flex-col justify-between h-full">

                            <div class="mt-auto md:space-y-4 sm:mt-0 sm:space-y-2">
                                <h1 class="text-[#16453a] text-xl sm:text-2xl mb-6 font-bold leading-5">Dictionary</h1>
                                <p class="text-[#16453a] text-lg sm:text-base font-light leading-5 overflow-hidden">
                                    This is the Dictionary App where i have used a External Api in 
                                    which my App is Supported in 7 Different Languaged
                                </p>
                                <p class="text-[#16453a] text-lg sm:text-base font-light leading-5">React.js | Material UI | API</p>
                                <div class="flex gap-4 md:mt-16 mt-8 sm:gap-16">
                                    <button class="bg-[#CDEA68] h-12 w-24 sm:h-12 sm:w-32 rounded-xl cursor"><a target="_blank" href="https://dictionary-peach-tau.vercel.app/">Live Demo</a></button>
                                    <button class="bg-[#CDEA68] h-12 w-24 sm:h-12 sm:w-32 rounded-xl cursor"><a target="_blank" href="https://github.com/SattvaDoshi/Dictionary">Code</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="group md:h-[50vh] md:w-[40vw] h-[45vh] w-[100%] mb-16 [perspective:1000px]">
                <div class="relative h-full  w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <img className=" border-2 md:p-6 p-4 md:h-[50vh] md:w-[40vw] h-[45vh] w-[100%] rounded-xl " src={wack} alt="" />

                    <div class="absolute inset-0 h-full w-full rounded-xl bg-[#fdfcf7] p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex flex-col justify-between h-full">

                            <div class="mt-auto md:space-y-4 sm:mt-0 sm:space-y-2">
                                <h1 class="text-[#16453a] text-xl sm:text-2xl mb-6 font-bold leading-5">Whack a Mole</h1>
                                <p class="text-[#16453a] text-lg sm:text-base font-light leading-5 overflow-hidden">
                                    This is the small Beginner level Project made a game using HTML CSS and JS
                                    made and deployed on Github you can check out
                                </p>
                                <p class="text-[#16453a] text-lg sm:text-base font-light leading-5">HTML | CSS | JS</p>
                                <div class="flex gap-4 md:mt-16 mt-8 sm:gap-16">
                                    <button class="bg-[#CDEA68] h-12 w-24 sm:h-12 sm:w-32 rounded-xl cursor"><a target="_blank" href="https://sattvadoshi.github.io/Whack-a-Mole/">Live Demo</a></button>
                                    <button class="bg-[#CDEA68] h-12 w-24 sm:h-12 sm:w-32 rounded-xl cursor"><a target="_blank" href="https://github.com/SattvaDoshi/Whack-a-Mole">Code</a></button>
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
