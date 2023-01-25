import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { userData } = useAuth();

  return userData.isAuth ? <Outlet /> : <Navigate to={"/login"} />;
}
