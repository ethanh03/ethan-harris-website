import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Background from './Components/Background/Background'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'
import GamesPage from './pages/GamesPage';
import Biosynthetica from './pages/Biosynthetica';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Background/>
            <div className="container">
              <About/>
              <Title title="Projects" subTitle="What I've Been Up To"/>
              <Projects/>
              <Title title="Contact Me" subTitle="Stay in touch"/>
              <Contact/>
            </div>
          </>
        } />
      
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:id" element={<Biosynthetica />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App