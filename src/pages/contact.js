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
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="mb-4">
                Let's <span>begin</span>
              </h2>
              <form className="contact-form me-lg-5 pe-lg-3" role="form">
                <div className="form-floating">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Full name"
                    required
                  />
                  <label htmlFor="name">Full name</label>
                </div>
                <div className="form-floating my-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="Email address"
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating my-4">
                  <input
                    type="subject"
                    name="subject"
                    id="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="form-floating mb-4">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Leave a comment here"
                    required
                    style={{ height: 160 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Tell us about the project</label>
                </div>
                <div className="col-lg-5 col-6">
                  <button type="submit" className="form-control">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-12 mt-5 ms-auto">
              <div className="row">
                <div className="col-6 border-end contact-info">
                  <h6 className="mb-3">Our email</h6>
                  <a href="mailto:hello@company.com" className="custom-link">
                    ibuainnovationhub@gmail.com
                    <i className="bi-arrow-right ms-2" />
                  </a>
                </div>
                <div className="col-6 contact-info">
                  <h6 className="mb-3">Contact</h6>
                  <a href="mailto:studio@company.com" className="custom-link">
                    +255 625313162
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
