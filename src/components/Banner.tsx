import React from "react";
import { Box, Typography } from "@mui/material";

const Banner: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 4,
        px: 2,
        background: "linear-gradient(to right, #fff, #fff)",
        color: "#000",
        borderRadius: "12px",
        mb: 4,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        BlogPosts - Ваши лучшие статьи
      </Typography>
      <Typography variant="subtitle1">
        Добро пожаловать! Здесь вы найдете интересные статьи на разные темы.
      </Typography>
    </Box>
  );
};

export default Banner;
