import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {
  return (
  <>
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <Landing/>
      <Marque/>
      <About/>
      <Featured/>
      <Skills/>
      <Footer/>
    </div>
   
  </>
  )
}

export default App