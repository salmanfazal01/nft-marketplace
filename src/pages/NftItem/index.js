import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import BreadcrumbsSection from "../../components/BreadcrumbsSection";
import { NAVBAR_HEIGHT_DESKTOP, NAVBAR_HEIGHT_MOBILE } from "../../constants";
import Section2 from "../Home/Section2";
import { NftItem as NftData } from "../../utils/dummyData";
import ResponsiveText from "../../components/ResponsiveText";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RoundedButton from "../../components/Buttons/RoundedButton";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import moment from "moment";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Item", active: true },
];

const actions = {
  bid: "placed a bid",
  accepted: "bid accepted",
};

const NftItem = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [tabValue, setTabValue] = useState(0);

  const {
    image,
    title,
    likes,
    views,
    creator,
    owner,
    description,
    provenance,
    history,
    info,
    bid,
  } = NftData;

  const LikesChip = ({ icon, text }) => (
    <Stack
      direction="row"
      spacing={0.7}
      alignItems="center"
      sx={{
        borderRadius: "40px",
        padding: "8px 15px",
        backgroundColor: theme.palette.background.color5,
        color: theme.palette.primary.inverse,
      }}
    >
      {icon}
      <Typography variant="body2">{text}</Typography>
    </Stack>
  );

  const TelegramButton = ({ icon }) => (
    <IconButton
      sx={{
        backgroundColor: theme.palette.background.color7,
        "&:hover": {
          backgroundColor: theme.palette.background.purple,
          color: theme.palette.primary.white,
        },
      }}
    >
      {icon}
    </IconButton>
  );

  const CreatorPaper = ({ title, name, image }) => (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        p: 1.8,
        borderRadius: "16px",
        backgroundColor: theme.palette.background.color7,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <img
          src={image}
          alt={name}
          style={{
            height: 44,
            width: 44,
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />

        <Stack>
          <Typography sx={{ fontSize: 13, fontWeight: 300 }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: 15, fontWeight: 500 }}>{name}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );

  const TabPanel = ({ children, index, ...other }) => (
    <div role="tabpanel" hidden={tabValue !== index} {...other}>
      {tabValue === index && (
        <Box
          sx={{
            height: 210,
            overflowY: "auto",
            pr: { xs: 2, md: 4 },
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
              backgroundColor: isDark
                ? theme.palette.background.black
                : theme.palette.background.color7,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.background.grey,
              borderRadius: "3px",

              "&:hover": {
                background: isDark ? "rgba(255,255,255,.2)" : "rgba(0,0,0,.3)",
              },
            },
          }}
        >
          {children}
        </Box>
      )}
    </div>
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
      <BreadcrumbsSection title="Item Details" breadcrumbs={breadcrumbs} />

      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 6, lg: 8 }}>
          {/* Left Image */}
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src={image}
                alt={title}
                style={{
                  height: "100%",
                  width: "100%",
                  maxWidth: "670px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Grid>

          {/* Right Details */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              {/* Title */}
              <ResponsiveText variant="h4" sx={{ fontWeight: 600 }}>
                " {title} "
              </ResponsiveText>

              {/* Likes Row */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {/* Likes */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <LikesChip
                    text={views}
                    icon={<RemoveRedEyeOutlinedIcon fontSize="small" />}
                  />
                  <LikesChip
                    text={likes}
                    icon={<FavoriteBorderOutlinedIcon fontSize="small" />}
                  />
                </Stack>

                {/* Buttons */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <TelegramButton icon={<TelegramIcon />} />
                  <TelegramButton icon={<MoreHorizIcon />} />
                </Stack>
              </Stack>

              {/* Owner - Creator */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
                spacing={{ xs: 2, md: 4 }}
              >
                <CreatorPaper
                  title="Owned By"
                  name={owner.name}
                  image={owner.image}
                />

                <CreatorPaper
                  title="Created By"
                  name={creator.name}
                  image={creator.image}
                />
              </Stack>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 300,
                  color: theme.palette.primary.grey,
                }}
              >
                {description}
              </Typography>

              {/* Place Bid */}
              <RoundedButton
                variant="purple"
                icon={<BusinessCenterIcon fontSize="small" />}
                sx={{ py: 1.5 }}
              >
                Place a bid
              </RoundedButton>

              {/* Tabs */}
              <Box>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    mr: { xs: 2, md: 4 },
                  }}
                >
                  <Tabs
                    value={tabValue}
                    onChange={(_, v) => setTabValue(v)}
                    sx={{
                      ".Mui-selected": { color: theme.palette.primary.purple },
                      ".MuiTabs-indicator": {
                        backgroundColor: theme.palette.primary.purple,
                      },
                    }}
                  >
                    <Tab label="Bid History" sx={{ textTransform: "none" }} />
                    <Tab label="Info" sx={{ textTransform: "none" }} />
                    <Tab label="Provenance" sx={{ textTransform: "none" }} />
                  </Tabs>
                </Box>

                {/* History */}
                <TabPanel index={0}>
                  <List>
                    {history.map((item, i) => (
                      <React.Fragment key={i}>
                        <ListItem disablePadding sx={{ py: 1.5 }}>
                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ width: "100%" }}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1}
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                  height: 44,
                                  width: 44,
                                  objectFit: "cover",
                                  borderRadius: "15px",
                                }}
                              />

                              <Stack>
                                <Typography
                                  sx={{ fontSize: 15, fontWeight: 500 }}
                                >
                                  {item.name}
                                  <Typography
                                    component="span"
                                    sx={{
                                      fontSize: 13,
                                      fontWeight: 300,
                                      ml: 0.7,
                                    }}
                                  >
                                    {actions[item.action]}
                                  </Typography>
                                </Typography>
                                <Typography
                                  sx={{ fontSize: 13, fontWeight: 300 }}
                                >
                                  {moment(item.timestamp).fromNow()}
                                </Typography>
                              </Stack>
                            </Stack>

                            <Stack>
                              <Typography
                                sx={{ fontSize: 15, fontWeight: 500 }}
                              >
                                {bid} ETH
                              </Typography>
                              <Typography
                                sx={{ fontSize: 13, fontWeight: 300 }}
                              >
                                = $12,246
                              </Typography>
                            </Stack>
                          </Stack>
                        </ListItem>

                        <Divider component="li" />
                      </React.Fragment>
                    ))}
                  </List>
                </TabPanel>

                {/* Info */}
                <TabPanel index={1}>
                  <List>
                    {info.map((item, i) => (
                      <React.Fragment key={i}>
                        <ListItem disablePadding sx={{ py: 1.5 }}>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                          >
                            <img
                              src={image}
                              alt={item.name}
                              style={{
                                height: 44,
                                width: 44,
                                objectFit: "cover",
                                borderRadius: "15px",
                              }}
                            />

                            <Stack>
                              <Typography
                                sx={{ fontSize: 15, fontWeight: 500 }}
                              >
                                {item.name}
                                <Typography
                                  component="span"
                                  sx={{
                                    fontSize: 13,
                                    fontWeight: 300,
                                    ml: 0.7,
                                  }}
                                >
                                  {actions[item.action]}
                                </Typography>
                              </Typography>
                              <Typography
                                sx={{ fontSize: 13, fontWeight: 300 }}
                              >
                                {moment(item.timestamp).fromNow()}
                              </Typography>
                            </Stack>
                          </Stack>
                        </ListItem>

                        <Divider component="li" />
                      </React.Fragment>
                    ))}
                  </List>
                </TabPanel>

                {/* Provenance */}
                <TabPanel index={2}>
                  <Typography sx={{ fontWeight: 300, fontSize: 14, py: 1.5 }}>
                    {provenance}
                  </Typography>
                </TabPanel>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box>
          <Section2 />
        </Box>
      </Container>
    </Box>
  );
};

export default NftItem;
