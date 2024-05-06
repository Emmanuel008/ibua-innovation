/* eslint-disable react/jsx-no-target-blank */
import React, {useState, useEffect} from "react";
import axios from "axios"
import { url } from "../utils/API";
const Faqs = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      const faqsResponse = await axios.get(`${url}faqs`);
      setData(faqsResponse.data)
    }

    fetchData()
  }, [])
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
              {data && data.map((d, index)=>(
                <div className="accordion" id="accordionGeneral" key={index}>
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
                        {d.faq_question}
                      </button>
                    </h2>
                    <div
                      id="accordionGeneralOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionGeneral"
                    >
                      <p className="large-paragraph">
                        {d.faq_answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
