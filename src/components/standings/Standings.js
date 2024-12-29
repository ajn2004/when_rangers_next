// src/components/Standings.js
import React from 'react';
import PropTypes from 'prop-types';

const Standings = ({ standings }) => (
  <div>
    <h2>Standings</h2>
    <ul>
      {standings.map((team, index) => (
        <li key={index}>
          {team.teamName}: {team.wins}W - {team.losses}L - {team.otLosses}OTL  League Standing - {team.leagueStanding}
        </li>
      ))}
    </ul>
  </div>
);

Standings.propTypes = {
  standings: PropTypes.arrayOf(
    PropTypes.shape({
      teamName: PropTypes.string.isRequired,
      wins: PropTypes.number.isRequired,
      losses: PropTypes.number.isRequired,
      otLosses: PropTypes.number.isRequired,
      leagueStanding: PropTypes.number.isRequired
    })
  ).isRequired,
};

export default Standings;
// Standings.js