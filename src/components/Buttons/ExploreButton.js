import { keyframes } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

const rainbow = keyframes`
  0% {background-position:left};
  50% {background-position:right};
  100% {background-position:left};
`;

const ExploreButton = ({ children, ...props }) => {
  return (
    <Typography
      sx={(theme) => ({
        p: 0,
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: "0.1em",
        lineHeight: "20px",
        cursor: "pointer",
        transition: "color .2s ease-in-out",
        "&:hover": {
          color: "transparent",
          background: `linear-gradient(to right, ${theme.palette.primary.pink},${theme.palette.primary.purple},${theme.palette.primary.pink})`,
          backgroundSize: "200% 200%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          animation: `${rainbow} 2s ease-in-out infinite`,
        },
        "&::after": {
          content: '""',
          display: "block",
          background: `linear-gradient(216.56deg, ${theme.palette.primary.pink} 5.32%, ${theme.palette.primary.purple} 94.32%)`,
          height: "1px",
          width: "100%",
          top: "30px",
        },
      })}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default ExploreButton;
