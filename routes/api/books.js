const express = require('express');
const router = express.Router();

//Book model
const Book = require('../../models/Books');

//GET /api/books - Get saved books
router.get("/", (req, res) => {
    Book.find()
        .then(books => res.json(books));
});

//POST /api/books - Save a book
router.post("/", (req, res) => {
    const newBook = new Book({
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link,
        title: req.body.title
    });
    newBook.save().then(book => res.json(book));
});

//POST /api/books - Delete a book
router.delete("/:id", (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove().then(() => res.json({deleted: true})))
        .catch(err => res.status(404).json({deleted: false}));
});

module.exports = router;