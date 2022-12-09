import React from "react";

const ComicList = ({item}) => {
    return (
        <div className="comics-product-page">
            <div className="comics-product">
                <img className="comics-image" src={item.img} alt="comic book cover" />
            <div className="comic-info">
                <h2>{item.name}</h2>
                <h3>{item.price}</h3>
                <button>Add to Cart</button>
            </div>
            </div>
        </div>
    )
}

export default ComicList