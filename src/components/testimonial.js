import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/style.css"; //Allows for server-side rendering.

const Testimonial = () => {
  const options = {
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 450,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  };
  return (
    <OwlCarousel options={options}>
      <div className="single-box">
        <div className="img-area">
          <img alt className="img-fluid" src="images/COSTECH-13 - Copy.jpg" />
        </div>
        <div className="content">
          <p>
            "iBUA Hub imenishika mkono kunisaidia katika hatua zangu za
            kibunifu."
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
            "Naishukuru serikali kupitia iBUA kwa ufuatiliaji na utekelezaji
            wenye matokeo chanya ."
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
            "Naishukuru serikali kupitia iBUA kwa ufuatiliaji na utekelezaji
            wenye matokeo chanya."
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
            "iBUA Hub imenishika mkono kunisaidia katika hatua zangu za
            kibunifu.."
          </p>
          <h4>Amirat Omary</h4>
          <h6>Mbunifu</h6>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default Testimonial;
