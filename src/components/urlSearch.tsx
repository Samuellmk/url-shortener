import { useState } from 'react';
import { postUrl } from 'src/api/url';
import { UrlInterface } from 'src/interfaces';
import { ShortUrlPopup } from './shortUrlPopup';

const UrlSearch = (props: UrlInterface) => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleButton = async () => {
    const { shortUrl } = await postUrl(url);
    setShortUrl(shortUrl);
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
      <div className="card ">
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
      <ShortUrlPopup
        shortUrl={shortUrl}
        showCopiedText={showCopiedText}
      />
    </div>
  );
};

export default UrlSearch;
