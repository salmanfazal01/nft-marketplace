import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const AuthorCard = ({ image, name, verified, volume }) => {
  const theme = useTheme();

  return (
    <Stack alignItems="center" sx={{ cursor: "pointer" }}>
      <Box sx={{ mb: 1, position: "relative" }}>
        <img
          src={image}
          alt={name}
          style={{ height: 120, width: 120, borderRadius: 40 }}
        />

        {verified && (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "absolute",
              bottom: 5,
              right: 0,
              height: 26,
              width: 26,
              backgroundColor: theme.palette.background.purple,
              color: theme.palette.primary.white,
              borderRadius: "50%",
            }}
          >
            <CheckIcon fontSize="small" />
          </Stack>
        )}
      </Box>

      <Typography sx={{ letterSpacing: 0.1, fontWeight: 500, fontSize: 18 }}>
        {name}
      </Typography>

      <Typography sx={{ fontSize: 15, color: theme.palette.primary.grey }}>
        {volume} ETH
      </Typography>
    </Stack>
  );
};

export default AuthorCard;
