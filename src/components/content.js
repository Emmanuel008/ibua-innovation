import React from "react";

const Content = () => {
  return (
    <>
      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-5">
                Latest <span> Updates</span>
              </h2>
            </div>
            {/* <div class="col-lg-2 col-12 mt-auto mb-auto">
                      <ul class="nav nav-pills mb-5 mx-auto justify-content-center align-items-center" id="pills-tab" role="tablist">
                      </ul>
                  </div> */}
            <div className="col-lg-10 col-12">
              <div className="tab-content mt-2" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <img
                        src="images/saba.jpeg"
                        className="img-fluid mh-100"
                        alt
                      />
                    </div>
                    <div className="col-lg-5 col-12">
                      <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">
                          iBUA <span>Hub</span> <br />
                          Talent <span>Pool</span> Program
                        </h4>
                        <p>
                          Specialized initiative designed to identify, nurture,
                          and develop exceptional talent in various fields
                          within the Zanzibar innovation ecosystem.
                        </p>
                        <div className="mt-2 mt-lg-auto">
                          <a href="about.html" className="custom-link mb-2">
                            Read more
                            <i className="bi-arrow-right ms-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12">
              <div className="tab-content mt-2" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <img
                        src="images/COSTECH-19 - Copy.jpg"
                        className="img-fluid mh-100"
                        alt
                      />
                    </div>
                    <div className="col-lg-5 col-12">
                      <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">
                          iBUA <span>Hub</span> <br />
                          Management <span>training</span> Support
                        </h4>
                        <p>
                          Aims to equip entrepreneurs, innovators, and business
                          leaders with the skills, knowledge, and tools
                          necessary to effectively manage and grow their
                          ventures.
                        </p>
                        <div className="mt-2 mt-lg-auto">
                          <a href="about.html" className="custom-link mb-2">
                            Read more
                            <i className="bi-arrow-right ms-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 align-items-center justify-content-center d-flex">
        <button
          type="button"
          className="btn text-white"
          style={{ backgroundColor: "#FF4400" }}
        >
          <a href="Updates.html" className="View More text-white">
            View More
          </a>
        </button>
      </section>
      <section className="featured-product section-padding">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <div className="sec-heading text-center">
                    <h6>Testimonial</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="clients-carousel owl-carousel">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        alt
                        className="img-fluid"
                        src="images/COSTECH-13 - Copy.jpg"
                      />
                    </div>
                    <div className="content">
                      <p>
                        "iBUA Hub imenishika mkono kunisaidia katika hatua zangu
                        za kibunifu."
                      </p>
                      <h4>Sharmila Hassan</h4>
                      <h6>Mbunifu</h6>
                    </div>
                  </div>
                  <div className="single-box">
                    <div className="img-area">
                      <img alt className="img-fluid" src="images/ima.jpeg" />
                    </div>
                    <div className="content">
                      <p>
                        "Naishukuru serikali kupitia iBUA kwa ufuatiliaji na
                        utekelezaji wenye matokeo chanya ."
                      </p>
                      <h4>Emmanuel Jeremy</h4>
                      <h6>Mbunifu</h6>
                    </div>
                  </div>
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        alt
                        className="img-fluid"
                        src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      />
                    </div>
                    <div className="content">
                      <p>
                        "Naishukuru serikali kupitia iBUA kwa ufuatiliaji na
                        utekelezaji wenye matokeo chanya."
                      </p>
                      <h4>Hamisa Juma</h4>
                      <h6>Mbunifu</h6>
                    </div>
                  </div>
                  <div className="single-box">
                    <div className="img-area">
                      <img alt className="img-fluid" src="images/gee.jpeg" />
                    </div>
                    <div className="content">
                      <span className="rating-star">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                      </span>
                      <p>
                        "iBUA Hub imenishika mkono kunisaidia katika hatua zangu
                        za kibunifu.."
                      </p>
                      <h4>Amirat Omary</h4>
                      <h6>Mbunifu</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h2>Our Partners </h2>
        <section className="customer-logos slider">
          <div className="slide">
            <img src="images/costech.png" />
          </div>
          <div className="slide">
            <img src="images/zpc.jpeg" />
          </div>
          <div className="slide">
            <img src="images/buni.png" />
          </div>
          <div className="slide">
            <img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Content;
