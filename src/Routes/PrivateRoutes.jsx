import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);
  console.log(location.pathname);

  if (loading) {
    return <p className="font-bold text-green-600">Loading...</p>;
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

export default PrivateRoutes;
