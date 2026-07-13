import React from 'react'
import './Navbar.css'
import ethan_harris_name from '../../assets/ethan_harris_name.png'
import { Link, Element, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className='container'>
        <img src={ethan_harris_name} alt="" className='ethan_harris_name' />
        <ul>
            {/* <li><Link to='home' smooth={true} offset={-100} duration={500}>Home</Link></li> */}
            <li><Link to='about' smooth={true} offset={-100} duration={500}>About</Link></li>
            <li><Link to='projects' smooth={true} offset={-260} duration={500}>Projects</Link></li>
            {/* <li><Link to='education' smooth={true} offset={-100} duration={500}>Education</Link></li> */}
            {/* <li><Link to='experience' smooth={true} offset={-100} duration={500}>Experience</Link></li> */}
            {/* <li><Link to='interests' smooth={true} offset={-100} duration={500}>Interests</Link></li> */}
            <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Me</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar