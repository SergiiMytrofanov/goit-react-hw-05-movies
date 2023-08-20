import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import styles from './MovieDetails.module.css';

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a4690865d7bdab2d42080cd491b22b8d`)
      .then(response => response.json())
      .then(data => setMovieData(data));
  }, [movieId]);

  return (
    <div className={styles.container}>
      <Link to={backLink} className={styles.backLink}>
        Back
      </Link>
      <h2 className={styles.title}>{movieData.title}</h2>
      <p className={styles.overview}>{movieData.overview}</p>
      <Link to={`/movies/${movieId}/cast`} className={styles.link}>
          Cast
        </Link>
        <Link to={`/movies/${movieId}/reviews`} className={styles.link}>
          Reviews
        </Link>
        <img
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
            : defaultImg
        }
        className={styles.poster}
        alt="poster"
      />
      <div className={styles.linksContainer}>

      </div>
    </div>
  );
};

export default MovieDetails;
