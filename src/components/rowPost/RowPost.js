import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY,imageUrl } from "../../constants/Constants";

function RowPost() {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
        console.log(response.data);
        setMovie(response.data.results)
      })
      .catch((err) => {
        alert("Network error");
      });
  }, []);

  return (
    <div className="row">
      <h2>Netflix Originals</h2>
      <div className="posters">
        {
          movies.map((obj)=>
          <img className="poster" alt="Poster" src={`${imageUrl+obj.backdrop_path}`}  />

          )
        }
      </div>
    </div>
  );
}

export default RowPost;
