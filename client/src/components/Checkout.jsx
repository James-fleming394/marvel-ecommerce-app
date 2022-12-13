import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Checkout = () => {


    const navigate = useNavigate();

    return (
        <div className="checkout">
            <div className="checkout-title">
                <h1>Shopping Cart</h1>
            </div>
            <div className="bag-wishlist">
                <Link className="wishlist" to="/cart">Shopping Bag(0)</Link>
                <Link className="wishlist" to="/wishlist">Wishlist(0)</Link>
            </div>
            <div className="shopping-cart-items">       
                <h2>Your Bag:</h2>
                <div className="items">
                    <h5>Product Name</h5>
                    <p>Product Id</p>
                    <img className="product-picture" src="" alt="Product example"/>
                    <h6>Product Price</h6>
                </div>
                <section className="summary">
                    <h2>Total Cost: </h2>
                </section>
                <div className="checkout-buttons">
                <button className="continue-button" onClick={() => navigate('/products')}>Continue Shopping</button>
                <br></br>
                <button className="purchase-button2" onClick={() => alert('Thanks for shopping at Marvel Engine!')}>Checkout Now</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout