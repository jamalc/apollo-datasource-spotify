import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export const token = await fetchToken();

async function fetchToken(): Promise<string> {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
  const auth = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');
  const res = await fetch('https://accounts.spotify.com/api/token', {
    body: new URLSearchParams({ grant_type: 'client_credentials' }),
    method: 'POST',
    headers: { Authorization: `Basic ${auth}` },
  });
  const json = await res.json();
  return json.access_token;
}
