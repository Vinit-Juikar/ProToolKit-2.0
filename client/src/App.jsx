import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../theme";
import { Toaster } from "react-hot-toast";
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/ChatBot";
import JSConverter from "./pages/JSConverter";
import ImageGenerator from "./pages/ImageGenerator";
import Question from "./pages/Question";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="" element={<HomePage />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/paragraph" element={<Paragraph />} />
              <Route path="/chatbot" element={<ChatBot />} />
              <Route path="/question" element={<Question />} />
              <Route path="/jsconverter" element={<JSConverter />} />
              <Route path="/imagegenerator" element={<ImageGenerator />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
