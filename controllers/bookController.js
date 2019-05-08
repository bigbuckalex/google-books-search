const db = require('../models/Books');

module.exports = {
    findAll: (req, res) => {
        db.Book.find(req.query)
            .then(book => res.json(book))
            .catch(err => res.json(err));
    },
    findById: (req, res) => {
        db.Book.findById(req.params.id)
            .then(book => res.json(book))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        db.Book.create(req.body)
            .then(book => res.json(book))
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        db.Book.findOneAndUpdate({id: req.params.id}, req.body)
            .then(book => res.json(book))
            .catch(err => res.json(err));
    },
    remove: (req, res) => {
        db.Book.findById(req.params.id)
            .then(book => book.remove())
            .then(book => res.json(book))
            .catch(err => res.json(err));
    }
}