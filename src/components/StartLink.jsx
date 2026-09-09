import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

/**
 * "Start" CTA: signup if guest, pricing/home if already logged in.
 */
export default function StartLink({ className = 'btn btn-blue', children, loggedInTo = '/pricing' }) {
  const { isLoggedIn } = useAuth();
  const to = isLoggedIn ? loggedInTo : '/signup';
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}
