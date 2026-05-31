import React from 'react'
import { Link } from 'react-router-dom';
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects">
        <div className='game-container'>
            <div className='game-play'>
                    <iframe src="https://itch.io/embed/4629190" frameborder="0" width="1000" height="167" allowFullScreen><a href="https://ethanh03.itch.io/biosynthetica">Biosynthetica by ethanh03</a></iframe>
            </div>
            <div className='game-description'>
                <p>Biosynthetica is a game my group made for our game development class. I worked on the enemy pathfinding system (A* algorithm), item instantiation system, game cutscenes, and more!</p>
                <p><strong>Tech Used:</strong> Godot, GDScript</p>
            </div>
        </div>
    </div>
    )
}

export default Projects;