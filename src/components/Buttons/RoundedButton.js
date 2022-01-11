import { Button, Stack, useTheme } from "@mui/material";
import React from "react";

const RoundedButton = ({ children, sx = {}, icon, ...props }) => {
  const theme = useTheme();

  return (
    <Button
      variant="outlined"
      sx={{
        textTransform: "inherit",
        borderRadius: 30,
        py: 1,
        px: 3,
        border: `2px solid ${theme.palette.primary.purple}`,
        "&:hover": {
          border: `2px solid ${theme.palette.primary.white}`,
          color: theme.palette.primary.purple,
          backgroundColor: theme.palette.primary.white,
        },
        ...sx,
      }}
      {...props}
    >
      {icon ? (
        <Stack direction="row" alignItems="center" spacing={1}>
          {icon} <span>{children}</span>
        </Stack>
      ) : (
        children
      )}
    </Button>
  );
};

export default RoundedButton;
