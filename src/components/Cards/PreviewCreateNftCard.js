import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HistoryIcon from "@mui/icons-material/History";
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
import React from "react";
import { useWatch } from "react-hook-form";
import { Avatar1, Nft1 } from "../../utils/dummyData";

const PreviewCreateNftCard = ({ tag, creator = {}, control }) => {
  const theme = useTheme();

  const title = useWatch({ control, name: "title" }) || "Title Here";
  const price = useWatch({ control, name: "price" }) || 1;
  const _image = useWatch({ control, name: "image" }) || Nft1;
  const image =
    typeof _image === "object" ? URL.createObjectURL(_image) : _image;

  return (
    <Paper
      sx={{
        p: 2.5,
        borderRadius: "20px",
        width: "100%",
      }}
    >
      <Box sx={{ mb: 1.5, position: "relative", cursor: "pointer" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxHeight: "270px",
            objectFit: "cover",
            borderRadius: "20px",
            backgroundPosition: "center center",
          }}
        />

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
          <Typography variant="body2">0</Typography>
        </Stack>
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
            src={creator.image || Avatar1}
            alt={creator.name || "Creator Name"}
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
              {creator.name || "Creator Name"}
            </Typography>
          </Stack>
        </Stack>

        <Chip
          label={tag || "TAG"}
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
            {price || 1} ETH{" "}
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

export default PreviewCreateNftCard;
