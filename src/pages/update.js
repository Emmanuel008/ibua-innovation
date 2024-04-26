import React from "react";

const Update = () => {
  return (
    <>
      <header className="site-header section-padding d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12">
              <h1>
                <span className="d-block text-primary">Latest</span>
                <span className="d-block text-dark">Updates</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section className="products section-padding">
        <div className="tab-content mt-2" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row ml-2 mr-2">
              <div className="col-4">
                <div className="card">
                  <img
                    src="images/COSTECH-19 - Copy.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Talent Pool</h5>
                    <p className="card-text">
                      Specialized initiative designed to identify, nurture, and
                      develop exceptional talent in various fields within the
                      Zanzibar innovation ecosystem.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img
                    src="images/COSTECH-14 - Copy.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Training Management</h5>
                    <p className="card-text">
                      Aims to equip entrepreneurs, innovators, and business
                      leaders with the skills, knowledge, and tools necessary to
                      effectively manage and grow their ventures.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img
                    src="images/COSTECH-14 - Copy.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Stakeholder Engagement</h5>
                    <p className="card-text">
                      {" "}
                      iBUA Hub actively involves and communicates with
                      individuals, groups, and organizations that have a vested
                      interest or are affected by its activities.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Update;
