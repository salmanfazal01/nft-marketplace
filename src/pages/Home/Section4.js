import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import ExploreButton from "../../components/Buttons/ExploreButton";
import RoundedButton from "../../components/Buttons/RoundedButton";
import NftCard from "../../components/Cards/NftCard";
import { nftList } from "../../utils/dummyData";
import SectionTitle from "./SectionTitle";
import GridViewIcon from "@mui/icons-material/GridView";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import FilterListIcon from "@mui/icons-material/FilterList";

const Section4 = () => {
  return (
    <Container maxWidth="xl" sx={{ pb: 10 }}>
      <SectionTitle
        title="Today's Picks"
        rightElement={<ExploreButton>EXPLORE MORE</ExploreButton>}
        sx={{ mb: 5 }}
      />

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 3 }}
        spacing={2}
        flexWrap="wrap-reverse"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          flexWrap="wrap"
        >
          <RoundedButton
            variant="purple"
            icon={<GridViewIcon />}
            sx={{ my: 2 }}
          >
            Category
          </RoundedButton>
          <RoundedButton
            variant="purple"
            icon={<MonetizationOnOutlinedIcon />}
            sx={{ my: 2 }}
          >
            Price Range
          </RoundedButton>
          <RoundedButton
            variant="purple"
            icon={<BoltOutlinedIcon />}
            sx={{ my: 2 }}
          >
            Sale Type
          </RoundedButton>
          <RoundedButton
            variant="purple"
            icon={<ViewInArIcon />}
            sx={{ my: 2 }}
          >
            Blockchain
          </RoundedButton>
        </Stack>

        <RoundedButton
          variant="purple"
          icon={<FilterListIcon />}
          sx={{ my: 2 }}
        >
          Sort By: Recently Added
        </RoundedButton>
      </Stack>

      <Grid container spacing={4} sx={{ mb: 5 }}>
        {nftList.slice(0, 8).map((nft, i) => (
          <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
            <NftCard {...nft} />
          </Grid>
        ))}
      </Grid>

      <Stack alignItems="center">
        <RoundedButton variant="white" sx={{ py: 1.5, px: 4 }}>
          Load More
        </RoundedButton>
      </Stack>
    </Container>
  );
};

export default Section4;
