

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export function PrivateRouteLogin() {
    const login = useSelector((state) => state.auth);
    console.log(login, "INI LOGIN");

  if (login) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}

export function PrivateRouteUser() {
    const login = useSelector((state) => state?.auth?.user);
  if (login?.role_id === 1) {
    return <Navigate to="/admin" />;
  }
  return <Outlet />;
}

export function PrivateRouteAdmin() {
    const login = useSelector((state) => state.auth.user);
  if (login?.role_id !== 1) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
