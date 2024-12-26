import React from 'react';
import GameList from '@/components/games/GameList';
import Standings from '@/components/standings/Standings';
import Loading from '@/components/loading';
import { fetchScheduleData, fetchStandingsData } from '../utils/api';

const Home = ({ games, standings, error }) => {
  if (error) return <Error message={error} />;
  if (!games || !standings) return <Loading />;


  return (
    <div className="container">
       <GameList games={games} standings={standings} />
      <Standings standings={standings}/>
    </div>
  );
};

// server side data
export async function getServerSideProps() {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'; // Use environment variable for base URL
  try {
    const [scheduleData, standingsData] = await Promise.all([
        fetchScheduleData(baseUrl),
        fetchStandingsData(baseUrl),
      ]);

    const allWeeks = scheduleData.flatMap((entry) => entry.data.gameWeek || []);
    const allGames = allWeeks.flatMap((entry) => entry.games || []);
    const extractedGames = allGames.map((game) => ({
      id: game.id,
      date: game.startTimeUTC,
      awayId: game.awayTeam.id,
      awayPlace: game.awayTeam.placeName.default,
      awayTeam: game.awayTeam.commonName.default,
      homeId: game.homeTeam.id,
      homePlace: game.homeTeam.placeName.default,
      homeTeam: game.homeTeam.commonName.default,
    }));

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

    return { props: { games: extractedGames, standings: allTeams } };
  } catch (error) {
    return { props: { error: error.message, games: null, standings: null } };
  }
}

export default Home;
