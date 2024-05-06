/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

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
                  <strong>iBUA</strong> Innovation Hub, operating under the Commission of Science and Technology (COSTECH), is a government-backed initiative in Zanzibar aimed at fostering innovation and supporting the development of startups. It serves as a central hub, assisting both public and private innovation spaces, focusing on technology-driven businesses and entrepreneurship. The hub adopts an open innovation approach, recognizing the potential for innovation across various sectors and communities. Services provided include training, consultation, and linkages to academic and research institutions. iBUA supports startups from concept to enterprise stage, offering advisory services, resources, and sometimes seed capital. Additionally, it hosts events and facilitates entrepreneurial networking. Co-working spaces are provided to support collaboration, peer learning, and idea development, emphasizing the importance of working space in innovation.
                  {expanded ? (
                    <>
                      iBUA Innovation Hub understands the importance of working space on the development of innovation, especially at the ideation and prototype development stages. Thus, the Hub offers co-working spaces that provide office facilities for new startups, small businesses, and independent or freelance workers. The aim is to facilitate peer learning, networking, capacity development, and collaboration through the development of ideas, concepts, business models, and plans.
                      <br />
                      <button onClick={toggleExpansion} className="btn btn-warning mt-3">
                        Read Less
                      </button>
                    </>
                  ) : (
                    <button onClick={toggleExpansion} className="btn btn-warning mt-3">
                      Read More
                    </button>
                  )}
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
