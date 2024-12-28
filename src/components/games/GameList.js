// src/components/GameList.js
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from '@/styles/games/GameList.module.css';
import Error from '../Error';

const GameList = ({ games, standings }) => {
  if (!games || !games.length) return <Error message="No Games Available" />;
  if (!standings || !standings.length) return <Error message="No Standings Available" />;
  // build the card_game object here and pass to the card component for display
  const card_games = games.map((game) =>{
    return {
      id : game.id,
      date: game.date,
      awayPlace: game.awayPlace,
      awayTeam: game.awayTeam,
      homeTeam: game.homeTeam,
      homePlace: game.homePlace,
      homeStanding: standings.find(o => o.teamName === game.homeTeam) || {},
      awayStanding: standings.find(o => o.teamName === game.awayTeam) || {}
    }
  })

  return (
    <div className={styles.gamelist}>
      {card_games.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
};

GameList.propTypes = {
  games: PropTypes.array.isRequired,
};

export default GameList;
// GameList.js