import React, {useEffect, useState} from 'react';

import {Link} from 'react-router-dom';

const Home = () => {
 const [trendingMovies, setTrendingMovies] = useState([]);

 useEffect(()=>{
  async function fetchTrendingMovies(){
    try {
      const apiKey = 'a4690865d7bdab2d42080cd491b22b8d';
      const responce = await fetch (`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);
      const data = await responce.json();
      setTrendingMovies(data.results);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  }
  fetchTrendingMovies();
 }, []);

 return (
  <div>
    <h2>Trending Movies</h2>
    <ul>
      {trendingMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
};

export default Home;
