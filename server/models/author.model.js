const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "must be at least 3 characters long"],
    },
    quotes: { type: String },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", AdminSchema);
module.exports = Author;
