import React from "react";

const About = () => {
  return (
    <>
      <header className="site-header section-padding-img site-header-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 header-info">
              <h1>
                <span className="d-block text-primary">About</span>
                <span className="d-block text-dark">iBUA Hub</span>
              </h1>
            </div>
          </div>
        </div>
        <img src="images/moja.jpeg" className="header-image img-fluid" alt />
      </header>

      <section className="testimonial section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto col-11">
              <h2 className="text-center">
                About
                <br /> <span>iBUA</span> Hub
              </h2>
              <div className="slick-testimonial">
                <p className="lead">
                  <strong>iBUA</strong> Innovation Hub is a dynamic initiative
                  in Maruhubi, Zanzibar, fostering innovation and
                  entrepreneurship. It provides resources like mentorship,
                  training, and funding to empower entrepreneurs. iBUA aims to
                  strengthen Zanzibar's innovation ecosystem by creating a
                  collaborative community across sectors. It bridges academia,
                  industry, and government to drive economic growth and societal
                  progress. iBUA is a catalyst for change, promoting creativity,
                  entrepreneurship, and sustainable development in Zanzibar and
                  beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
