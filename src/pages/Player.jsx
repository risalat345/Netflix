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
    <div className="player min-h-screen flex flex-col items-center bg-black p-4">
      <Link to={`/home`} className="absolute top-4 left-4">
        <img
          className="w-8 h-8 md:w-12 md:h-12"
          src={backIcon}
          alt="Back"
        />
      </Link>
      <iframe
        className="rounded-lg w-full max-w-4xl h-56 md:h-80 lg:h-[70vh]"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        title="Trailer"
        allowFullScreen
      ></iframe>
      <div className="playerInfo w-full max-w-4xl mt-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left p-4 rounded-lg shadow">
        <p className="text-white">{apiData.published_at?.slice(0, 10)}</p>
        <p className="text-white font-medium">{apiData.name}</p>
        <p className="text-white">{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
