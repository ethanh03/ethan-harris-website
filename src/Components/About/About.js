import React from 'react'
import './About.css'
import ethan_headshot from '../../assets/Ethan_Headshot2.JPG'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={ethan_headshot} alt='' className='about-img'/>
      </div>
      <div className='about-right'>
        <h2>About Me</h2>
        <p>I currently work at FAST Enterprises as an implementation consultant where I get the opportunity to help our government clients utilize information technology systems to make essential government services run more efficiently. This allows me to both serve the government employees as well as the constituents of the communities that we operate in. Through this role I have gain experience in programming (C#/Visual Basic), working with databases (SQL), conversing with clients, and researching new subject matter.</p>
        <p>I am also a graduate of the University of Texas at Austin, where I earned a degree in Management of Information Systems, a certificate in Elements of Computing, and a minor in Chinese. My academic experience and engagement with student organizations have helped to grow my interest in computer science, product development, and technological solutions.</p>
        <p>My whole life my philosopy has been to seek out environments that challenge me and allow me to grow. While looking for a work environment, I hope to find just that between the work I'm doing and the people that will be surrounding me.</p>
        <p>Outside my professional and academic life, I enjoy weightlifting, playing soccer, watching college football, producing music, and playing video games such as Minecraft, COD Zombies, and Rocket League!</p>
      </div>
    </div>
  )
}

export default About