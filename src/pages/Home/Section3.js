import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, useTheme } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import AuthorCard from "../../components/Cards/AuthorCard";
import { authorList } from "../../utils/dummyData";
import SectionTitle from "./SectionTitle";

const Section3 = () => {
  const theme = useTheme();

  const PreviousArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <ArrowBackIosIcon
        className={className}
        sx={{
          ...style,
          color: theme.palette.primary.inverse,
          position: "absolute",
          zIndex: 999,
          top: -53,
          left: "calc(100% - 70px)",
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
      <ArrowForwardIosIcon
        className={className}
        sx={{
          ...style,
          color: theme.palette.primary.inverse,
          position: "absolute",
          zIndex: 999,
          top: -53,
          right: 0,
          "&:hover": {
            color: theme.palette.primary.purple,
          },
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    variableWidth: true,
    swipeToSlide: true,
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 10 }}>
      <SectionTitle title="Top Sellers" sx={{ mb: 5 }} />

      <Slider {...settings}>
        {authorList.map((author, i) => (
          <Box key={i} sx={{ px: 3 }}>
            <AuthorCard {...author} />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Section3;
