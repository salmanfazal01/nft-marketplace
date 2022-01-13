import {
  Box,
  Container,
  Grid,
  Hidden,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import RoundedButton from "../../components/Buttons/RoundedButton";
import ResponsiveText from "../../components/ResponsiveText";
import { Section1Background, Section1BigNft } from "../../utils/images";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { NAVBAR_HEIGHT_DESKTOP, NAVBAR_HEIGHT_MOBILE } from "../../constants";

const Section1 = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        background: isDark
          ? theme.palette.background.default
          : `linear-gradient(227.3deg, #8A208C 0%, #181B81 100.84%)`,
        marginTop: `-${NAVBAR_HEIGHT_MOBILE}px`,
        [theme.breakpoints.up("md")]: {
          marginTop: `-${NAVBAR_HEIGHT_DESKTOP}px`,
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          pt: 15,
          [theme.breakpoints.up("md")]: {
            minHeight: "60vh",
            backgroundImage: `url(${Section1Background})`,
            // backgroundPosition: "center center",
            backgroundSize: "cover",
          },
        }}
      >
        <Container maxWidth="xl">
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={5}>
                <Stack spacing={1}>
                  <ResponsiveText
                    variant="h3"
                    sx={{ fontWeight: 700, color: theme.palette.primary.white }}
                  >
                    Discover, find,
                  </ResponsiveText>
                  <ResponsiveText
                    variant="h2"
                    sx={{
                      color: isDark
                        ? theme.palette.background.default
                        : "transparent",
                      fontWeight: 700,
                      background:
                        isDark &&
                        `linear-gradient(-45deg, ${theme.palette.primary.pink}, ${theme.palette.primary.purple}, ${theme.palette.primary.pink}, ${theme.palette.primary.purple})`,
                      backgroundSize: "100% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextStroke: isDark
                        ? "3px transparent"
                        : `1px ${theme.palette.primary.white}`,
                    }}
                  >
                    Sell extraordinary
                  </ResponsiveText>
                  <ResponsiveText
                    variant="h3"
                    sx={{ fontWeight: 700, color: theme.palette.primary.white }}
                  >
                    Monster NFTs
                  </ResponsiveText>
                </Stack>

                <Typography sx={{ color: theme.palette.primary.white }}>
                  Marketplace For Monster Character Collections Non Fungible
                  Token NFTs
                </Typography>

                <Stack direction="row" spacing={2}>
                  <RoundedButton
                    variant="navbar"
                    size="large"
                    icon={<RocketLaunchIcon fontSize="small" />}
                    sx={{ py: 1.2, px: 4 }}
                  >
                    Explore
                  </RoundedButton>

                  <RoundedButton
                    variant="navbar"
                    size="large"
                    icon={<ReceiptIcon fontSize="small" />}
                    sx={{ py: 1.2, px: 4 }}
                  >
                    Create
                  </RoundedButton>
                </Stack>
              </Stack>
            </Grid>

            <Hidden mdDown>
              <Grid item xs={12} md={6}>
                <img
                  src={Section1BigNft}
                  alt="NFT"
                  style={{
                    maxHeight: "600px",
                    width: "100%",
                    objectFit: "contain",
                    verticalAlign: "middle",
                  }}
                />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Section1;
