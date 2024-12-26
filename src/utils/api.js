// src/utils/api.js
export const fetchScheduleData = async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/scheduledata`);
    if (!response.ok) throw new Error('Failed to fetch schedule data');
    return response.json();
  };
  
  export const fetchStandingsData = async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/standingsdata`);
    if (!response.ok) throw new Error('Failed to fetch standings data');
    return response.json();
  };
  