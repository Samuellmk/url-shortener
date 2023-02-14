type Url = {
  url: string;
  shortUrl: string;
};

export const UrlSearch = () => {
  const url: Url = {
    url: `https://google.com`,
    shortUrl: ``,
  };

  return (
    <div className="w-160 px-10">
      <h1 className="display-3 text-white font-semibold">URL Shortener</h1>
      <div className="card ">
        <div className="card-body">
          <div className="">
            <div className="flex gap-7 ">
              <input
                type="text"
                className="form-input bg-slate-100"
                name="url"
                placeholder="Paste your URL here"
              />
              <button className="btn bg-slate-800 text-gray-50">
                Shorten!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlSearch;
