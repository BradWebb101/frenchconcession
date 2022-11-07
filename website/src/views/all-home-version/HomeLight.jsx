import React from "react";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import AboutOpposite from "../../components/about/About opposite";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog"
import Footer from "../../components/footer/Footer"
import ScrollButton from "../../components/ScrollButton";

const HomeLight = () => {
  document.body.classList.add("light");
  return (
    <div>
      {/* End Header */}
      <Hero />
      <ScrollButton />
      {/* End Hero */}
      <About />
      {/* End Hero */}
      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Flavours</h3>
            <p>
            Our French Concession Ice Cream flavours change regularly based on seasonality and availabilty of produce. Check us out on Instagram to see our current flavour selection. 
            </p>
          </div>
          {/* End edian_tm_title */}
          <Portfolio />
        </div>
        <AboutOpposite />
      </div>
      {/* End Portfolio */}
      
      <div className="edina_tm_news" id="blog">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Current Stockists</h3>
            <p>
            If you are interested in stocking French Concession Ice Cream at your cafe or restaurant, please reach out to us on Instagram.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Blog />     
             
        </div>
      </div>
      <Footer />  
  </div>
  );
  
};

export default HomeLight;
