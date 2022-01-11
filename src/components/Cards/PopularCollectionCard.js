import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const PopularCollectionCard = ({ likes, author, title, images }) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 2.5,
        borderRadius: "20px",
        height: "100%",
        width: "100%",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={{ xs: 0, sm: 2 }}
        flexWrap="wrap"
        sx={{ mb: 4 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box sx={{ position: "relative", mr: 1 }}>
            <img
              src={author.image}
              alt={author.name}
              style={{
                height: 64,
                width: 64,
                objectFit: "cover",
                borderRadius: "21px",
                display: "block",
              }}
            />

            {author.verified && (
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  height: 18,
                  width: 18,
                  backgroundColor: theme.palette.background.purple,
                  color: theme.palette.primary.white,
                  borderRadius: "50%",
                }}
              >
                <CheckIcon sx={{ fontSize: 14 }} />
              </Stack>
            )}
          </Box>

          <Stack>
            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Created by{" "}
              <Typography
                sx={{ fontSize: 15, fontWeight: 500 }}
                component="span"
              >
                {author.name}
              </Typography>
            </Typography>
          </Stack>
        </Stack>

        {!!likes && (
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{
              borderRadius: "8px",
              height: 30,
              padding: "2px 11px",
              backgroundColor: theme.palette.background.default,
              color: theme.palette.background.white,
              [theme.breakpoints.down("sm")]: {
                marginTop: "5px !important",
              },
            }}
          >
            <FavoriteOutlinedIcon fontSize="small" />
            <Typography sx={{ fontSize: 14 }}>{likes}</Typography>
          </Stack>
        )}
      </Stack>

      <Grid container direction="row" spacing={1}>
        <Grid item xs={6}>
          <img
            src={images[0]}
            alt={author.name}
            style={{
              height: "270px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={1} sx={{ flex: 1 }}>
            <Stack direction="row" spacing={1}>
              <img
                src={images[1]}
                alt={author.name}
                style={{
                  height: "100px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <img
                src={images[2]}
                alt={author.name}
                style={{
                  height: "100px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Stack>
            <img
              src={images[3]}
              alt={author.name}
              style={{
                height: "162px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PopularCollectionCard;
