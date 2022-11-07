import React, { useState } from "react";
import Skills from "../skills/Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
      <div className="about_title">
        </div>
        <div className="content">
        <div className="rightpartreverse">
            <div className="image">
              <img src="img/thumbs/26-35.jpg" alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "img/about/1.jpeg"
                  })`,
                }}
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              
            </div>
          </div>
          

          <div
            className="leftpart"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Our <span>Ingredients</span>
              </h3>
              <p>
              Each French Concession Ice Cream begins with a base 'creme anglaise' made from cream, millk, eggs, sugar and salt. We then add inclusions such as Callebaut Chocolate from Belgium, Vanilla Beans from Tonga or Pistachios from Iran to make our unique flavours. 
              </p> 
              
             
              
            </div>
            <br></br>
            <div className="info">
              <h3>
                Our <span>Partners</span>
              </h3>
              <p>
              We source the best ingredients to make French Concession Ice Cream. We partner with the best Australian producers and ditributors such as Saint David Dairy, The Eggporium, Natural Moorish and Creative Ingredients to create our Ice Cream. 
              
              </p>

            </div>
          </div>
          {/* End leftpart */}

         
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
