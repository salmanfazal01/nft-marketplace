import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import RoundedButton from "../Buttons/RoundedButton";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HistoryIcon from "@mui/icons-material/History";

const NftCard = ({ image, likes, title, tag, bid = 0.0, creator = {} }) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 2.5,
        borderRadius: "20px",
        height: "100%",
        width: "100%",
        transition: "all .4s ease",
        "&:hover": {
          transform: "translateY(-10px)",
        },
      }}
    >
      <Box sx={{ mb: 2, position: "relative", cursor: "pointer" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxHeight: "270px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        {!!likes && (
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{
              position: "absolute",
              top: 13,
              right: 11,
              borderRadius: "8px",
              height: 30,
              padding: "2px 11px",
              backgroundColor: theme.palette.background.black2,
              color: theme.palette.background.white,
            }}
          >
            <FavoriteOutlinedIcon fontSize="small" />
            <Typography variant="body2">{likes}</Typography>
          </Stack>
        )}
      </Box>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography
          noWrap
          sx={{
            fontSize: 18,
            fontWeight: 500,
            maxWidth: "75%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>

        <Chip
          label={tag}
          sx={{
            py: 0.5,
            height: "unset",
            color: theme.palette.primary.white,
            backgroundColor: theme.palette.background.purple,
          }}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <img
            src={creator.image}
            alt={creator.name}
            style={{
              height: 44,
              width: 44,
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />

          <Stack>
            <Typography sx={{ fontSize: 13 }}>Creator</Typography>
            <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
              {creator.name}
            </Typography>
          </Stack>
        </Stack>

        <Stack>
          <Typography sx={{ fontSize: 13 }}>Current Bid</Typography>
          <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
            {bid} ETH
          </Typography>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <RoundedButton icon={<BusinessCenterIcon fontSize="small" />}>
          Place Bid
        </RoundedButton>

        <Button sx={{ textTransform: "inherit" }}>
          <HistoryIcon fontSize="small" sx={{ mr: 0.5 }} />
          View History
        </Button>
      </Stack>
    </Paper>
  );
};

export default NftCard;
