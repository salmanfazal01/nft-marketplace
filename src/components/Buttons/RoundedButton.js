import { Button, Stack, useTheme } from "@mui/material";
import React from "react";

const RoundedButton = ({ children, sx = {}, icon, variant, ...props }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

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
            color: isDark
              ? theme.palette.primary.black
              : theme.palette.primary.white,
            backgroundColor: theme.palette.primary.main,
          },
        };

      case "navbar":
        return {
          ...commonStyles,
          border: `2px solid ${
            isDark ? theme.palette.primary.main : theme.palette.primary.white
          }`,
          color: theme.palette.primary.white,
          "&:hover": {
            border: `2px solid ${theme.palette.primary.white}`,
            color: theme.palette.primary.purple,
            backgroundColor: theme.palette.primary.white,
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
