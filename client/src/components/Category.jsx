import React from "react";
import CategoryItem from "./CategoryItem";

const Category = () => {
    const categories = [
        {
            id: 1,
            img: "https://i.pinimg.com/564x/64/8a/9a/648a9a506a5a850088568599a3f707c5.jpg",
            title: "Shop Comics"
        },
        {
            id: 2,
            img: "https://i.pinimg.com/564x/d1/c9/28/d1c928d2bafb09fdcf6aa22ca60a2031.jpg",
            title: "Shop Toys"
        },
        {
            id: 3,
            img: "https://i.pinimg.com/564x/ec/6a/c8/ec6ac86e37b16a15f92aa8df85ae7a61.jpg",
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