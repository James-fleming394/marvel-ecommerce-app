import React from "react";

const CategoryItem = ({item}) => {
    return (
        <div className="product-category">
            <img className="category-image" src={item.img} alt="product" />
            <div>
            <h1>{item.title}</h1>
            <button>Shop Now</button>
            </div>
        </div>
    )
}

export default CategoryItem