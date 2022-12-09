import React from "react";
import CategoryItem from "./CategoryItem";

const Category = () => {
    const categories = [
        {
            id: 1,
            img: "https://i.imgur.com/CdBAPgm.jpg",
            title: "Shop Comics"
        },
        {
            id: 2,
            img: "https://i.imgur.com/yZKLwF1.jpg",
            title: "Shop Toys"
        },
        {
            id: 3,
            img: "https://i.imgur.com/rxnVkah.jpg",
            title: "Shop Apparel"
        }
    ]
    
    return (
        <div>
            {categories.map(item => (
                <CategoryItem item={item}/>
            ))}
        </div>
    )
}

export default Category