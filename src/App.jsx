import React, { useEffect, useState } from 'react'
import "./index.css"
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
import LocomotiveScroll from 'locomotive-scroll'
import Education from './components/Education'
import Contact from './components/Connect'
import Contact2 from './components/Connect2'


function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Landing />
      <Marque />
      <About />
      <Education/>
      {isMobile ? (
        <Contact2/>
      ) : (
        <Contact/>
      )}
      
    </div>

  )
}

export default App