import axios from 'axios';

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

export const fetchDefaultCities = async () => {
  const query = `
    [out:json];
    area["name"="Nigeria"]->.searchArea;
    (
      relation["boundary"="administrative"]["admin_level"="4"](area.searchArea);
    );
    out geom;
  `;

  try {
    const response = await axios.post(OVERPASS_URL, query, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return response.data;
  } catch (error) {
    console.error('Overpass API error:', error);
    throw error;
  }
};

// relation["name"="Lagos"]["boundary"="administrative"](area.searchArea);
//       relation["name"="Abuja"]["boundary"="administrative"](area.searchArea);
//       relation["name"="Port Harcourt"]["boundary"="administrative"](area.searchArea);