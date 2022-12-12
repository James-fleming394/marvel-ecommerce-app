const db = require('../db')
const { Comic } = require('../models/Comic')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const comic = [
        {
            name: "The Amazing Spider-Man",
            img: "https://www.taschen.com/media/images/960/marvel_comics_library_spider_man_vol_1_1962_1964_xl_gb_3d_01152_2208011747_id_1376442.png",
            price: "$10"
        },
        {
            name: "Shang-Chi",
            img: "https://i.annihil.us/u/prod/marvel/i/mg/e/f0/60afe31b76cae/clean.jpg",
            price: "$4"
        },
        {
            name: "Ms. Marvel",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kamala-khan-ms-marvel-1655221294.jpeg",
            price: "$8"
        },
        {
            name: "The Avengers",
            img: "https://m.media-amazon.com/images/I/61VwDKyjtZL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
            price: "$12"
        },
    ]

    await Comic.insertMany(comic)

console.log('Added comic')
}

const run = async () => {
await main()
db.close
}
run();