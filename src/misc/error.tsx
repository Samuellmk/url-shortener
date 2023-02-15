import { Link, useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="h-screen flex justify-center items-center bg-gray-50"
    >
      <div className="flex-col justify-center items-center text-center">
        <h1>404 Not Found</h1>
        <p>It seems that you have visited a broken link!</p>
        <Link to="/">
          <div className="btn bg-red-500 text-white">
            Home
          </div>
        </Link>
      </div>
    </div>
  );
}
