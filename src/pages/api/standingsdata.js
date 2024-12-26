export default async function handler(req, res) {
  try {
    const response = await fetch(`https://api-web.nhle.com/v1/standings/now`);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch standings - ${response.statusText}`);
    }

    // Parse the JSON from the response
    const data = await response.json();

    // Send only the data to the client
    res.status(200).json(data);
} catch (error) {
    console.error('Error fetching data from NHL API:', error.message);
    // Return an error response with a proper status code
    res.status(500).json({ error: 'Failed to fetch data from NHL API' });
}
}
  