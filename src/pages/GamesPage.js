import React from 'react';
import { Link } from 'react-router-dom';
import './GamesPage.css';

const GamesPage = () => {
    const games = [
        {
            id: 'biosynthetica',
            title: 'Biosynthetica',
            description: 'Survival horror game made as a group project for game design class. I was responsible for creating the enemy pathfinding system (A* algorithm), item instantiation system, cutscene system, and more.',
            tech: 'Godot, GDScript'
        }
    ];

    return (
        <div className='games-page'>
            <h1>Games</h1>
            <div className='games-list'>
                {games.map(game => (
                    <div key={game.id} className='game-card'>
                        <h2>{game.title}</h2>
                        <p>{game.description}</p>
                        <p><strong>Tech Used:</strong> {game.tech}</p>
                        <Link to={`/games/${game.id}`} className='details-link'>Play Biosynthetica Now!</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamesPage;