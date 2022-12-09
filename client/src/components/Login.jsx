import React from "react";

const Login = () => {
    return (
        <div className="register">
            <div className="register-title">
                <h1>Login</h1>
            </div>
            <div className="register-form">
                <form>
                <label htmlFor="email">Email:</label>
                    <input 
                    type="text"
                    placeholder="Email"
                    />
                <label htmlFor="password">Password:</label>
                    <input 
                    type="text"
                    placeholder="Password"
                    />
                    <button className="register-button" type="submit">Signin</button>
                </form>
            </div>
        </div>
    )
}

export default Login