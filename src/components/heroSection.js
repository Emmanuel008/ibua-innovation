import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="slick-slideshow">
        <div className="slick-custom">
          <img src="images/COSTECH-15 - Copy.jpg" className="img-fluid" alt />
          <div className="slick-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-10">
                  <h1 className="slick-title">iBUA Innovation Hub</h1>
                  <p className="lead text-white mt-lg-3 mb-lg-5">
                    <strong>
                      iBUA Innovation Hub is a dynamic initiative in Maruhubi,
                      Zanzibar, fostering innovation and entrepreneurship.
                    </strong>
                  </p>
                  <a href="about.html" className="btn custom-btn">
                    Learn more about us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slick-custom">
          <img src="images/COSTECH-17 - Copy.jpg" className="img-fluid" alt />
          <div className="slick-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-10">
                  <h1 className="slick-title">iBUA Hub</h1>
                  <p className="lead text-white mt-lg-3 mb-lg-5">
                    <strong>
                      iBUA is a catalyst for change, promoting creativity,
                      entrepreneurship, and sustainable development in Zanzibar
                      and beyond.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slick-custom">
          <img src="images/COSTECH-10 - Copy.jpg" className="img-fluid" alt />
          <div className="slick-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-10">
                  <h1 className="slick-title">
                    Strength Innovation in Zanzibar
                  </h1>
                  <p className="lead text-white mt-lg-3 mb-lg-5">
                    <strong>
                      iBUA aims to strengthen Zanzibar's innovation ecosystem by
                      creating a collaborative community across sectors.
                    </strong>
                  </p>
                  <a href="about.html" className="btn custom-btn">
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
