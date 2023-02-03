import { NavLink } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';

export default function Home() {
  const { isLoggedIn } = useAuth();

  const isLogin = isLoggedIn ? '/contacts' : '/login';

  return (
    <div>
      <h1>
        <div>Welcome to Contact Book</div>
        <div>Your contacts will be safe!</div>
        <span role="img" aria-label="Greeting icon"></span>
        <NavLink to={isLogin}>Add your firs contact</NavLink>
      </h1>
    </div>
  );
}
