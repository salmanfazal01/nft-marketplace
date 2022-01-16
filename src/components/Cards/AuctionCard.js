import { Box, Chip, Paper, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalFireOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import Countdown from "../Countdown";
import RoundedButton from "../Buttons/RoundedButton";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useNavigate } from "react-router-dom";

const AuctionCard = ({
  image,
  likes,
  title,
  tag,
  bid = 0.0,
  creator = {},
  auction = {},
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
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
      onClick={() => navigate("/nft/item")}
    >
      <Box
        sx={{ mb: 2, position: "relative", cursor: "pointer" }}
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

        {showBidBtn && (
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, 0%)",
            }}
          >
            <RoundedButton
              variant="white-contained"
              icon={<BusinessCenterIcon fontSize="small" />}
            >
              Place Bid
            </RoundedButton>
          </Box>
        )}

        {auction?.active && (
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "absolute",
              bottom: 8,
              left: "50%",
              borderRadius: "13px",
              height: 36,
              width: 151,
              transform: "translateX(-50%)",
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.background.inverse,
            }}
          >
            <LocalFireOutlinedIcon
              sx={{
                color: theme.palette.primary.purple,
              }}
            />
            <Countdown eventTime={auction.ending} variant="body2">
              {likes}
            </Countdown>
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
    </Paper>
  );
};

export default AuctionCard;
