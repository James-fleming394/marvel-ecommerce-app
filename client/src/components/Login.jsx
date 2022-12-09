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
                    /><br></br>
                <label htmlFor="password">Password:</label>
                    <input 
                    type="text"
                    placeholder="Password"
                    /> <br></br>
                    <button className="register-button" type="submit">Signin</button>
                </form>
            </div>
        </div>
    )
}

export default Login