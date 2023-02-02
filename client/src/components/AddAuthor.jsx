import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddAuthor = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/author/new`, {
        name,
      })
      .then((res) => {
        console.log(res, "succesful");
        navigate("/main");
      })
      .catch((error) => {
        console.log(error, "error haciendo post");
        setErrors(error.data.error.message)
      });
  };

  console.log(errors)
  return (
    <div>
      <h1>Favorite authors</h1>
      <p>
        <a href={`/main`}>Home</a>
      </p>
      <p>Add new author:</p>
      <form action="" onSubmit={handleSubmit}>
        <p>Name:</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        {errors.name ? <span > {errors.message}</span> : null }<br></br>
        <button>
          <a href={`/main`}></a>
          Cancel
        </button>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddAuthor;
