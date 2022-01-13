import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Checkbox,
  Collapse,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import BreadcrumbsSection from "../../components/BreadcrumbsSection";
import RoundedButton from "../../components/Buttons/RoundedButton";
import ExploreNftCard from "../../components/Cards/ExploreNftCard";
import { NAVBAR_HEIGHT_DESKTOP, NAVBAR_HEIGHT_MOBILE } from "../../constants";
import { nftList } from "../../utils/dummyData";

const STATUSES = [
  { name: "buy", label: "Buy Now" },
  { name: "auction", label: "On Auction" },
  { name: "offers", label: "Has Offers" },
];

const CATEGORIES = [
  { name: "art", label: "Art" },
  { name: "music", label: "Music" },
  { name: "domain_names", label: "Domain Names" },
  { name: "virtual_worlds", label: "Virtual Worlds" },
  { name: "trading_cards", label: "Trading Cards" },
  { name: "collectibles", label: "Collectibles" },
  { name: "sports", label: "Sports" },
  { name: "utility", label: "Utility" },
];

const CHAINS = [
  { name: "ethereum", label: "Ethereum" },
  { name: "polygon", label: "Polygon" },
  { name: "klaytn", label: "Klaytn" },
];

const COLLECTIONS = [
  { name: "abstract", label: "Abstract" },
  { name: "patternlicious", label: "Patternlicious" },
  { name: "skecthify", label: "Skecthify" },
  { name: "cartoonism", label: "Cartoonism" },
  { name: "virtuland", label: "Virtuland" },
  { name: "papercut", label: "Papercut" },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Explore", active: true },
];

const ExplorePage = () => {
  const theme = useTheme();
  const [statusOpen, setStatusOpen] = useState(true);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [chainsOpen, setChainsOpen] = useState(true);
  const [collectionsOpen, setCollectionsOpen] = useState(true);

  const FilterLabel = ({ label, state, setState }) => (
    <Stack
      spacing={2}
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      sx={{ mb: 0.5, cursor: "pointer" }}
      onClick={() => setState(!state)}
    >
      <Typography sx={{ fontSize: 20, fontWeight: 600 }}>{label}</Typography>

      {state ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </Stack>
  );

  const FilterMenuItem = ({ label }) => (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox size="small" sx={{ height: 30, width: 30, ml: 0.5 }} />
        }
        label={
          <Typography sx={{ fontSize: 14, fontWeight: 300 }}>
            {label}
          </Typography>
        }
      />
    </FormGroup>
  );

  return (
    <Box
      sx={{
        marginTop: `-${NAVBAR_HEIGHT_MOBILE}px`,
        [theme.breakpoints.up("md")]: {
          marginTop: `-${NAVBAR_HEIGHT_DESKTOP}px`,
        },
      }}
    >
      <BreadcrumbsSection title="Explore NFTs" breadcrumbs={breadcrumbs} />

      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Grid container spacing={{ xs: 3, md: 6, lg: 9 }}>
          {/* Menu */}
          <Grid item xs={12} md={4} lg={3}>
            {/* Status */}
            <FilterLabel
              label="Status"
              state={statusOpen}
              setState={setStatusOpen}
            />
            <Collapse in={statusOpen} timeout="auto" unmountOnExit>
              <Stack>
                {STATUSES.map((item, i) => (
                  <FilterMenuItem key={i} label={item.label} />
                ))}
              </Stack>
            </Collapse>
            <Divider sx={{ my: 2 }} />

            {/* Categories */}
            <FilterLabel
              label="Categories"
              state={categoriesOpen}
              setState={setCategoriesOpen}
            />
            <Collapse in={categoriesOpen} timeout="auto" unmountOnExit>
              <Stack>
                {CATEGORIES.map((item, i) => (
                  <FilterMenuItem key={i} label={item.label} />
                ))}
              </Stack>
            </Collapse>
            <Divider sx={{ my: 2 }} />

            {/* Chains */}
            <FilterLabel
              label="Chains"
              state={chainsOpen}
              setState={setChainsOpen}
            />
            <Collapse in={chainsOpen} timeout="auto" unmountOnExit>
              <Stack>
                {CHAINS.map((item, i) => (
                  <FilterMenuItem key={i} label={item.label} />
                ))}
              </Stack>
            </Collapse>
            <Divider sx={{ my: 2 }} />

            {/* Collections */}
            <FilterLabel
              label="Collections"
              state={collectionsOpen}
              setState={setCollectionsOpen}
            />
            <Collapse in={collectionsOpen} timeout="auto" unmountOnExit>
              <Stack>
                {COLLECTIONS.map((item, i) => (
                  <FilterMenuItem key={i} label={item.label} />
                ))}
              </Stack>
            </Collapse>
          </Grid>

          {/* Collections */}
          <Grid item xs={12} md={8} lg={9}>
            <Grid container spacing={{ xs: 2, lg: 4 }}>
              {nftList.slice(0, 9).map((item, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ExplorePage;
