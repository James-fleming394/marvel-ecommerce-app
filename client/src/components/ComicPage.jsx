import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ComicPage = () => {

    const [formState, setFormState] = useState({
        name: '',
        img: '',
        price: ''
    });

    const [comic, setComic] = useState({});
    const [comics, setComics] = useState({});

    let { id } = useParams();
    let navigate = useNavigate();

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    useEffect(() => {
        const getComic = async () => {
            let response = await axios.get(`http://localhost:5001/api/comics/${id}`)
            setComic(response.data)
        }
        getComic()
    }, []);

    const handleUpdate = async (event) => {
        event.preventDefault();
        let response = await axios.put(`http://localhost:5001/api/comics/${id}`, formState)
        .then((response) => {
            return response;
        })
        .catch ((error) => {
            console.log(error)
        })
        setComic([comic, response.data])
        setFormState({
            name: '',
            img: '',
            price: ''
        })
    }

    const deleteComic = async (event) => {
        event.preventDefault()
        let response = await axios.delete(`http://localhost:5001/api/comics/${id}`)
        setComic(response);
    }

    return (
        <div>
            <Navbar />
            <div className="comic-view">
                <h1>Add or Delete </h1>
            <button className="category-button" >Add Comic to Cart</button>
            <br></br>
            <button className="category-button" onClick={deleteComic}>Delete this Comic</button>
            </div>
        <div className="comic-view">
            <form className="add-comic" onSubmit={handleUpdate}>
            <h2 className="update-form">Update Form</h2>
                <label htmlFor='name'>New Comic Name:</label>
                <input id='name'
                    placeholder="Type Here..."
                    value={formState.name}
                    onChange={handleChange} />
                <label htmlFor='img'>New Comic Cover:</label>
                <input id='img'
                    placeholder="Cover URL Here..."
                    value={formState.img}
                    onChange={handleChange} />
                <label htmlFor='price'>New Comic Price:</label>
                <input id='price'
                    placeholder="Type Here..."
                    value={formState.price}
                    onChange={handleChange} />
                    <br></br>
                <button className="category-button" type='submit'>Update Comic Now</button>
            </form>
            </div>
            <Footer />
        </div>
    )
}

export default ComicPage