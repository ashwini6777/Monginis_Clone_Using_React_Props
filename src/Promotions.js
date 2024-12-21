import React from 'react';
import './Promotions.css';

const Promotions = () => {
    return (
        <div className="container-fluid">
            {/* Placing your first order ? Get Upto 10% Off */}
            <div className="elementor-widget-container1 text-center">
                <div className="elementor-first-div">
                    <h2 className="elementor-heading-title">
                        Placing your first order? Get Up to 10% Off
                        <br /><br />Use Code: <b>monginis</b>
                    </h2>
                </div>
            </div>

            {/* What our clients say about us */}
            <div className="elementor-widget-container2 text-center">
                <div className="elementor-second-div">
                    <h2 className="custom-margin">
                        <span style={{ color: "black" }}>What our clients say &nbsp;</span>
                        <span style={{ color: "#EC268f" }}>about us</span>
                    </h2>
                </div>
            </div>

            {/* Know The Sweet Deal First ! */}
            <div className="elementor-widget-container3 text-center">
                <div className="elementor-third-div">
                    <h2 className="custom-margin">
                        <span className="ml-5" style={{ color: "black" }}>Know The Sweet &nbsp;</span>
                        <span className="ml-5" style={{ color: "#EC268f" }}>Deal First!</span>
                    </h2>
                    <p className="ml-4"><b>Sign up to our newsletter and get to know the sweets first!</b></p>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                            <input type="email" className="form-control ml-5" placeholder="Enter your email address" />
                        </div>
                        <div className="col-12 col-md-4 mt-3 mt-md-0">
                            <button className="btn btn-primary w-100 ml-5">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotions;
