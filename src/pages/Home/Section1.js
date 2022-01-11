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

const Section1 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 3,
        pt: 5,
        [theme.breakpoints.up("md")]: {
          minHeight: "70vh",
          pb: 10,
          backgroundImage: `url(${Section1Background})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        },
      }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={5}>
              <Stack spacing={1}>
                <ResponsiveText variant="h3" sx={{ fontWeight: 700 }}>
                  Discover, find,
                </ResponsiveText>
                <ResponsiveText
                  variant="h2"
                  sx={{
                    color: theme.palette.background.default,
                    fontWeight: 700,
                    background: `linear-gradient(-45deg, ${theme.palette.primary.pink}, ${theme.palette.primary.purple}, ${theme.palette.primary.pink}, ${theme.palette.primary.purple})`,
                    backgroundSize: "100% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextStroke: "3px transparent",
                  }}
                >
                  Sell extraordinary
                </ResponsiveText>
                <ResponsiveText variant="h3" sx={{ fontWeight: 700 }}>
                  Monster NFTs
                </ResponsiveText>
              </Stack>

              <Typography>
                Marketplace For Monster Character Collections Non Fungible Token
                NFTs
              </Typography>

              <Stack direction="row" spacing={2}>
                <RoundedButton
                  size="large"
                  icon={<RocketLaunchIcon fontSize="small" />}
                  sx={{ py: 1.2, px: 4 }}
                >
                  Explore
                </RoundedButton>

                <RoundedButton
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
  );
};

export default Section1;
