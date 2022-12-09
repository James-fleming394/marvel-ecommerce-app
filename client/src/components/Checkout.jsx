import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout-title">
                <h1>Shopping Cart</h1>
            </div>
            <div className="checkout-buttons">
                <button className="continue-button">Continue Shopping</button>
                <button className="purchase-button">Checkout Now</button>
            </div>
            <div className="bag-wishlist">
                <Link className="wishlist" to="/cart">Shopping Bag(0)</Link>
                <Link className="wishlist" to="/wishlist">Wishlist(0)</Link>
            </div>
            <div className="shopping cart items">       
                <h2>Your Bag:</h2>
                <section className="items">
                    <h5>Product Name</h5>
                    <p>Product Id</p>
                    <img className="product-picture" src="" alt="Product picture"/>
                    <h6>Product Price</h6>
                </section>
                <section className="summary">
                    <h2>Total Cost:</h2>
                </section>
            </div>
        </div>
    )
}

export default Checkout