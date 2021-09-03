import { Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import history from 'util/history';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movie from 'pages/Movie'



const Routes = () => (
  <Router history={history}>
  <Navbar />
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/movies" exact>
      <Movie />
    </Route>
    <Route path="/movies/:movieId">
      <MovieDetails />
    </Route>
    </Switch>
</Router>
);

export default Routes;
