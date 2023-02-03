const Author = require("../models/author.model");
const catchError = (error, res) => res.status(400).json(error);

module.exports.findAllAuthors = (req, res) => {
  Author.find()
    .then((authors) => res.json({ autor: authors }))
    .catch((error) =>
      res.json({ message: "error finding all authors", error })
    );
};

module.exports.findAuthor = (req, res) => {
  Author.find({ _id: req.params.id })
    .then((author) => res.json({ author }))
    .catch((error) => ({ message: "error finding author", error }));
};

module.exports.addAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => res.json({ author: newAuthor }))
    .catch((error) => catchError(error, res));
};

module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updateAuthor) => res.json({ author: updateAuthor }))
    .catch((error) => res.json({ message: "error updating", error }));
};

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((error) => res.json({ message: "error deleting author", error }));
};
