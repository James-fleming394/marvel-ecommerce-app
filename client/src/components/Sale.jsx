import React from "react";

const Sale = () => {

    return (
        <>
        <div className="home-page">
            <div className="home-title">
                <h1>Welcome to Marvel Engine!</h1>
                <h2>Marvel Engine is the home of countless Marvel Products for you to view and purchase,
                    check out our sales below!</h2>
            </div>
        </div>
        <div className="home-page2">
                <div className="sale">
                    <h1>Today's Sales</h1><span>Don't miss out on these amazing deals!</span>
                    <h3>30% off!</h3>
                    <div className="sale-items">
                        <img src="https://m.media-amazon.com/images/I/61bbm-+wxwL._SX418_BO1,204,203,200_.jpg" alt="marvel book" />
                        <button>Shop Now</button>
                        <img src="https://m.media-amazon.com/images/I/61bbm-+wxwL._SX418_BO1,204,203,200_.jpg" alt="marvel book" />
                        <button>Shop Now</button>
                        <img src="https://m.media-amazon.com/images/I/61bbm-+wxwL._SX418_BO1,204,203,200_.jpg" alt="marvel book" />
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Sale