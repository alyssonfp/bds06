import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'util/requests';


import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/movies/${movieId}`)
      .then((response) => {
        setMovie(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
       
      <h1>Tela detalhes do filme</h1>
    </div>
    </div>
  );
};

export default MovieDetails;
