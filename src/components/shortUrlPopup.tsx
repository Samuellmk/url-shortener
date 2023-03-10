import { FaCopy } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ShortUrlInterface } from 'src/interfaces';

export const ShortUrlPopup = (props: ShortUrlInterface) => {
  const shortUrl =
    import.meta.env.VITE_FULL_FRONTEND_URL + props.shortUrl;

  const onCopyClick = () => {
    navigator.clipboard.writeText(shortUrl);
    props.showCopiedText(true);
  };

  return (
    <div className="flex items-center justify-center m-6">
      <div className="rounded-md bg-white p-2 w-fit">
        <div className="flex gap-10 items-center rounded-md border-dashed border-2 border-sky-600 px-5 py-2">
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {shortUrl}
          </a>
          <IconContext.Provider value={{ size: '16' }}>
            <div>
              <FaCopy
                onClick={onCopyClick}
                className="text-slate-600 cursor-pointer"
              />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
