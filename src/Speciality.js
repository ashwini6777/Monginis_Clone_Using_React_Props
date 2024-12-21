import React from 'react';
import './Speciality.css'; 

const Speciality = () => {
    return (
        <div>
            {/* Our Speciality */}
            <h1 className="special-margin">
                <span style={{ color: 'black' }}><b>Our </b>&nbsp;</span>
                <span style={{ color: '#EC268f' }}><b>Speciality</b></span>
            </h1>

            <div className="row text-centered">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="d-flex align-items-center justify-content-center flex-md-nowrap">
                        <img
                            decoding="async"
                            src="https://www.monginis.net/wp-content/uploads/2022/06/1.png"
                            alt=""
                            style={{ height: '85px' }}
                            className="specialityImages"
                        />
                        <span className="speciality-description ml-md-3">Safe & Hygenic Bakery</span>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="d-flex align-items-center justify-content-center flex-md-nowrap">
                        <img
                            decoding="async"
                            src="https://www.monginis.net/wp-content/uploads/2022/06/2-1.png"
                            alt=""
                            style={{ height: '85px' }}
                            className="specialityImages"
                        />
                        <span className="speciality-description ml-md-3">Delivery in 700+ Cities</span>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="d-flex align-items-center justify-content-center flex-md-nowrap">
                        <img
                            decoding="async"
                            src="https://www.monginis.net/wp-content/uploads/2022/06/3-1.png"
                            alt=""
                            style={{ height: '85px' }}
                            className="specialityImages"
                        />
                        <span className="speciality-description ml-md-3">Trusted By 20 Million</span>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="d-flex align-items-center justify-content-center flex-md-nowrap">
                        <img
                            decoding="async"
                            src="https://www.monginis.net/wp-content/uploads/2022/06/4-1.png"
                            alt=""
                            style={{ height: '80px' }}
                            className="specialityImages"
                        />
                        <span className="speciality-description ml-md-3">Services in 18000+ pincodes</span>
                    </div>
                </div>
            </div>

            <div className="container-speciality mt-4">
                <div className="row">
                    {/* Main Section Title */}
                    <div className="col-12">
                        <div className="flex-speciality">
                            <span className="text-uppercase font-weight-bold"><b>&nbsp;&nbsp;Most Searched For On Monginis&nbsp;:&nbsp;</b></span>
                            <span className="content-section">
                                Cakes | 3D & Sp Cakes | Pastries | Savories | Baker Wares | Cakes | Chocolates | Cakes Deals
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        {/* Cakes and Savories aligned in a single line */}
                        <div className="col-12">
                            <div className="flex-speciality">
                                <span className="text-uppercase font-weight-bold"><b>Cakes&nbsp;:&nbsp;</b></span>
                                <span className="content-section">
                                    Packaged Cakes | Blueberry Cake | Chocolate Cake | Pineapple Cake | Truffle Cake | Cakes | Double Chocolate Cake | Walnut Truffle Cake |
                                </span>
                                <span className="newline-speciality"> Classic Chocolate Cake</span>
                            </div>
                            <div className="flex-speciality">
                                <span className="text-uppercase font-weight-bold"><b>Savories&nbsp;:&nbsp;</b></span>
                                <span className="content-section">
                                    Namkeen | Rusk | Rolls | Non-Veg Pizza Slices | Veg Rolls | Veg Paneer Patty | Breads | Tea Time Snacks
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="pt-5 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Side: Monginis Logo */}
                        <div className="col-md-6 mb-4 custom-margin-logo">
                            <img
                                src="https://www.monginis.net/wp-content/uploads/2022/06/cropped-NEW-LOGO.png"
                                alt="Monginis Logo"
                                className="img-fluid"
                                width="300"
                                height="66"
                            />
                        </div>

                        {/* Right Side: Connect with us and Social Links */}
                        <div className="col-md-6 mb-4 text-md-end custom-margin-connect">
                            <h2 className="text-dark">Connect with us</h2>
                            <ul className="list-unstyled d-flex justify-content-md-end">
                                <li className="me-3 social-icon facebook-icon">
                                    <a href="#" className="text-dark">
                                        <i className="fab fa-facebook" style={{ color: 'white', fontSize: '20px' }}></i>
                                    </a>
                                </li>
                                <li className="me-3 social-icon twitter-icon">
                                    <a href="#" className="text-dark">
                                        <i className="fab fa-twitter" style={{ color: 'white', fontSize: '20px' }}></i>
                                    </a>
                                </li>
                                <li className="me-3 social-icon youtube-icon">
                                    <a href="#" className="text-dark">
                                        <i className="fab fa-youtube" style={{ color: 'white', fontSize: '20px' }}></i>
                                    </a>
                                </li>
                                <li className="social-icon instagram-icon">
                                    <a href="#" className="text-dark">
                                        <i className="fab fa-instagram" style={{ color: 'white', fontSize: '20px' }}></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-md-3 mb-2 custom-margin-logo">
                            <ul className="list-unstyled">
                              
                                <li><a href="#" className="text-dark">Contact Us</a></li>
                                <li><a href="#" className="text-dark">About Us</a></li>
                                <li><a href="#" className="text-dark">Become Franchise</a></li>
                                <li><a href="#" className="text-dark">Become Vendor</a></li>
                                
                            </ul>
                        </div>

                        <div className="col-md-3 mb-2">
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-dark">Cakes</a></li>
                                <li><a href="#" className="text-dark">3D & SP Cakes</a></li>
                                <li><a href="#" className="text-dark">Pastries</a></li>
                                <li><a href="#" className="text-dark">Savouries</a></li>
                                <li><a href="#" className="text-dark">Chocolates</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-2">
                            <ul className="list-unstyled">
                                <li className="mb-4"><a href="#" className="text-dark">Download E-brochure</a></li>
                                <li className="mb-4"><a href="#" className="text-dark">Recognition & Awards</a></li>
                                <li className="mb-4"><a href="#" className="text-dark">Cake Studies</a></li>
                                <li className="mb-4"><a href="#" className="text-dark">Our Factories</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-2">
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-dark">Refund Policy</a></li>
                                <li><a href="#" className="text-dark">Privacy Policy</a></li>
                                <li><a href="#" className="text-dark">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="row mb-2">
                        <div className="col-12 text-center">
                            <p className="text-black">Copyright © Monginis. All rights reserved</p>
                            <p className="text-black">Designed & Developed by <u>QPSIT</u></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Speciality;
