import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <b style={{ fontSize: 60 }}>404</b>
      <p>Page is no found</p>
      <NavLink to="/">Back to HOME page</NavLink>
    </main>
  );
};

export default NotFound;
