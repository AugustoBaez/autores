import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditAuthor = () => {
  const [name, setName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/author/update/${id}`, {
        name,
      })
      .then((res) => {
        console.log(res, "succesful");
        navigate("/main");
      })
      .catch((error) => {
        console.log(error, "error haciendo post");
      });
  };

  return (
    <div>
      <h1>Favorite authors</h1>
      <p>
        <a href="">Home</a>
      </p>
      <p>Edit this author:</p>
      <form action="" onSubmit={handleSubmit}>
        <p>Name:</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button>Cancel</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditAuthor;
