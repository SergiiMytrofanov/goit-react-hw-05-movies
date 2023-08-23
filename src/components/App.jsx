import React, { lazy } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styles from './App.module.css';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));

const App = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className={styles.navLink}>
              Movies
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={(
          <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
          </React.Suspense>
        )} />
        <Route path="/movies" element={(
          <React.Suspense fallback={<div>Loading...</div>}>
            <Movies />
          </React.Suspense>
        )} />
        <Route path="/movies/:movieId" element={(
          <React.Suspense fallback={<div>Loading...</div>}>
            <MovieDetails />
          </React.Suspense>
        )} />
        <Route path="/movies/:movieId/cast" element={(
          <React.Suspense fallback={<div>Loading...</div>}>
            <Cast />
          </React.Suspense>
        )} />
        <Route path="/movies/:movieId/reviews" element={(
          <React.Suspense fallback={<div>Loading...</div>}>
            <Reviews />
          </React.Suspense>
        )} />
      </Routes>
    </div>
  );
};

export default App;
