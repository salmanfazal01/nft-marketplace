import { Box, Container, Grid, Stack, useTheme } from "@mui/material";
import React from "react";
import AuthorBanner from "../../components/AuthorBanner";
import BreadcrumbsSection from "../../components/BreadcrumbsSection";
import RoundedButton from "../../components/Buttons/RoundedButton";
import ExploreNftCard from "../../components/Cards/ExploreNftCard";
import { NAVBAR_HEIGHT_DESKTOP, NAVBAR_HEIGHT_MOBILE } from "../../constants";
import { dummyAuthor, nftList } from "../../utils/dummyData";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Authors", href: "#" },
  { label: "Author", active: true },
];

const ProfileEdit = () => {
  const theme = useTheme();
  const { image, name, description, socials, eth_address } = dummyAuthor;

  return (
    <Box
      sx={{
        marginTop: `-${NAVBAR_HEIGHT_MOBILE}px`,
        [theme.breakpoints.up("md")]: {
          marginTop: `-${NAVBAR_HEIGHT_DESKTOP}px`,
        },
      }}
    >
      <BreadcrumbsSection title="Author" breadcrumbs={breadcrumbs} />

      <Container maxWidth="xl" sx={{ py: 10 }}>
        <AuthorBanner
          image={image}
          name={name}
          description={description}
          socials={socials}
          eth_address={eth_address}
          sx={{ mb: { xs: 5, md: 8 } }}
        />

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {nftList.slice(0, 8).map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <ExploreNftCard {...item} />
            </Grid>
          ))}
        </Grid>

        {/* Load More */}
        <Stack alignItems="center" sx={{ mt: 5 }}>
          <RoundedButton variant="white" sx={{ py: 1.5, px: 4 }}>
            Load More
          </RoundedButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProfileEdit;
