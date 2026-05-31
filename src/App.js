import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Background from './Components/Background/Background'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Background/>
      <div className="container">
        <About/>
        <Title title="Projects" subTitle="What I've Been Up To"/>
        <Projects/>
        <Title title="Contact Me" subTitle="Stay in touch"/>
        <Contact/>
        </div>

    </div>
  )
}

export default App