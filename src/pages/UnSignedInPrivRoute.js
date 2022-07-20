import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
const UnSignedInPrivRoute = () => {
  const { user } = useAuth();
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default UnSignedInPrivRoute;
