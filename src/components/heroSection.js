/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from "react";
import axios from 'axios'
import { url } from "../utils/API";
const HeroSection = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const[data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        await axios.get(`${url}images`)
        .then((res)=>{
          setData(res.data)
        })
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Change interval duration as needed
    return () => clearInterval(interval);
  }, [data.length]);


  const currentHero = data[currentHeroIndex];
  console.log(currentHero)
  return (
    <>
      <section className="slick-slideshow">
        <div className="slick-custom">
          <img src={currentHero && `${url}` + currentHero.image_path} className="img-fluid" alt />
          <div className="slick-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-10">
                  <h1 className="slick-title">{currentHero && currentHero.image_title}</h1>
                  <p className="lead text-white mt-lg-3 mb-lg-5">
                    <strong>
                      {currentHero && currentHero.image_description}
                    </strong>
                  </p>
                  <a href="/about" className="btn custom-btn">
                    Learn more about us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
