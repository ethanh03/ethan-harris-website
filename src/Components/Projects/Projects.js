import React from 'react'
import { Link } from 'react-router-dom';
import './Projects.css'
import games from '../../assets/games.jpg'

const Projects = () => {
  return (
    <div className="projects">
        <div className="project">
            <img src={games} alt=''/>
            <div className="caption">
                <p>GAMES</p>
                <Link to="/games">
                    <button>View Games</button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Projects;