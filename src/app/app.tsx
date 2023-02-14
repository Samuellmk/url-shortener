// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import UrlSearch from './urlSearch';

export function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <UrlSearch />
      <div />
    </div>
  );
}

export default App;
