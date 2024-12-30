import React from 'react';
import styles from '@/styles/games/Card.module.css'; // Optional: Add specific styles for the Card component
import Team from './Team';

const Card = ({ game }) => {
  // handle streaming
  const formatUrlSegment = (str) => str.toLowerCase().replace(/\s+/g, '-');
  const homeUrl = `https://nhlstream.net/${formatUrlSegment(game.homePlace)}-${formatUrlSegment(game.homeTeam)}-stream`;
  const awayUrl = `https://nhlstream.net/${formatUrlSegment(game.awayPlace)}-${formatUrlSegment(game.awayTeam)}-stream`;

  // handle dates
  // Input time in UTC

  // Create a Date object
  const date = new Date(game.date);
  
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

  const awayTeam = {
    logo: game.awayLogo,
    url: awayUrl,
    teamName: game.awayStanding?.teamName,
    wins: game.awayStanding?.wins,
    losses: game.awayStanding?.losses,
    otl: game.awayStanding?.otl,
    place: game.awayPlace,
    leagueStanding: game.awayStanding?.leagueStanding,
    streakCode: game.awayStanding?.streakCode,
    streakCount: game.awayStanding?.streakCount
  }

  const homeTeam = {
    logo: game.homeLogo,
    url: homeUrl,
    teamName: game.homeStanding?.teamName,
    wins: game.homeStanding?.wins,
    losses: game.homeStanding?.losses,
    otl: game.homeStanding?.otl,
    place: game.homePlace,
    leagueStanding: game.homeStanding?.leagueStanding,
    streakCode: game.homeStanding?.streakCode,
    streakCount: game.homeStanding?.streakCount
  }

  return (
    <div className={styles.card}>
      {/* <p className={styles.cardText}>Game ID: {game.id}</p> */}
      <p className={styles.dateText}>
        {formattedDate} @ {formattedTime}
      </p>
      <div className={styles.teams}>
        <Team team={awayTeam} /> @
        <Team team={homeTeam} />
      </div>
    </div>
  );
};

export default Card;
// Card.js