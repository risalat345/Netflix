import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import cards_data from '../assets/cards/Cards_data';
import { useState } from 'react';
const TitleCards = ({title,category}) => {
  const [apiData, setapiData] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzEwNjA0ZTZjZTJiNGFmODFjNmQ1NTdkZmY4YTg2YSIsIm5iZiI6MTczNTEzMjI1Ni4wMDcsInN1YiI6IjY3NmMwNDYwMTYyZmE1ZTMzYTY0YjExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NMapoojy0HMQyBmUrpGUGLpJ2MDLjOLQqXHEp_AHoMA'
    }
  };
  
  
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  const cardsRef = useRef();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res =>setapiData(res.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])
  return (
    <div className="px-4">
      <h1 className="text-xl font-bold my-5">{title}</h1>
      <div
        className="card-container flex overflow-x-scroll space-x-4 scrollbar-hide"
        ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`}
              key={index}
              className="min-w-[150px] flex-shrink-0 rounded-md overflow-hidden relative">
              <div className="relative w-full h-[200px]">
                <img
                  className="w-full h-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}
                
                />
                <p className="absolute bottom-0 right-0 p-5 text-white font-bold">
                  {card.original_title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default TitleCards;