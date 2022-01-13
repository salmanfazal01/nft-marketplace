import {
  Box,
  Breadcrumbs,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { BannerBgDark, BannerBgLight } from "../../utils/images";
import ResponsiveText from "../ResponsiveText";

const BreadcrumbsSection = ({ title, breadcrumbs = [] }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const background = isDark ? BannerBgDark : BannerBgLight;

  return (
    <Box
      sx={{
        background: `url(${background})`,
        height: 200,
        [theme.breakpoints.up("md")]: { height: 296 },
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ height: "100%", pt: 10 }}
      >
        <ResponsiveText
          variant="h3"
          sx={{ fontWeight: 600, color: theme.palette.primary.white }}
        >
          {title}
        </ResponsiveText>

        <Breadcrumbs sx={{ color: theme.palette.primary.grey3 }}>
          {breadcrumbs.map((item, i) => {
            if (item.active) {
              return (
                <Typography
                  key={i}
                  sx={{ color: theme.palette.primary.white, fontSize: 18 }}
                >
                  {item.label}
                </Typography>
              );
            }

            return (
              <Link key={i} underline="hover" color="inherit" href={item.href}>
                <Typography sx={{ fontSize: 18 }}>{item.label}</Typography>
              </Link>
            );
          })}
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};

export default BreadcrumbsSection;
