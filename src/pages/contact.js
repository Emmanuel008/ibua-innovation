/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Contact = () => {
  return (
    <div>
      <header className="site-header section-padding-img site-header-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 header-info">
              <h1>
                <span className="d-block text-primary">Feel free </span>
                <span className="d-block text-dark">To reach Us</span>
              </h1>
            </div>
          </div>
        </div>
        <img src="images/saba.jpeg" className="header-image img-fluid" alt />
      </header>

      <section className="contact section-padding">
        <div className="container">
          <div className="row d-felx justify-content-center">
            <div className="col-lg-6 col-12 mt-5 ms-auto">
              <div className="row">
                <div className="col-6 border-end contact-info">
                  <h6 className="mb-3">Our email</h6>
                  <a href="ibua.innovation@gmail.com" className="custom-link">
                    ibua.innovation@gmail.com
                    <i className="bi-arrow-right ms-2" />
                  </a>
                </div>
                <div className="col-6 contact-info">
                  <h6 className="mb-3">Contact</h6>
                  <a href="mailto:studio@company.com" className="custom-link">
                    +255 776377451
                    <i className="bi-arrow-right ms-2" />
                  </a>
                </div>
                <div className="col-6 border-top border-end contact-info">
                  <h6 className="mb-3">Our Office</h6>
                  <p className="text-muted">Maruhubi, Zanzibar</p>
                </div>
                <div className="col-6 border-top contact-info">
                  <h6 className="mb-3">Our Socials</h6>
                  <ul className="social-icon">
                    <li>
                      <a href="#" className="social-icon-link bi-messenger" />
                    </li>
                    <li>
                      <a href="#" className="social-icon-link bi-youtube" />
                    </li>
                    <li>
                      <a href="#" className="social-icon-link bi-instagram" />
                    </li>
                    <li>
                      <a href="#" className="social-icon-link bi-whatsapp" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
