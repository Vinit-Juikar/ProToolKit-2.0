import { Box, Card, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomeBox = ({ typo1Text, navigateLink, typo2Text, typo3Text, logo }) => {
  const navigate = useNavigate();
  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" mb={2} fontWeight="bold">
        {typo1Text}
      </Typography>
      <Card
        onClick={() => navigate(`${navigateLink}`)}
        sx={{
          boxShadow: 2,
          borderRadius: 5,
          height: 190,
          width: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          "&:hover": {
            border: 2,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },
        }}
      >
        <Stack
          p={3}
          pt={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {logo}
          <Typography fontWeight="bold" variant="h5" mt={2}>
            {typo2Text}
          </Typography>
          <Typography variant="h6" mt={1}>
            {typo3Text}
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
};

export default HomeBox;
