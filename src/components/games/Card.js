import React from 'react';
import styles from '@/styles/games/Card.module.css'; // Optional: Add specific styles for the Card component

const Card = ({ game }) => {
  // handle streaming
  const formatUrlSegment = (str) => str.toLowerCase().replace(/\s+/g, '-');
  const homeUrl = `https://nhlstream.net/${formatUrlSegment(game.homePlace)}-${formatUrlSegment(game.homeTeam)}-stream`;
  const awayUrl = `https://nhlstream.net/${formatUrlSegment(game.awayPlace)}-${formatUrlSegment(game.awayTeam)}-stream`;

  // handle dates
  // Input time in UTC
  const utcTime = '2024-12-24T00:30:00Z';

  // Create a Date object
  const date = new Date(utcTime);

  // Convert to EST (UTC-5)
  const options = {
    timeZone: 'America/New_York', // EST timezone
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // Use 24-hour format, set to true for 12-hour format
  };

  // Format the date
  const estTime = new Intl.DateTimeFormat('en-US', options).format(date);

  // Extract date and time separately
  const [formattedDate, formattedYear, formattedTime] = estTime.split(', ');

  return (
    <div className={styles.card}>
      {/* <p className={styles.cardText}>Game ID: {game.id}</p> */}
      <p className={styles.cardText}>
        {game.awayPlace} {game.awayTeam} @ {game.homePlace} {game.homeTeam}
      </p>
      <p className={styles.cardText}>Date: {formattedDate} {formattedYear} @ {formattedTime}</p>
      <p className={styles.standings}>{game.awayStanding.teamName}: {game.awayStanding.wins}W - {game.awayStanding.losses}L - {game.awayStanding.otLosses}OTL</p>
      <p className={styles.standings}>{game.homeStanding.teamName}: {game.homeStanding.wins}W - {game.homeStanding.losses}L - {game.homeStanding.otLosses}OTL</p>
      <p className={styles.links}>
        <a href={awayUrl} target="_blank" rel="noopener noreferrer">Away</a>
        <span> &lt;---- View The Game ----&gt; </span>
        <a href={homeUrl} target="_blank" rel="noopener noreferrer">Home</a></p>
    </div>
  );
};

export default Card;
