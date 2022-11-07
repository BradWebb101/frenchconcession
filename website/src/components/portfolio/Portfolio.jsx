import React from "react";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos-duration="1200">
        <Slider {...settings}>
          <li>
            <div className="list_inner">
              <div className="image">
                                  <img
                    src="img/portfolio/2.jpeg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
                  
                  <ReactTooltip
                    id="product"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Vanilla Choc Chip Caramel</h5>
                     
                    </div>
                  </ReactTooltip>
            
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
             
                  <img
                    src="img/portfolio/3.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="dribbble"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Mince Pie</h5>
                      
                    </div>
                  </ReactTooltip>
                
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
             
                  <img
                    src="img/portfolio/5.jpeg"
                    data-tip
                    data-for="facebook"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="facebook"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Chocolate</h5>
                    </div>
                  </ReactTooltip>
                
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
           
                  <img
                    src="img/portfolio/6.jpeg"
                    data-tip
                    data-for="youtube"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="youtube"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Pistachio</h5>
                    
                    </div>
                  </ReactTooltip>
             
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
              
                  <img
                    src="img/portfolio/7.jpeg"
                    data-tip
                    data-for="web"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="web"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Malt Choc Crisp</h5>
                      
                    </div>
                  </ReactTooltip>
               
              </div>
            </div>
          </li>
          {/* End li */}
          <li>
            <div className="list_inner">
              <div className="image">
           
                  <img
                    src="img/portfolio/8.jpeg"
                    data-tip
                    data-for="raspberry"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="raspberry"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Raspberry Cheesecake</h5>
                    
                    </div>
                  </ReactTooltip>
             
              </div>
            </div>
          </li>
          {/* End li */}
          <li>
            <div className="list_inner">
              <div className="image">
           
                  <img
                    src="img/portfolio/9.jpeg"
                    data-tip
                    data-for="crack"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="crack"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Crack Pie</h5>
                    
                    </div>
                  </ReactTooltip>
             
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
           
                  <img
                    src="img/portfolio/10.jpeg"
                    data-tip
                    data-for="cake"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="cake"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Cake Batter</h5>
                    
                    </div>
                  </ReactTooltip>
             
              </div>
            </div>
          </li>
          {/* End li */}
        </Slider>
      </ul>
    </div>
  );
};

export default Portfolio;
