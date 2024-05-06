/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios"
import {url} from "../utils/API";
import Testimonial from "./testimonial";
const Content = () => {
  const [update, setUpdate] = useState([])
  // const [test, setTest] = useState([])
  useEffect(() => {
    const fecthData = async () => {
      try {
        const update = await axios.get(`${url}updates`)
        // const testimony = await axios.get(`${url}testimonies`)
        setUpdate(update.data)
        // setTest(testimony.data)
      } catch (error) {
        console.log(error)
      }
    }

    fecthData()
  }, [])

  console.log(update)
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
            <div className="col-lg-10 col-12">
              <div className="tab-content mt-2" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  {update && update.slice(0, 1).map((d, index) => (
                    <div className="row m-2" key={index}>
                      <div className="col-md-7">
                        <img
                          src="images/saba.jpeg"
                          className="img-fluid mh-100"
                          alt
                        />
                      </div>
                      <div className="col-md-5">
                        <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                          <h4 className="mb-3">
                            {d.update_title}
                          </h4>
                          <p>
                            {d.update_description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="align-items-center justify-content-center d-flex">
        <button
          type="button"
          className="btn text-white"
          style={{ backgroundColor: "#FF4400" }}
        >
          <a href="/update" className="View More text-white">
            View More
          </a>
        </button>
      </section>
      <section className="featured-product">
        <div className="container">
          <div className="row">
            <div className="container">
              <Testimonial/>
            </div>
          </div>
        </div>
      </section>
      <div className="container mb-5">
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
        </section>
      </div>
    </>
  );
};

export default Content;
