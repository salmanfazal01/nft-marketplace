import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import RoundedButton from "../Buttons/RoundedButton";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HistoryIcon from "@mui/icons-material/History";

const ExploreNftCard = ({
  image,
  likes,
  title,
  tag,
  bid = 0.0,
  creator = {},
}) => {
  const theme = useTheme();
  const [showBidBtn, setShowBidBtn] = useState(false);

  const showButton = (e) => {
    e.preventDefault();
    setShowBidBtn(true);
  };

  const hideButton = (e) => {
    e.preventDefault();
    setShowBidBtn(false);
  };

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
      <Box
        sx={{ mb: 1.5, position: "relative", cursor: "pointer" }}
        onMouseEnter={(e) => showButton(e)}
        onMouseLeave={(e) => hideButton(e)}
      >
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

        {showBidBtn && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <RoundedButton variant='white'>Place Bid</RoundedButton>
          </Box>
        )}

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

      <Typography
        noWrap
        sx={{
          fontSize: 18,
          fontWeight: 500,
          maxWidth: "75%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          mb: 1.5,
        }}
      >
        "{title}"
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1.5 }}
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

      <Divider sx={{ mb: 1.5 }} />

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack>
          <Typography sx={{ fontSize: 13 }}>Current Bid</Typography>
          <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
            {bid} ETH{" "}
            <Typography
              variant="caption"
              component="span"
              sx={{ fontWeight: 300 }}
            >
              = $12,245
            </Typography>
          </Typography>
        </Stack>

        <Button sx={{ textTransform: "inherit" }}>
          <HistoryIcon fontSize="small" sx={{ mr: 0.5 }} />
          View History
        </Button>
      </Stack>
    </Paper>
  );
};

export default ExploreNftCard;
