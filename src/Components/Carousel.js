import React from "react";
import Slider from "react-slick";
import { Typography } from "@material-ui/core";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 1,
};

const Carousel = ({ list }) => {
  return (
    <Slider {...settings}>
      {list.map((element, index) => (
        <div key={index}>
          {element.image && <img src={element.image} alt="Carousel" className="carousel-item-img" />}
          {element.subtitle && (
            <Typography variant="subtitle1" align="center">
              {element.subtitle}
            </Typography>
          )}
          {element.description && (
            <Typography variant="body1" align="center">
              {element.description}
            </Typography>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
