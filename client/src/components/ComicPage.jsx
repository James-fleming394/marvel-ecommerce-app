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
        const response = await axios.delete(`http://localhost:5001/comics/${id}`, formState)
        setComic(response);
        navigate(`/comics`)
    }

    return (
        <div>
            <Navbar />
        <div className="comic-single" key={comics._id}>
            <div className="comics-product">
                        <img className="comics-image" src={comic.img} alt="picture" />
                        <div className="comic-info">
                        <h2>{comic.name}</h2>
                        <h3>{comic.price}</h3>
                        </div>
            </div>
        </div>
        <div>
            <form className="update-blog" onSubmit={handleUpdate}>
                <label htmlFor='title'>New Title:</label>
                <input id='title'
                    placeholder="Type Here..."
                    value={formState.title}
                    onChange={handleChange} />
                <label htmlFor='author'>New Author:</label>
                <input id='author'
                    placeholder="Type Here..."
                    value={formState.author}
                    onChange={handleChange} />
                <label htmlFor='description'>New Blog Content:</label>
                <textarea id='body'
                    placeholder="Type Here..."
                    cols="50" rows="10"
                    value={formState.body}
                    onChange={handleChange} />
                <label htmlFor='image'>Image URL:</label>
                <input id='img'
                    placeholder="Insert Image URL Here..."
                    value={formState.img}
                    onChange={handleChange} />
                <button type='submit'>Update Blog Now!</button>
            </form>
            </div>
            <div>
            <button className="deleteButton" onClick={deleteComic}>Delete this Comic!</button>
            </div>
            <Footer />
        </div>
    )
}

export default ComicPage