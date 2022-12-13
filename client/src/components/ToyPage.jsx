import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ToyPage = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        img: '',
        price: ''
    });

    const [toy, setToy] = useState({});
    const [toys, setToys] = useState({});

    let { id } = useParams();
    let navigate = useNavigate();

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    useEffect(() => {
        const getToy = async () => {
            let response = await axios.get(`http://localhost:5001/api/toys/${id}`)
            setToy(response.data)
        }
        getToy()
    }, []);

    const handleUpdate = async (event) => {
        event.preventDefault();
        let response = await axios.put(`http://localhost:5001/api/toys/${id}`, formState)
        .then((response) => {
            return response;
        })
        .catch ((error) => {
            console.log(error)
        })
        setToy([toy, response.data])
        setFormState({
            name: '',
            img: '',
            price: ''
        })
    }

    const deleteToy = async (event) => {
        event.preventDefault()
        let response = await axios.delete(`http://localhost:5001/api/toys/${id}`)
        setToy(response);
    }

    return (
        <div>
            <Navbar />
            <div className="comic-view">
            <form className="add-comic" onSubmit={handleUpdate}>
            <h2>Update Form</h2>
                <label htmlFor='name'>New Toy Name:</label>
                <input id='name'
                    placeholder="Type Here..."
                    value={formState.name}
                    onChange={handleChange} />
                <label htmlFor='img'>New Toy Picture:</label>
                <input id='img'
                    placeholder="Picture URL Here..."
                    value={formState.img}
                    onChange={handleChange} />
                <label htmlFor='price'>New Toy Price:</label>
                <input id='price'
                    placeholder="Type Here..."
                    value={formState.price}
                    onChange={handleChange} />
                <button className="category-button" type='submit'>Update Toy Now!</button>
            </form>
            </div>
            <div>
            <button className="category-button" onClick={deleteToy}>Delete this Toy!</button>
            </div>
            <Footer />
        </div>
    )
}

export default ToyPage