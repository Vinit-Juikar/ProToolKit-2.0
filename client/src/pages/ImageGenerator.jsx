import { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
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
const URL = import.meta.env.VITE_BASE_URL;

const ImageGenerator = () => {
  const theme = useTheme();
  //mediaquery
  const isNotMobile = useMediaQuery("(min-width:1000px)");

  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${URL}/api/v1/openai/imagegenerator`, {
        text,
      });
      setImage(data);
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

  //download image
  const handleImageDownload = () => {
    let url = image;
    saveAs(url, `image_${Date.now()}.png`);
  };

  return (
    <Box
      width={isNotMobile ? "45%" : "80%"}
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
        <Typography variant="h3"> AI Generated Image</Typography>

        <TextField
          placeholder="Add your text"
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
          Generate Image
        </Button>
        <Typography mt={2}>
          Not this tool... <Link to="/">Go Back </Link>
        </Typography>
      </form>

      {image && (
        <Button
          onClick={handleImageDownload}
          fullWidth
          variant="outlined"
          size="large"
          sx={{ color: "black", mt: 2 }}
        >
          Dowload image
        </Button>
      )}

      {image ? (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "35rem",
            overflow: "auto",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              my: 5,
            }}
          >
            <img src={image} alt="image" />
          </Box>
        </Card>
      ) : (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "25rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
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
            Image Will Appear Here
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default ImageGenerator;
