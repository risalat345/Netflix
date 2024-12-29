import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import backIcon from "../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzEwNjA0ZTZjZTJiNGFmODFjNmQ1NTdkZmY4YTg2YSIsIm5iZiI6MTczNTEzMjI1Ni4wMDcsInN1YiI6IjY3NmMwNDYwMTYyZmE1ZTMzYTY0YjExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NMapoojy0HMQyBmUrpGUGLpJ2MDLjOLQqXHEp_AHoMA'
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setApiData(data.results[0]);
        } else {
          setApiData(null);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!apiData) return <div>No video available for this movie.</div>;

  return (
    <div className="player h-[100vh] flex flex-col justify-center items-center">
      <Link to={`/home`}>
        <img
          className=" text-red-500 cursor-pointer absolute top-2 left-8 w-[50px]"
          src={backIcon}
          alt="Back"
        />
      </Link>
      <iframe
        className="rounded-lg"
        height="100%"
        width="80%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        title="Trailer"
        allowFullScreen
      ></iframe>
      <div className="playerInfo w-[90%] flex justify-between items-center">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
