// HappinessSection2.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HappinessSection.css';

export const Data = [
    {
        imgSrc: "https://www.monginis.net/wp-content/uploads/elementor/thumbs/Delivery-web-01-2-prb2tuv0b8xzqq9p0zvt9xnwjdfxugrk30a96dd31e.png",
        altText: "Delivery Image",
        buttonText: "Order Online"
    },
    {
        imgSrc: "https://www.monginis.net/wp-content/uploads/2022/07/Banner-web-1.png",
        altText: "Banner Image",
        buttonText: "Visit Our Nearest Store"
    }
];
    

// HappinessSection2 component
const HappinessSection2 = ({ Data }) => {
    return (
        <div>
            <h2 className="custom-margin">
                <span style={{ color: 'black' }}>Bring A Box Of&nbsp;</span>
                <span style={{ color: '#EC268f' }}>Happiness Today</span>
            </h2>
            <div className="container mt-4">
                <div className="row text-center">

                    {Data.map((item, index) => (
                        <div className={`col-md-6 ${index === 0 ? 'pe-1 image-left' : 'ps-0'}`} key={index}>
                            <div className="image-container">
                                <img
                                    src={item.imgSrc}
                                    className="custom-image-size"
                                    alt={item.altText}
                                />
                            </div>
                            <a href={item.link} className="btn custom-btn">
                                <p>{item.buttonText}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HappinessSection2;
