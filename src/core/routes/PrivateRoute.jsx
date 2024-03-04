import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";

const PrivateRoute = () => {
  const [{ user }] = useStateValue();
  const auth = user ? true : false; // determine if authorized, from context or however you're doing it
  const location = useLocation();
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
