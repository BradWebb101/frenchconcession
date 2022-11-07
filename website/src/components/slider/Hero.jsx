import React from "react";
import Social from "../Social";

const heroContent = {
  shapeImage: "hero-shape",
  heroImage: "2",
  name: "French Concession",
  description: `Ice Cream made the French way.`,
};

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape"  data-aos-duration="1200">
          <img
            src={`img/hero/${heroContent.heroImage}.jpeg`}
            alt="hero image"
          />
        </div>
        <div className="extra">
          <p
            className="text"
          
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
           
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Social />
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
