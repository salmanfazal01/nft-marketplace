import { Button, Stack, useTheme } from "@mui/material";
import React from "react";

const RoundedButton = ({ children, sx = {}, icon, variant, ...props }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const getStyles = () => {
    const commonStyles = {
      textTransform: "inherit",
      borderRadius: 30,
      py: 1,
      px: 3,
    };

    switch (variant) {
      case "purple":
        return {
          ...commonStyles,
          border: `2px solid ${theme.palette.primary.main}`,
          "&:hover": {
            border: `2px solid ${theme.palette.primary.purple}`,
            color: theme.palette.primary.white,
            backgroundColor: theme.palette.primary.purple,
          },
        };

      case "white":
        return {
          ...commonStyles,
          border: `2px solid ${theme.palette.primary.main}`,
          "&:hover": {
            border: `2px solid ${theme.palette.primary.main}`,
            color:
              mode === "dark"
                ? theme.palette.primary.black
                : theme.palette.primary.white,
            backgroundColor: theme.palette.primary.main,
          },
        };

      default:
        return {
          ...commonStyles,
          border: `2px solid ${theme.palette.primary.purple}`,
          "&:hover": {
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main,
          },
        };
    }
  };

  return (
    <Button
      variant="outlined"
      sx={{
        ...getStyles(),
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
