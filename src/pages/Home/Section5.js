import { Container, Grid } from "@mui/material";
import React from "react";
import ExploreButton from "../../components/Buttons/ExploreButton";
import PopularCollectionCard from "../../components/Cards/PopularCollectionCard";
import { popularCollectionList } from "../../utils/dummyData";
import SectionTitle from "./SectionTitle";

const Section5 = () => {
  return (
    <Container maxWidth="xl" sx={{ pb: 10 }}>
      <SectionTitle
        title="Popular Collection"
        rightElement={<ExploreButton>EXPLORE MORE</ExploreButton>}
        sx={{ mb: 5 }}
      />

      <Grid container spacing={4}>
        {popularCollectionList.map((item, i) => (
          <Grid item xs={12} md={6} lg={4} key={i}>
            <PopularCollectionCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section5;
