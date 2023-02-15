import { useState } from 'react';
import { postUrl } from 'src/api/url';
import { UrlInterface } from 'src/interfaces';
import ErrorAlert from './errorAlert';
import { ShortUrlPopup } from './shortUrlPopup';

const UrlSearch = (props: UrlInterface) => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [showError, setError] = useState(false);

  const handleButton = async () => {
    if (!validateUrl()) {
      console.log('Error');
      setError(true);
      setShortUrl('');
      setTimeout(() => setError(false), 3000);
      return;
    }

    const { shortUrl } = await postUrl(url);
    setShortUrl(shortUrl);
  };

  const validateUrl = () => {
    const exp =
      // eslint-disable-next-line no-useless-escape
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    const protoExp = new RegExp(exp);

    if (url.match(import.meta.env.VITE_FRONTEND_URL))
      return false;

    if (url.match(protoExp)) {
      return true;
    }

    return false;
  };

  const onUrlChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setUrl(e.currentTarget.value);
  };

  const showCopiedText = (show: boolean) => {
    props.showCopiedText(true);
  };

  return (
    <div className="w-160 px-10">
      <h1 className="display-3 text-white font-semibold">
        URL Shortener
      </h1>
      <div className="card transition-transform ease-in-out duration-500">
        <div className="card-body">
          <div className="">
            <div className="flex gap-7 ">
              <input
                type="text"
                className="form-input bg-slate-100"
                name="url"
                value={url}
                onChange={onUrlChange}
                placeholder="Paste your URL here"
              />
              <button
                className="btn bg-slate-800 text-gray-50"
                onClick={handleButton}
              >
                Shorten!
              </button>
            </div>
          </div>
        </div>
      </div>

      {showError && <ErrorAlert />}

      {shortUrl && (
        <ShortUrlPopup
          shortUrl={shortUrl}
          showCopiedText={showCopiedText}
        />
      )}
    </div>
  );
};

export default UrlSearch;
