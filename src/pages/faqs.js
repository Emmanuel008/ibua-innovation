import React from "react";

const Faqs = () => {
  return (
    <div>
      <header className="site-header section-padding d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12">
              <h1>
                <span className="d-block text-primary">
                  Your favorite questions
                </span>
                <span className="d-block text-dark">
                  and our answers to them
                </span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section className="faq section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <h2>General Info.</h2>
              <div className="accordion" id="accordionGeneral">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionGeneralOne"
                      aria-expanded="true"
                      aria-controls="accordionGeneralOne"
                    >
                      What is innovation?
                    </button>
                  </h2>
                  <div
                    id="accordionGeneralOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionGeneral"
                  >
                    <p className="large-paragraph">
                      An innovation is a new or improved product or process (or
                      combination thereof) that differs significantly from the
                      unit's previous products or processes and that has been
                      made available to potential users (product) or brought
                      into use by the unit (process)..
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordionGeneralTwo"
                    aria-expanded="false"
                    aria-controls="accordionGeneralTwo"
                  >
                    What is invention?
                  </button>
                </h2>
                <div
                  id="accordionGeneralTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionGeneral"
                >
                  <div className="accordion-body">
                    <p className="large-paragraph">
                      <a
                        href="https://www.tooplate.com/free-templates"
                        target="_blank"
                      />
                      An Invention means the creation of a brand-new product or
                      device; creation of a product or introduction of a process
                      for the first time..
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordionGeneralThree"
                    aria-expanded="false"
                    aria-controls="accordionGeneralThree"
                  >
                    Is the difference between innovation and invention?
                  </button>
                </h2>
                <div
                  id="accordionGeneralThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionGeneral"
                >
                  <div className="accordion-body">
                    <p className="large-paragraph">
                      YES, these are two different concepts, though the two
                      terms may sound alike. Common differences include: a.
                      Invention is the occurrence of an idea for a product or
                      process that has never been made before. While Innovation
                      is the about practical implementation of the new idea for
                      the very first time. b. The invention is related to the
                      creation of new or novel product or process to the world.
                      On the other hand, innovation means adding value or making
                      a significant change or improvement in the existing
                      product, process or service, introducing an effective
                      critical way of using, producing or distributing
                      something..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="accordionProductOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionProduct"
            >
              <div className="accordion-body">
                <p className="large-paragraph">
                  <strong>Lorem ipsum dolor</strong> sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
                <p className="large-paragraph">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
