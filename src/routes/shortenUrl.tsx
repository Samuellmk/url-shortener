import { Params, redirect } from 'react-router-dom';
import { getUrl } from 'src/api/url';

export const loader = async ({
  params,
}: {
  params: Params;
}) => {
  const { url } = await getUrl(params.shortId);
  try {
    new URL(url);

    return redirect(url);
  } catch (_) {
    const addProtocol = 'https://' + url;
    return redirect(addProtocol);
  }
};

const ShortenUrl = () => {
  return <div />;
};

export default ShortenUrl;
