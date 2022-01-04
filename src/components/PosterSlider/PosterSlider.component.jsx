import React from "react";
import Slider from "react-slick";

//components
import Poster from "../Poster/poster.component";

//configs
import PosterCarouselSettings from "../../config/PosterCarousel.config";

export const PosterSlider = (props) => {

const sliderconfig = props.config ? props.config : PosterCarouselSettings

  return (
    <>
      <div className="flex flex-col items-start">
        <h3
          className={`text-2xl font-bold my-2 ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.subtitle}
        </p>
      </div>
      <Slider { ...sliderconfig }>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
