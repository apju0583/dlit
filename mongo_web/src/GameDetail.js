import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/games/${id}`)
      .then(response => {
        setGame(response.data);
      })
      .catch(error => {
        console.error('Failed', error);
      });
  }, [id]);

  if (!game) {
    return <p>Game not found</p>;
  }

  return (
    <div className="game-detail">
      <div className="game-detail-image">
        <img src={game.imageUrl} alt={game.name} />
      </div>
      <div className="game-detail-info">
        <h2>{game.name}</h2>
        <p><strong>Genre:</strong> {game.genre}</p>
        <p><strong>Review:</strong> {game.review}</p>
        <p><strong>Details:</strong> {game.details}</p>
        <p><strong>Release Date:</strong> {game.releaseDate}</p>
        <p><strong>Developer:</strong> {game.developer}</p>
        <p><strong>Web Page:</strong> <a href={game.web} target="_blank" rel="noopener noreferrer">{game.web}</a></p>
      </div>
    </div>
  );
}

export default GameDetail;