import React from "react";
import ComicList from "./ComicList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const AllComicProducts = () => {
    const comicProducts = [
        {
            id: 7,
            name: "The Amazing Spider-Man",
            img: "https://www.taschen.com/media/images/960/marvel_comics_library_spider_man_vol_1_1962_1964_xl_gb_3d_01152_2208011747_id_1376442.png",
            price: "$10"
        },
        {
            id: 8,
            name: "Shang-Chi",
            img: "https://i.annihil.us/u/prod/marvel/i/mg/e/f0/60afe31b76cae/clean.jpg",
            price: "$4"
        },
        {
            id: 9,
            name: "Ms. Marvel",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kamala-khan-ms-marvel-1655221294.jpeg",
            price: "$8"
        },
        {
            id: 10,
            name: "The Avengers",
            img: "https://m.media-amazon.com/images/I/61VwDKyjtZL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
            price: "$12"
        },
    ]

    const [comics, showComics] = useState([]);
    const [formState, setFormState] = useState({
        name: '',
        img: '',
        price: ''
    })
    
    let { id } = useParams();

    useEffect(() => {
        const apiCall = async () => {
            let response = await axios.get('http://localhost:5001/api/comics')
            showComics(response.data.allComics)
        }
        apiCall();
    }, [])

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
            {comicProducts.map(item => (
                <ComicList item={item} key={item.id} />
            ))}
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
            <Footer />
        </div>
    )
}

export default AllComicProducts