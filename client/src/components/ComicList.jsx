import React from "react";
import { useNavigate } from 'react-router-dom';

const ComicList = ({item}) => {

    const navigate = useNavigate();

    return (
        <div className="comics-product-page">
                <div className="comics-product">
                    <img className="comics-image" src={item.img} alt="comic book cover" />
                    <div className="comic-info">
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                        <button className="comic-button">Add to Cart</button>
                        <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                </div>
            </div>
    )
}

export default ComicList