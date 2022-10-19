import { Col, Spin } from 'antd';
import Searcher from './components/Seracher';
import PokemonsList from './components/pokemonsList';
import logo from './statics/logo.svg';
import { useEffect} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fecthPokemonsWdatails } from './slices/dataSlice';




function App() {

  const pokemons = useSelector((state)  =>  state.data.pokemons,  shallowEqual);

  // const loading = useSelector((state) =>  state.ui.loading);
  const loading = false;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthPokemonsWdatails());
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
