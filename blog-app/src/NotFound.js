import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Sorry</h2>
      <p>Page Not Found!!</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  );
};

export default NotFound;
