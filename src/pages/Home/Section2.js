import AdjustIcon from "@mui/icons-material/Adjust";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecordOutlined";
import { Box, Container, useTheme } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ExploreButton from "../../components/Buttons/ExploreButton";
import NftCard from "../../components/Cards/NftCard";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { nftList } from "../../utils/dummyData";
import SectionTitle from "./SectionTitle";

const Section2 = () => {
  const theme = useTheme();
  const [slideNum, setSlideNum] = useState(0);

  const { width } = useWindowDimensions();

  const slidesVisible =
    width > 1430 ? 4 : width > 1070 ? 3 : width > 710 ? 2 : 1;
  const totalDots = Math.ceil(nftList.length / slidesVisible);

  const PreviousArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <ArrowBackIcon
        className={className}
        sx={{
          ...style,
          color: theme.palette.primary.inverse,
          position: "absolute",
          top: "100%",
          left: "40%",
          zIndex: 999,
          [theme.breakpoints.up("sm")]: {
            left: `calc(50% - ${totalDots * 20 + 20}px)`,
          },
          "&:hover": {
            color: theme.palette.primary.purple,
          },
        }}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <ArrowForwardIcon
        className={className}
        sx={{
          ...style,
          color: theme.palette.primary.inverse,
          position: "absolute",
          top: "100%",
          right: "40%",
          zIndex: 999,
          [theme.breakpoints.up("sm")]: {
            right: `calc(50% - ${totalDots * 20 + 20}px)`,
          },
          "&:hover": {
            color: theme.palette.primary.purple,
          },
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    customPaging: (i) => (
      <Box sx={{ mt: -2 }}>
        {slideNum === i ? (
          <AdjustIcon sx={{ fontSize: 14 }} />
        ) : (
          <FiberManualRecordIcon sx={{ fontSize: 12 }} />
        )}
      </Box>
    ),
    // beforeChange: (current, next) => setSlideNum(next),
    afterChange: (current) => {
      const calc = Math.floor(current / slidesVisible + 0.5);

      setSlideNum(calc);
    },
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 8 }}>
      <SectionTitle
        title="Live Auctions"
        rightElement={<ExploreButton>EXPLORE MORE</ExploreButton>}
      />

      <Slider {...settings}>
        {nftList.map((nft, i) => (
          <Box sx={{ maxWidth: 330, py: 5, m: 1 }} key={i}>
            <NftCard {...nft} />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Section2;
