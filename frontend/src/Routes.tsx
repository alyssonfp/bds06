import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Auth from 'pages/Home';
import history from 'util/history';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';


const Routes = () => (
  <Router history={history}>
  <Navbar />
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/movies" exact>
      <MovieDetails />
    </Route>
    <Route path="/movies/:movieId">
      <MovieDetails />
    </Route>
    <Redirect from="/admin/auth" to="/admin/auth/login" exact />
    <Route path="/admin/auth" >
      <Auth />
    </Route>
  </Switch>
</Router>
);

export default Routes;
