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
        <div className={styles.teamName}>
            {team.teamName || "Unknown Team"} 
        </div>
        { /* Handle team logo */}
       <div className={styles.teamLogos}>
            <a href={team.url} target="_blank" rel="noopener noreferrer">
                <img src={team.logo} alt={`${team.teamName} logo`} className={styles.logo} />
            </a>
        </div>
        { /* Handle team stats */}
        <div className={styles.stats}>
  {/* Header Row */}
  <div className={styles.row}>
    <span></span> {/* Empty cell for alignment */}
    <span>W</span>
    <span>L</span>
    <span>OTL</span>
  </div>

  {/* Team Row */}
  <div className={styles.row}>
    <span>R</span>
    <span>{team.wins || 0}</span>
    <span>{team.losses || 0}</span>
    <span>{team.otLosses || 0}</span>
  </div>

  {/* L10 Row */}
  <div className={styles.row}>
    <span>L10</span>
    <span>{team.l10wins || 0}</span>
    <span>{team.l10loss || 0}</span>
    <span>{team.l10otl || 0}</span>
  </div>
</div>

        <p className={styles.info}>
          Rank:  {team.leagueStanding}
        </p>
        <p className={styles.info}>
          Streak:  {team.streakCode}{team.streakCount}
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
    l10wins: PropTypes.number.isRequired,
    l10loss: PropTypes.number.isRequired,
    l10otl: PropTypes.number.isRequired
  };

export default Team;
// Team.js