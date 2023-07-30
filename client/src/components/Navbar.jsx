import { Box, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const URL = import.meta.env.VITE_BASE_URL;

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const handleLogout = async () => {
    try {
      await axios.post(`${URL}/api/v1/auth/logout`);
      localStorage.removeItem("authToken");
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box
      width={"100%"}
      p={"1rem 6%"}
      textAlign="center"
      backgroundColor={theme.palette.background.alt}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color="primary" fontWeight="bold">
        Open AI
      </Typography>
      {loggedIn ? (
        <>
          <Link to="/" p={2}>
            Home
          </Link>
          <Link to="/login" onClick={handleLogout} p={1}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/register" p={1}>
            Sign Up
          </Link>
          <Link to="/login" p={1}>
            Sign In
          </Link>
        </>
      )}
    </Box>
  );
};

export default Navbar;
