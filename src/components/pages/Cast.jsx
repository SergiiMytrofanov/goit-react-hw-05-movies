import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Cast.module.css';

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const apiKey = 'a4690865d7bdab2d42080cd491b22b8d';
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <Link to={`/movies/${movieId}`} className={styles.backLink}>
        Back
      </Link>
      <h2 className={styles.title}>Cast</h2>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li className={styles.castItem} key={actor.id}>
            <img
              className={styles.actorImage}
              src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultImg}
              alt={actor.name}
              width={100}
              height={150}
            />
            <span className={styles.actorName}>{actor.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
