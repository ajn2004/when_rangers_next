function getMondays() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysSinceMonday = (dayOfWeek + 6) % 7; // Calculate days since last Monday
  const recentMonday = new Date(today);
  recentMonday.setDate(today.getDate() - daysSinceMonday);

  const nextMonday = new Date(recentMonday);
  nextMonday.setDate(recentMonday.getDate() + 7);

  const nextNextMonday = new Date(nextMonday);
  nextNextMonday.setDate(nextMonday.getDate() + 7);

  return [recentMonday, nextMonday, nextNextMonday].map((date) =>
    date.toISOString().split('T')[0]
  ); // Format as YYYY-MM-DD
}

export default async function handler(req, res) {
  try {
    const mondays = getMondays();

    // Fetch data for all Mondays concurrently
    const responses = await Promise.all(
      mondays.map(async (date) => {
        try {
          const response = await fetch(`https://api-web.nhle.com/v1/schedule/${date}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch data for date: ${date} - ${response.statusText}`);
          }
          const data = await response.json(); // Parse JSON response
          return { date, data };
        } catch (err) {
          console.error(`Error fetching data for date ${date}:`, err.message);
          return { date, error: err.message }; // Gracefully handle per-date fetch errors
        }
      })
    );

    res.json(responses); // Forward the aggregated results to the frontend
  } catch (error) {
    console.error('Error fetching data from NHL API:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from NHL API' });
  }
};
