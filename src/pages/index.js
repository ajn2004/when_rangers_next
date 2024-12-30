import React from 'react';
import GameList from '@/components/games/GameList';
import Standings from '@/components/standings/Standings';
import Loading from '@/components/loading';
import { fetchScheduleData, fetchStandingsData } from '../utils/api';

const home_teams = ['Rangers','Maple Leafs','Capitals'];

const Home = ({ games, standings, error }) => {
  if (error) return <Error message={typeof error === 'string' ? error : error} />;
  if (!games || !standings) return <Loading />;

  // Helper function to get the next game for a given team
  const getNextGameForTeam = (team) => {
    const teamGames = games.filter(
      (game) => game.homeTeam === team || game.awayTeam === team
    );
    const futureGames = teamGames.filter((game) => new Date(game.date) >= new Date());
    return futureGames.length ? futureGames[0] : null; // Return the first future game
  };

  // Get the next game for each home team
  const home_team_next_3 = home_teams
    .map((team) => getNextGameForTeam(team));

  // All future games (not limited to the home teams)
  const futureGames = games.filter((game) => new Date(game.date) >= new Date());
  const games1 = futureGames.slice(0, 30); // Limit to next 30 games

  return (
    <div className="container">
      {/* Show next games for home teams */}
      <GameList games={home_team_next_3} standings={standings} />

      <GameList games={games1} standings={standings} />
    </div>
  );
};


// server side data
export async function getServerSideProps() {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'; // Use environment variable for base URL
  try {
    const [scheduleData, standingsData] = await Promise.all([
      fetchScheduleData(baseUrl),
      fetchStandingsData(baseUrl),]
    ); 

    const today = new Date();
    const allWeeks = scheduleData.flatMap((entry) => entry.data.gameWeek || []);
    const allGames = allWeeks.flatMap((entry) => entry.games || []);
    const extractedGames = allGames.map((game) => (
      {
      id: game.id,
      date: game.startTimeUTC,
      awayId: game.awayTeam.id,
      awayPlace: game.awayTeam.placeName.default,
      awayLogoLight: game.awayTeam.logo,
      awayLogoDark: game.awayTeam.darkLogo,
      awayTeam: game.awayTeam.commonName.default,
      homeId: game.homeTeam.id,
      homePlace: game.homeTeam.placeName.default,
      homeLogoLight: game.homeTeam.logo,
      homeLogoDark: game.homeTeam.darkLogo,
      homeTeam: game.homeTeam.commonName.default,
    }));
    // const filterGames = extractedGames
    const filterGames = extractedGames.filter((game) => {
      const gameDate = new Date(game.date)
      return gameDate >= today
    });
    const allTeams = standingsData.standings.map((entry) => ({
      teamName: entry.teamCommonName.default,
      leagueStanding: entry.leagueSequence,
      wins: entry.wins,
      losses: entry.losses,
      otLosses: entry.otLosses,
      l10Wins: entry.l10Wins,
      l10Losses: entry.l10Losses,
      l10OTLosses: entry.l10OtLosses,
      streakCode: entry.streakCode,
      streakCount: entry.streakCount,
    }));

    return { props: { games: filterGames, standings: allTeams } };
  } catch (error) {
    return { props: { error: error.message  || 'An unknown error occurred', games: null, standings: null } };
  }
}

export default Home;
