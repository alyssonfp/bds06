import { Link } from 'react-router-dom';
import './styles.css';
const Movie = () => {

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h3>Tela listagem de filmes</h3>
        <Link to="/movies/1" >
          <p>Acessar /movies/1</p>
        </Link>
        <Link to="/movies/2" >
          <p>Acessar /movies/2</p>
        </Link>
        
      </div>
    </div>
  )
}  


export default Movie;
