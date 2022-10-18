import { Col, Spin } from 'antd';
import Searcher from './components/Seracher';
import PokemonsList from './components/pokemonsList';
import logo from './statics/logo.svg';
import { useEffect} from 'react';
import { getPokemon } from './api';
import { getpokemonWDatails, setloading } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';



function App() {

  const pokemons = useSelector((state)  => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  // const [ pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fecthPokemon = async() => {
      dispatch(setloading(true));
      const pokemonsRes=  await getPokemon();
      dispatch(getpokemonWDatails(pokemonsRes));
      dispatch(setloading(false))
    };

    fecthPokemon();
  }, [dispatch]);




  return (
    <div className="App">
      <Col span={4} offset={10}>
      <img src={logo} alt="pokedux" />
      </Col>
      <Col span={8} offset={8}>
      <Searcher />
      </Col>
      { loading ? <Col >
      <Spin spinning size='large'></Spin>
      </Col> : <PokemonsList pokemons= { pokemons } /> }
    </div>
  );
}


export default App;
