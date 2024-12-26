import React from 'react';
import styles from '@/styles/games/Card.module.css'; // Optional: Add specific styles for the Card component

const Card = ({ game }) => {
  return (
    <div className={styles.card}>
      {/* <p className={styles.cardText}>Game ID: {game.id}</p> */}
      <p className={styles.cardText}>
        {game.awayPlace} {game.awayTeam} @ {game.homePlace} {game.homeTeam}
      </p>
      <p className={styles.cardText}>Date: {game.date}</p>
      <p className={styles.awayStandings}>{game.awayStanding.teamName}: {game.awayStanding.wins}W - {game.awayStanding.losses}L - {game.awayStanding.otLosses}OTL</p>
      <p className={styles.homeStandings}>{game.homeStanding.teamName}: {game.homeStanding.wins}W - {game.homeStanding.losses}L - {game.homeStanding.otLosses}OTL</p>
    </div>
  );
};

export default Card;
