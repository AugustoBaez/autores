const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
  app.get("/api/authors", AuthorController.findAllAuthors);
  app.get("/api/author/:id", AuthorController.findAuthor);
  app.post("/api/author/new", AuthorController.addAuthor);
  app.put("/api/author/update/:id", AuthorController.updateAuthor);
  app.delete("/api/author/delete/:id", AuthorController.deleteAuthor);
};
