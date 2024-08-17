import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data.js';
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {
   const cardsRef=useRef();
   const [apiData,setApiData]=useState([]);

   const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTAyNmIwOGFiYmJlMDY1YzQ4MzZlNzVjMTQ0NGUzMCIsIm5iZiI6MTcyMzg4NDgyNC4wMzQyMTUsInN1YiI6IjY2YzA2MmZmMTUwZDQyYmUxMDlkYzFiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uaol717dEyMtI-TPd_2MkpajrfGfJIOqWf-6y-QwG9U'
    }
  };
  
  

   const scrollWheel=(event)=>{
       event.preventDefault();
       cardsRef.current.scrollLeft+=event.deltaY;
   }

   useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel',scrollWheel);
   },[])



  return (
    <div  className='title-cards'>
      
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="cards-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
         return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}></img>
            <p>{card.original_title}</p>
          </Link>
})}
        </div>
         
      </div>
  )
}

export default TitleCards
