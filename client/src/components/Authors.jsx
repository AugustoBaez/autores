import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Authors = () => {
  const [author, setAuthor] = useState([]);
  /* const [quote, setQuote] = useState([]);
  const [id, setId] = useState([]); */

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const result = await axios.get("http://localhost:8000/api/authors/"); //se pone el id del useparams aca para hacer fetch de esa id
        /*         console.log(result.data.autor); */
        setAuthor(result.data.autor.map((prod) => prod));
        /* setQuote(result.data.product.map((prod) => prod.price)); */
      } catch (error) {
        console.log(error);
      }
    };
    getAuthor();
  }, []);
  console.log(author);
  const deleteAuthor = async (id) => {
    try {
      const result = await axios
        .delete(`http://localhost:8000/api/author/delete/${id}`) //se pone el id del useparams aca para hacer fetch de esa id
        .then((res) => {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Favorite authors</h1>
      <p>{<a href={`/new`}>Add an author</a>}</p>
      <p>We have quotes by:</p>
      <div className="autores">
        <label htmlFor="">Author</label>
        <label htmlFor="">Actions Available</label>
      </div>
      <div className="tableAuth">
        {author.map((prod) => (
          <>
            <div className="datos">
              <p>{prod.name}</p>
              <button>
                <a href={`/edit/${prod._id}`}>Edit</a>
              </button>
              <button onClick={() => deleteAuthor(prod._id)}>Delete</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Authors;
