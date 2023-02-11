import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditAuthor = () => {
  const [name, setName] = useState("");
  const [pastName, setPastName] = useState("")
  const [errors, setErrors] = useState(null)
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPastName = async () => {
      try {
        const result = await axios.get(`http://localhost:8000/api/author/${id}`); //se pone el id del useparams aca para hacer fetch de esa id
        setPastName(result.data.author[0].name);
      } catch (error) {
        console.log(error);
      }
    };
    getPastName();
  }, [])

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
         setErrors(error.response.data.errors.name.properties.message)
      });
  };
  console.log(errors)
  console.log(name)
  return (
    <div>
      <h1>Favorite authors</h1>
      <p>
        <a href="/">Home</a>
      </p>
      <p>Edit this author:</p>
      <form action="" onSubmit={handleSubmit}>
        <p>Name:</p>
        <input type="text" placeholder={pastName} onChange={(e) => setName(e.target.value)} />
        {name.length < 3 ? <span>error</span> : null} 
        <button>Cancel</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditAuthor;
