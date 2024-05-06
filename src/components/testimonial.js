import React, {useState, useEffect} from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Quote from './blockquote.svg';
import axios from "axios"
import { url } from "../utils/API";
const Testimonial = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`${url}testimonies`)
          .then((res) => {
            setData(res.data)
          })
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <section className="testimonial-container">
      <div className="title">
        <h1>Testimonial</h1>
      </div>

      <div className="slider-container">
        <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote" />
          <img className="bottom-quote quote" src={Quote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {data.map((review, index) => (
            <SplideSlide key={index}>
              <img className="review-img" src={`${url}`+review.image_path} alt="" />
              <div className="content">
                <p className="text">{review.testimony_content}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="user">{review.testimony_author}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonial;
