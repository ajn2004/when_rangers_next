// src/components/GameList.js
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const GameList = ({ games }) => {
  if (!games.length) return <p>No games available</p>;
  return (
    <div>
      {games.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
};

GameList.propTypes = {
  games: PropTypes.array.isRequired,
};

export default GameList;
