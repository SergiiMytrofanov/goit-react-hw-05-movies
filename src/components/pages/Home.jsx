import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const apiKey = 'a4690865d7bdab2d42080cd491b22b8d';
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);
        const data = await response.json();
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trending Movies</h2>
      <ol className={styles.list}>
        {trendingMovies.map(movie => (
          <li key={movie.id} className={styles.item}>
            <Link to={`/movies/${movie.id}`} className={styles.link}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
