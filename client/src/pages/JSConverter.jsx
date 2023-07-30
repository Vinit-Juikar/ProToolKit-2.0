import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  useTheme,
  TextField,
  Collapse,
  Button,
  Alert,
  useMediaQuery,
  Card,
} from "@mui/material";
import { toast } from "react-hot-toast";
const URL = import.meta.env.VITE_BASE_URL;

const JSConverter = () => {
  const theme = useTheme();
  //mediaquery
  const isNotMobile = useMediaQuery("(min-width:1000px)");

  const [code, setCode] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${URL}/api/v1/openai/jsconverter`, {
        text,
      });
      setCode(data);
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success("Text Copied");
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
        <Typography variant="h3">Generate JS Code</Typography>

        <TextField
          placeholder="Add your keywords to generate code"
          type="text"
          required
          multiline={true}
          margin="normal"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ color: "white", mt: 2 }}
        >
          Generate Code
        </Button>
        <Typography mt={2}>
          Not this tool... <Link to="/">Go Back </Link>
        </Typography>
      </form>

      {code && (
        <Button
          onClick={handleCopy}
          variant="outlined"
          size="large"
          sx={{ color: "black", mt: 2 }}
        >
          Copy
        </Button>
      )}

      {code ? (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "25rem",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
            overflow: "auto",
          }}
        >
          <pre>
            <Typography p={2}>{code}</Typography>
          </pre>
        </Card>
      ) : (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "25rem",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            color="natural.main"
            sx={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "450px",
            }}
          >
            JavaScript code will ge generated here...
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default JSConverter;
