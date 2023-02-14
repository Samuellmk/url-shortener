import axios from 'axios';

export async function postUrl(url: string) {
  const apiUrl = import.meta.env.VITE_BACKEND_URL + 'url/shorten';
  const res = await axios.post(apiUrl, { url: url });
  return res.data;
}
