import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/Constants";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovie] = useState([]);
  const [urlId, setUrlId] = useState([]);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((err) => {
        // alert("Network error");
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMoveTrailer = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-Us`).then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }else{
          console.log(`Array empty`)
        }
      });

    return (
      <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj) => (
            <img
              onClick={() => handleMoveTrailer(obj.id)} className={props.isSmall ? "small_poster" : "poster"} alt="Poster" src={`${imageUrl + obj.backdrop_path}`} />
          ))}
        </div>
        { <YouTube opts={opts} videoId={urlId.key} />}
      </div>
    );
  };
}

export default RowPost;
