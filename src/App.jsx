import React from 'react'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
import LocomotiveScroll from 'locomotive-scroll'
import Education from './components/Education'


function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
    return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Landing />
      <Marque />
      <About />
      <Education/>
    </div>

  )
}

export default App