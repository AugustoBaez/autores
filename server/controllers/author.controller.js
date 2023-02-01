const Author = require("../models/author.model");

module.exports.findAllAuthors = (req, res) => {
  Author.find()
    .then((authors) => res.json({ autor: authors }))
    .catch((error) => res.json({ message: "error found", error }));
};

module.exports.findAuthor = (req, res) => {
  Product.find({ _id: req.params.id })
    .then((author) => res.json({ author }))
    .catch((error) => ({ message: "error finding product", error }));
};

module.exports.addAuthor = (req, res) => {
  Product.create(req.body)
    .then((newAuthor) => res.json({ author: newAuthor }))
    .catch((error) => res.json({ message: "error adding new product", error }));
};

module.exports.updateAuthor = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updateAuthor) => res.json({ author: updateAuthor }))
    .catch((error) => res.json({ message: "error updating", error }));
};

module.exports.deleteAuthor = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((error) => res.json({ message: "error deleting product", error }));
};
