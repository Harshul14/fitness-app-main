export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  // credentials: 'include',
  method: 'GET',
  headers: {
    // 'Content-Type': 'application/json',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    // 'X-RapidAPI-Key': '4bec3fc73cmsh9502e742ac9470bp17990fjsnff6742bcb08c',
    'X-RapidAPI-Key': 'c231d7d4cfmsh92a756992e9ca99p18d303jsn8a31fedb8dbc',
    // 'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};