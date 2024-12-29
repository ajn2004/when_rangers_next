// src/components/GameList.js
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from '@/styles/games/Team.module.css';
import Error from '../Error';

const Team = ({ team }) => { 

  return (
    <div className={styles.team}>
        {/* Team name */}
        <p className={styles.info}>
            {team.teamName || "Unknown Team"} 
        </p>
        { /* Handle team logo */}
       <div className={styles.teamLogos}>
            <a href={team.url} target="_blank" rel="noopener noreferrer">
                <img src={team.logo} alt={`${team.teamName} logo`} className={styles.logo} />
            </a>
        </div>
        { /* Handle team info */}
        <p className={styles.info}>
          {team.wins || 0}W - 
          {team.losses || 0}L - 
          {team.otLosses || 0}OTL
          Rank:
          {team.leagueStanding}
        </p>
    </div>
  );
};

// Define PropTypes for the component
Team.propTypes = {
    logo: PropTypes.string.isRequired, // URL for the team logo
    teamName: PropTypes.string.isRequired, // Team name
    url: PropTypes.string.isRequired, // streaming url
    wins: PropTypes.number.isRequired, // Number of wins
    losses: PropTypes.number.isRequired, // Number of losses
    otl: PropTypes.number.isRequired, // Number of overtime losses
    place: PropTypes.string.isRequired, // Team place or location
  };

export default Team;
// Team.js