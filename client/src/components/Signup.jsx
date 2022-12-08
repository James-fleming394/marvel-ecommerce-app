import React from "react";

const Signup = () => {
    return (
        <div className="register">
            <div className="register-title">
                <h1>Register</h1>
            </div>
            <div className="register-form">
                <form>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text"
                    placeholder="Username"
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                    type="text"
                    placeholder="Email"
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                    type="text"
                    placeholder="Password"
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Signup