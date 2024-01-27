import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl } from "../../constants/Constants";

function RowPost(props) {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((response) => {
        setMovie(response.data.results)
      })
      .catch((err) => {
       // alert("Network error");
      });
  }, []);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj)=>
          <img className={props.isSmall ? "small_poster" : "poster"} alt="Poster" src={`${imageUrl+obj.backdrop_path}`}  />

          )
        }
      </div>
    </div>
  );
}

export default RowPost;
