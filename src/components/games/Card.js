import React from 'react';
import styles from '@/styles/games/Card.module.css'; // Optional: Add specific styles for the Card component

const Card = ({ game }) => {
  // handle streaming
  const formatUrlSegment = (str) => str.toLowerCase().replace(/\s+/g, '-');
  const homeUrl = `https://nhlstream.net/${formatUrlSegment(game.homePlace)}-${formatUrlSegment(game.homeTeam)}-stream`;
  const awayUrl = `https://nhlstream.net/${formatUrlSegment(game.awayPlace)}-${formatUrlSegment(game.awayTeam)}-stream`;

  // handle dates
  // Input time in UTC

  // Create a Date object
  const date = new Date();
  
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
      <p className={styles.dateText}>
        {formattedDate} @ {formattedTime}
      </p>
      <div className={styles.teamLogos}>
      <a href={awayUrl} target="_blank" rel="noopener noreferrer">
        <img src={game.awayLogo} alt={`${game.awayTeam} logo`} className={styles.logo} />
      </a>
      <span> @ </span>
      <a href={homeUrl} target="_blank" rel="noopener noreferrer">
        <img src={game.homeLogo} alt={`${game.homeTeam} logo`} className={styles.logo} />
      </a>
      </div>

      {/* Game info */}
      <p className={styles.cardText}>
      {game.awayPlace} @ {game.homePlace}
      </p>
      
        <p className={styles.standings}>
          {game.awayStanding?.teamName || "Unknown Team"}: 
          {game.awayStanding?.wins || 0}W - 
          {game.awayStanding?.losses || 0}L - 
          {game.awayStanding?.otLosses || 0}OTL
        </p>
        <p className={styles.standings}>
          {game.homeStanding?.teamName || "Unknown Team"}: 
          {game.homeStanding?.wins || 0}W - 
          {game.homeStanding?.losses || 0}L - 
          {game.homeStanding?.otLosses || 0}OTL
        </p>

    </div>
  );
};

export default Card;
// Card.js