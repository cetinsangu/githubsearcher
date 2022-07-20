import { useAuth } from '../firebase/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
function SignedInPrivRoute() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/signin" />;
}
export default SignedInPrivRoute;
