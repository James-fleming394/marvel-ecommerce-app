import React from "react";
import { Link } from "react-router-dom";
import LOGO from '../assets/img/Marvel-Logo.png'
import CART from '../assets/img/cart.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img href="/" className="marvel-logo" src={LOGO} alt="Marvel Logo" />
            </div>
            <div className="navbar-links">
            <Link className="navbar-link" to="/home">Home</Link>
            <Link className="navbar-link" to="/register">Signup</Link>
            <Link className="navbar-link" to="/login">Login</Link>
            <Link className="navbar-link" to="/products">Products</Link>
            <Link className="navbar-link" to="/cart"><img className="cart" src={CART} alt="cart-icon" /></Link>
            </div>
        </div>
    )
}

export default Navbar