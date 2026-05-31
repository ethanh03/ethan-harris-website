import React from 'react';
import {useParams, Link } from 'react-router-dom';
import './Biosynthetica.css';

const Biosynthetica = () => {
    const { id } = useParams();

    const games = {
        biosynthetica: {
            title: 'Biosynthetica',
            description: 'Stay alive. Retrieve the artifact. Discover the dark secrets of the past. ',
        }
    };

    const game = games[id];

    if (!game) {
        return <div className='game-not-found'>Game not found.</div>;
    }

    return (
        <div className='biosynthetica'>
            <Link to="/games" className='back-link'>Back to Games</Link>
            <h1>{game.title}</h1>
            <p className='game-description'>{game.description}</p>
            <div className='game-play'>
                <iframe src="https://itch.io/embed/4629190" frameborder="0" width="552" height="167"><a href="https://ethanh03.itch.io/biosynthetica">Biosynthetica by ethanh03</a></iframe>
            </div>
        </div>
    );
};

export default Biosynthetica;