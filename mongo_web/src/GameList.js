import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/games')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error('Failed', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
            <h3>
              <Link to={`/game/${game._id}`}>{game.name}</Link>
            </h3>
            <p>{game.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;