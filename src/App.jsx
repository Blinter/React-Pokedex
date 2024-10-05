import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import PropTypes from 'prop-types';

const App = ({ pokedex }) => {
  App.propTypes = {
    pokedex: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        base_experience: PropTypes.number.isRequired,
      })
    ).isRequired
  };
  return (
    <div className="container text-center mt-5">
      <h1 className="text-secondary">Pokedex</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
        {pokedex.map(pokemon => (
          <div className="col" key={pokemon.id}>{pokeCard(pokemon)}</div>
        ))}
      </div>
    </div>
  )
}

const pokeCard = ({ id, name, type, base_experience }) =>
(
  <div className="card h-100 bg-light rounded-5">

    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} className="card-img-top" alt="{name}" />
    <div className="card-body">
      <h5 className="card-title text-primary fw-bold">{name}</h5>
      <p className="card-text fw-bold">Type: {type}<br />EXP: {base_experience}</p>
    </div>
  </div>
)

export default App
