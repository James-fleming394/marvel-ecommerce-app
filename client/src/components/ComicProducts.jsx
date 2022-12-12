import React from "react";
import ComicList from "./ComicList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const AllComicProducts = () => {

    const [comics, showComics] = useState([]);
    const [formState, setFormState] = useState({
        name: '',
        img: '',
        price: ''
    })
    
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const apiCall = async () => {
            let response = await axios.get('http://localhost:5001/api/comics')
            showComics(response.data.allComics)
        }
        apiCall();
    }, [])

    const viewComic = (comic) => {
        console.log(`${comic._id}`)
        navigate(`/comics/${comic._id}`)
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let newComic = await axios.post(`http://localhost:5001/api/comics`, formState)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })

        showComics([...comics, newComic.data.newComic])
        setFormState({
            name: '',
            img: '',
            price: ''
        })
    }


    return (
        <div>
            <Navbar />
            <div className="comic-view">
                <div className="add-comic">
                    <h1>Add your Comic Here:</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Comic Name:</label>
                        <input
                        id="name"
                        placeholder="Type Here..."
                        value={formState.name}
                        onChange={handleChange}
                        />
                        <label htmlFor="name">Comic Cover:</label>
                        <input
                        id="img"
                        placeholder="Type Here..."
                        value={formState.img}
                        onChange={handleChange}
                        />
                        <label htmlFor="name">Comic Price:</label>
                        <input
                        id="price"
                        placeholder="Type Here..."
                        value={formState.price}
                        onChange={handleChange}
                        />
                        <button type="submit">Add Comic</button>
                    </form>
                </div>
            </div>
            <div>
                <h1>Comics on Sale</h1>
            </div>
            <div className="map" key={comics._id}>
                {comics.map((comic) => (
                    <div className="small-map" onClick={() => viewComic(comic)} key={comics._id}>
                        <img src={comic.img} alt="alt-comic-picture" />
                        <h2>{comic.name}</h2>
                        <p>{comic.price}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default AllComicProducts