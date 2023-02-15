import { useState } from 'react';
import { postUrl } from 'src/api/url';
import { UrlInterface } from 'src/interfaces';
import ErrorAlert from './errorAlert';
import { ShortUrlPopup } from './shortUrlPopup';

const UrlSearch = (props: UrlInterface) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const { shortUrl } = await postUrl(url);
    setLoading(false);
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
                className="btn w-24 bg-slate-800 text-gray-50"
                onClick={handleButton}
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="w-5 h-5 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  `Shorten!`
                )}
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
