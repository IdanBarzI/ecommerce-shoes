import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="overlay"></div>
      <div className="hero-desc">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <img
          src="/assets/logo.svg"
          alt="logo"
          width="500px"
          style={{
            filter:
              "invert(96%) sepia(4%) saturate(0%) hue-rotate(248deg) brightness(104%) contrast(103%)",
          }}
        />
        <h1>{heroBanner.largeText1}</h1>
        <h3>{heroBanner.midText}</h3>
        {/* <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        /> */}

        <button type="button">{heroBanner.buttonText}</button>
        {/* <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div> */}
      </div>
    </div>
  );
};

export default HeroBanner;
