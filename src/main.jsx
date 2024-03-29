import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='skills' element={<Skills />} />
      <Route path='projects' element={<Project />} />
      <Route path='experience' element={<Experience />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
