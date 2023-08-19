import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

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
    <div>
      <h2>{movieData.title}</h2>
      <p>{movieData.overview}</p>
      <Link to={backLink}>Back</Link>
      <img
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
    </div>
  );
};

export default MovieDetails;
