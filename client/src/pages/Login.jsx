import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  useTheme,
  TextField,
  Collapse,
  Button,
  Alert,
  useMediaQuery,
} from "@mui/material";
const URL = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  //mediaquery
  const isNotMobile = useMediaQuery("(min-width:1000px)");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${URL}/api/v1/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("authToken", true);
      toast.success("Logged in successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };
  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <Collapse in={error ? true : false}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">Login</Typography>

        <TextField
          label="Email"
          type="email"
          required
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          required
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ color: "white", mt: 2 }}
        >
          Login
        </Button>
        <Typography mt={2}>
          Not having a account ? <Link to="/register">Please Register</Link>
        </Typography>
      </form>
    </Box>
  );
};

export default Login;
