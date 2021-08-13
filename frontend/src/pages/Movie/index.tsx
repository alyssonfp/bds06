import { Movie } from 'types/movie';
import { useState, useEffect } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL, requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';


import './styles.css';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/movies",
      baseURL: BASE_URL,
      params: {
        page: 0,
        size: 12,
      }
    };

    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Tela listagem de filmes</h1>
      </div>
    </div>
  );
};

export default Catalog;
