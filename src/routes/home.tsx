import { useState } from 'react';
import { CopiedAlert } from 'src/components/copiedAlert';
import UrlSearch from '../components/urlSearch';

const Home = () => {
  const [showCopiedText, setCopiedText] = useState(false);

  const toggleCopiedText = () => {
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 3000);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <UrlSearch showCopiedText={toggleCopiedText} />

      <CopiedAlert isVisible={showCopiedText} />
    </div>
  );
};

export default Home;
