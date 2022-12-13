import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ToyPage = () => {

    return (
        <div>
            <Navbar />

            <Footer />
        </div>
    )
}

export default ToyPage