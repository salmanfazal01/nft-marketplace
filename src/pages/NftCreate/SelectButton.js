import { Button, Stack, useTheme } from "@mui/material";
import React from "react";

const SelectButton = ({ icon, children, active, onClick }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const activeStyles = () => {
    if (active) {
      return {
        backgroundColor: isDark
          ? theme.palette.background.white
          : `${theme.palette.background.purple}1A`,
        borderColor: isDark
          ? theme.palette.background.white
          : `${theme.palette.background.purple}1A`,
        color: theme.palette.background.purple,
        "&:hover": {
          backgroundColor: isDark
            ? theme.palette.background.white
            : `${theme.palette.background.purple}1A`,
          borderColor: isDark
            ? theme.palette.background.white
            : `${theme.palette.background.purple}1A`,
          color: theme.palette.background.purple,
        },
      };
    }

    return {
      backgroundColor: theme.palette.background.color7,
      borderColor: theme.palette.background.color7,
      color: theme.palette.primary.grey,
      "&:hover": {
        backgroundColor: isDark
          ? theme.palette.background.white
          : `${theme.palette.background.purple}1A`,
        borderColor: isDark
          ? theme.palette.background.white
          : `${theme.palette.background.purple}1A`,
        color: theme.palette.background.purple,
      },
    };
  };

  return (
    <Button
      variant="outlined"
      fullWidth
      onClick={onClick}
      sx={{
        textTransform: "inherit",
        height: 46,
        py: 1,
        borderRadius: "8px",
        ...activeStyles(),
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        {icon} <span>{children}</span>
      </Stack>
    </Button>
  );
};

export default SelectButton;
