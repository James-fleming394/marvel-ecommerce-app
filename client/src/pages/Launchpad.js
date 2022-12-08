import React from 'react';
import { useNavigate } from 'react-router-dom';


const LaunchPad = () => {

    const navigate = useNavigate();

    return (
        <div className="Launchpad">
            <div className="text-space">
                <div className="title">
                    <h1>Marvel Engine</h1>
                </div>
                <div className="desc">
                    <h3>Welcome to Marvel Engine!  An Ecommerce Web Application dedicated to fans of 
                    Marvel and Marvel Comics!  Shop online for your favorite comics, toys, movies and more!  
                    All at the click of a button!</h3>
                </div>
                <div className="launch-button">
                    <button onClick={() => navigate('/home')}>Enter Here</button>
                </div>
            </div>
        </div>
    )
}

export default LaunchPad