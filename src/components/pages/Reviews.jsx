import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const apiKey = 'a4690865d7bdab2d42080cd491b22b8d';
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`);
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={styles.container}>
    <Link to={`/movies/${movieId}`} className={styles.backLink}>
        Back
      </Link>
      <h2 className={styles.title}>Reviews</h2>
      <ul className={styles.reviewList}>
        {reviews.map(review => (
          <li className={styles.reviewItem} key={review.id}>
            <p className={styles.author}>Author: {review.author}</p>
            <p className={styles.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
