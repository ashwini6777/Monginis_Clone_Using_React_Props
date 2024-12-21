import React from 'react';
import './MonginisNavbar.css'; 

const MonginisNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.monginis.net/wp-content/uploads/2022/06/cropped-NEW-LOGO.png" alt="Monginis" width="150"/></a>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-start">
            <li className="nav-item active">
              <a className="nav-link custom-nav-link" href="#" > <b>Home</b> </a></li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#"> <b>Our Products</b></a></li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#"> <b>About Us</b> </a></li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#"> <b>Our History</b></a></li>
            <li className="nav-item dropdown">
              <a className="nav-link custom-nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <b>Become a Franchise</b>
              </a>
              <ul className="dropdown-menu text-start">
                <li>
                  <a className="dropdown-item custom-nav-link" href="#"><b>Manufacturing Franchise</b></a></li>
                <li><a className="dropdown-item custom-nav-link" href="#"> <b>Cake Shop Franchise</b></a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link custom-nav-link" href="#"> <b>Blogs</b></a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default MonginisNavbar;
