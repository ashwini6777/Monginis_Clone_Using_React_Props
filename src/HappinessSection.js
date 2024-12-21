import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HappinessSection.css';

const HappinessSection = () => {
    return (
        <div>
            {/* Bring A Box Of Happiness Today */}
            <h2 className="custom-margin">
                <span style={{ color: 'black' }}>Bring A Box Of&nbsp;</span>
                <span style={{ color: '#EC268f' }}>Happiness Today</span>
            </h2>
            <div className="container mt-4">
                <div className="row text-center">
                    {/* First Image and Button */}
                    <div className="col-md-6 pe-1 image-left">
                        <div className="image-container">
                            <img
                                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/Delivery-web-01-2-prb2tuv0b8xzqq9p0zvt9xnwjdfxugrk30a96dd31e.png"
                                className="custom-image-size"
                                alt="Delivery Image"
                            />
                        </div>
                        <a href="#" className="btn custom-btn "><p>Order Online</p></a>
                    </div>
                    {/* Second Image and Button */}
                    <div className="col-md-6 ps-0">
                        <div className="image-container">
                            <img
                                src="https://www.monginis.net/wp-content/uploads/2022/07/Banner-web-1.png"
                                className="custom-image-size"
                                alt="Banner Image"
                            />
                        </div>
                        <a href="#" className="btn custom-btn "><p>Visit Our Nearest Store</p></a>
                    </div>
                </div>
            </div>


            {/* Shop By Bestseller Categories */}

            <div className="bestseller-container container-fluid">
                <h2 className="custom-margin text-center">
                    <span className="responsive-margin" style={{ color: "black" }}>Shop By&nbsp;</span>
                    <span className="responsive-margin" style={{ color: "#EC268f" }}>Bestseller Categories</span>
                </h2>
                <div className="row justify-content-center">
                    {/* Birthday Surprises Category */}
                    <div className="col-md-5 col-sm-8 mb-3">
                        <div className="category-box birthday-box d-flex flex-column align-items-end">
                            <p className="mb-4"><b>Birthday Surprises</b></p>
                            <button className="view-all-btn">View All</button>
                        </div>
                    </div>
                    {/* Anniversary Surprises Category */}
                    <div className="col-md-5 col-sm-8 mb-3">
                        <div className="category-box anniversary-box d-flex flex-column align-items-end">
                            <p className="mb-4"><b>Anniversary Surprises</b></p>
                            <button className="view-all-btn">View All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HappinessSection;
