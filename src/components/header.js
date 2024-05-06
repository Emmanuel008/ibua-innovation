import React from "react";
import { useLocation } from 'react-router-dom'; 


const Header = () => {
  const location = useLocation()
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="index.html">
            <strong>
              <span>iBUA</span> Hub
            </strong>
          </a>
          <div className="d-lg-none">
            <a href="sign-in.html" className="bi-person custom-icon me-3" />
            <a href="product-detail.html" className="bi-bag custom-icon" />
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className={location.pathname === "/" ? "nav-link active" : "nav-link"} href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={location.pathname === "/about" ? "nav-link active" : "nav-link"} href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={location.pathname === "/update" ? "nav-link active" : "nav-link"} href="/update">
                  Update
                </a>
              </li>
              <li className="nav-item">
                <a className={location.pathname === "/faqs" ? "nav-link active" : "nav-link"} href="/faqs">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
