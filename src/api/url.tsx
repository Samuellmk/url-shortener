import axios from 'axios';
import { NormalUrlInterface } from 'src/interfaces';

export async function getUrl(shortenUrl: string) {
  const apiUrl =
    import.meta.env.VITE_BACKEND_URL + 'fullUrl';
  const res = await axios.get(apiUrl, {
    params: {
      shortenUrl,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
  return res.data as NormalUrlInterface;
}

export async function postUrl(url: string) {
  const apiUrl =
    import.meta.env.VITE_BACKEND_URL + 'shorten';
  const res = await axios.post(
    apiUrl,
    { url: url },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
  return res.data;
}
