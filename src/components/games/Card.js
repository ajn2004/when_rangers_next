import React from 'react';
import styles from '@/styles/games/Card.module.css'; // Optional: Add specific styles for the Card component

const Card = ({ game }) => {
  return (
    <div className={styles.card}>
      <p className={styles.cardText}>Game ID: {game.id}</p>
      <p className={styles.cardText}>Date: {game.date}</p>
      <p className={styles.cardText}>
        {game.awayPlace} {game.awayTeam} @ {game.homePlace} {game.homeTeam}
      </p>
    </div>
  );
};

export default Card;
