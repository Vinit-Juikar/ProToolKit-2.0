import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("authToken"));
  }, []);
  return <>{token ? <Outlet /> : navigate("/login")}</>;
};

export default ProtectedRoute;
