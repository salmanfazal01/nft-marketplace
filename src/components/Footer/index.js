import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import withAppConfig from "../../hoc/withAppConfig";

const footerItems = [
  {
    title: "My Account",
    items: ["Authors", "Collection", "Author Profile", "Create Item"],
  },
  {
    title: "Resources",
    items: ["Help & Support", "Live Auctions", "Item Details", "Activity"],
  },
  {
    title: "Company",
    items: ["Explore", "Contact Us", "Our Blog", "FAQ"],
  },
];

const socials = [
  { icon: TwitterIcon, link: "#" },
  { icon: FacebookIcon, link: "#" },
  { icon: TelegramIcon, link: "#" },
  { icon: YouTubeIcon, link: "#" },
  { icon: MusicNoteIcon, link: "#" },
  { icon: LinkedInIcon, link: "#" },
];

const Footer = ({ appConfig }) => {
  const theme = useTheme();

  const { Logo } = appConfig;

  const BusinessCard = () => (
    <>
      <img src={Logo} alt="Logo" style={{ height: 45, objectFit: "contain" }} />

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 300,
          maxWidth: 300,
        }}
      >
        Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit
        totam vel laboriosam vitae.
      </Typography>
    </>
  );

  const ContactSocials = () => (
    <Stack spacing={{ xs: 2, md: 4 }}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: 18,
        }}
      >
        Subscribe
      </Typography>

      <Stack direction="row">
        <TextField
          variant="outlined"
          fullWidth
          placeholder="info@yourgmail.com"
          sx={{ height: 55 }}
          InputProps={{
            sx: {
              borderRadius: "10px",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              fontSize: 14,
              fontWeight: 300,
            },
          }}
        />
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: theme.palette.background.purple,
            width: 60,
            height: 55,
            borderRadius: "10px",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <SendIcon sx={{ color: theme.palette.primary.white }} />
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1} justifyContent="space-between">
        {socials.map((item, i) => (
          <Box
            key={i}
            sx={{
              height: 40,
              width: 40,
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backgroundColor: theme.palette.background.color7,
              "&:hover": {
                color: theme.palette.primary.white,
                backgroundColor: theme.palette.background.purple,
              },
            }}
          >
            <item.icon />
          </Box>
        ))}
      </Stack>
    </Stack>
  );

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.darker,
        py: { xs: 8, md: 10 },
        px: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 2, md: 5, lg: 8 }}
          justifyContent="space-between"
        >
          <Grid item xs={12} md={3}>
            <BusinessCard />
          </Grid>

          {footerItems.map((items, i) => (
            <Grid item xs={12} md={2} key={i}>
              <Typography
                sx={{
                  fontWeight: 600,
                  mb: { xs: 1.5, md: 3 },
                  fontSize: 18,
                }}
              >
                {items.title}
              </Typography>

              {items.items.map((item, i) => (
                <Typography
                  key={item}
                  sx={{
                    fontWeight: 300,
                    mb: { xs: 0.7, md: 2 },
                    fontSize: 15,
                    letterSpacing: 0.1,
                    cursor: "pointer",
                    "&:hover": {
                      color: theme.palette.primary.purple,
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}

          <Grid item xs={12} md={3}>
            <ContactSocials />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default withAppConfig(Footer);
