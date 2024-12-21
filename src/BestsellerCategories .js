import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const categories = [
    {
        title: "Birthday Surprises",
        link: "https://www.monginis.net/wp-content/uploads/2022/06/Component-3-%E2%80%93-1-2.png",
        className: 'birthday-box'
    },
    {
        title: "Anniversary Surprises",
        link: "https://www.monginis.net/wp-content/uploads/2022/06/Component-2-%E2%80%93-1-1.png",
        className: 'anniversary-box'
    },
];

const BestsellerCategories = ({ categories }) => {
    return (
        <div className="bestseller-container container-fluid">
            <h2 className="custom-margin text-center">
                <span className="responsive-margin" style={{ color: "black" }}>Shop By&nbsp;</span>
                <span className="responsive-margin" style={{ color: "#EC268f" }}>Bestseller Categories</span>
            </h2>   
            <div className="row justify-content-center">

                {categories.map((category) => (
                    <div className="col-md-5 col-sm-8 mb-3">
                        <div className={`category-box d-flex flex-column align-items-end ${category.className}`}>
                        <p className="mb-4"><b>{category.title}</b></p>
                            <button className="view-all-btn">View All</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestsellerCategories;
