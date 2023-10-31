import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ source, className }) => {
    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            src={source}
        />
    );
};

export default Img;