// pages/api/cryptocurrencies.js

export default async function handler(req, res) {
    const url = 'https://api.coingecko.com/api/v3/coins/markets';
    const params = new URLSearchParams({
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: false,
    });
  
    try {
      const response = await fetch(`${url}?${params.toString()}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }
  