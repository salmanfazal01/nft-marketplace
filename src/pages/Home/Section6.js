import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GridViewIcon from "@mui/icons-material/GridView";
import ImageIcon from "@mui/icons-material/Image";
import { Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: AccountBalanceWalletIcon,
    color: "purple",
    title: "Set Up Your Wallet",
    subtitle:
      "Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.",
  },
  {
    icon: GridViewIcon,
    color: "green",
    title: "Create Your Collection",
    subtitle:
      "Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection",
  },
  {
    icon: ImageIcon,
    color: "pink",
    title: "Add Your NFTs",
    subtitle:
      "Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    icon: BookmarkIcon,
    color: "red",
    title: "List Them For Sale",
    subtitle:
      "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
  },
];

const Section6 = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ pb: 10 }}>
      <SectionTitle title="Create And Sell Your NFTs" sx={{ mb: 5 }} />

      <Grid container spacing={{ xs: 3, md: 5 }}>
        {services.map((item, i) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Stack>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    height: 60,
                    width: 60,
                    borderRadius: "16px",
                    backgroundColor: theme.palette.background[item.color],
                    mb: 3,
                  }}
                >
                  <item.icon
                    sx={{
                      height: 30,
                      width: 30,
                      color: theme.palette.primary.white,
                    }}
                  />
                </Stack>

                <Typography sx={{ fontSize: 24, fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>

                <Typography sx={{ fontSize: 14, fontWeight: 300 }}>
                  {item.subtitle}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Section6;
