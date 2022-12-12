import React from "react";
import { useNavigate } from 'react-router-dom'

const CategoryItem = ({item}) => {

    const navigate = useNavigate();

    return (
        <div className="categories">
        <div className="product-category">
            <img className="category-image" src={item.img} alt="product" />
            <div className="info">
            <h1>{item.title}</h1>
            <button className="category-button" onClick={() => navigate("/comics")}>Shop Now</button>
            </div>
        </div>
        </div>
    )
}

export default CategoryItem