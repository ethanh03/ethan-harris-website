import React from 'react'
import './Background.css'
import dark_arrow from '../../assets/dark_arrow.png'
import { Link, Element, animateScroll as scroll } from 'react-scroll';

const Background = () => {
  return (
    <div id='home' className='background-container'>
        <div className="background-text">
          <h1>Ethan Harris</h1>
          <p>Contact me: ethan.j.harris@gmail.com</p>
          <Link to='about' smooth={true} offset={-100} duration={500}><button className='btn'>I want to know more<img src={dark_arrow} alt=''/></button></Link>
        </div>
    </div>
  )
}

export default Background