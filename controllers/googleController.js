const axios = require('axios');
const db = require('../models/Books');

module.exports = {
    bookSearch: (req, res) => {
        let booksArr = [];

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.query)
            .then(books => {
                for (let i=0; i<books.totalItems; i++) {
                    booksArr.push({
                        authors: books.items.volumeInfo.authors.join(", "),
                        description: books.items.volumeInfo.description,
                        image: books.items.volumeInfo.imageLinks.smallThumbnail,
                        link: books.items.volumeInfo.infoLink,
                        title: books.items.volumeInfo.title
                    });
                }
            })
            .catch(err => res.json(err));
        res.json(booksArr);
    }
}