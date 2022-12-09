import React from "react";

const CategoryItem = ({item}) => {
    return (
        <div className="categories">
        <div className="product-category">
            <img className="category-image" src={item.img} alt="product" />
            <div className="info">
            <h1>{item.title}</h1>
            <button className="category-button">Shop Now</button>
            </div>
        </div>
        </div>
    )
}

export default CategoryItem