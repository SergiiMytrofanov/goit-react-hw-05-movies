import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


const Home = lazy(()=> import('./pages/Home.jsx'));
const Movies = lazy (()=> import('./pages/Movies.jsx'));
const MovieDetails = lazy(()=> import('./pages/MovieDetails.jsx'));
const Cast = lazy(()=> import('./pages/Cast.jsx'));
const Reviews = lazy(()=> import('./pages/Reviews.jsx'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:movieId" exact component={MovieDetails} />
          <Route path="/movies/:movieId/cast" exact component={Cast} />
          <Route path="/movies/:movieId/reviews" exact component={Reviews} />
          <Redirect to="/" exact component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
