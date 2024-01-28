import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/Constants";
import YouTube from "react-youtube";

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
  
    const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };


  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj)=>
          <img onClick={()=>handleMoveTrailer(obj.id)} className={props.isSmall ? "small_poster" : "poster"} alt="Poster" src={`${imageUrl+obj.backdrop_path}`}  />

          )
        }
      </div>
      <YouTube opts={opts} videoId="2g811Eo7K8U" />
    </div>
  );
}

export default RowPost;
