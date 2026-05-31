import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Background from './Components/Background/Background'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
      <>
      <Navbar />
      <Background />
      <div className="container">
        <About />
        <Title title="Projects" subTitle="What I've Been Up To" />
        <Projects />
        <Title title="Contact Me" subTitle="Stay in touch" />
        <Contact />
    </div></>
  )
}

export default App