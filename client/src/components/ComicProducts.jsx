import React from "react";
import ComicList from "./ComicList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

    return (
        <div>
            <Navbar />
            {comicProducts.map(item => (
                <ComicList item={item} key={item.id} />
            ))}
            <Footer />
        </div>
    )
}

export default AllComicProducts