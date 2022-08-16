import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='section-not-found-page'>
      <h1>404 Not Found</h1>
      <Link className='home-link' to='/'>
        Go to main page
      </Link>
    </div>
  );
};

export default NotFound;
