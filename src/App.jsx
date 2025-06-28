import './App.css';
import { useEffect, useState } from 'react';
import Formulario from './components/FormularioPokemon';
import PokemonInfo from './components/InfoPokemon';


function App() {
    const [nombre, setNombre] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    
const getPokemon = async (nombre) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`)
    if(!res.ok) throw new Error('Pokemon no encontrado')
    const data = await res.json()
    setPokemon(data);
    setError(err.message);

    } catch (err) {
      console.log(err)
    }
  };
 
  useEffect(() => {
    if(nombre.trim() !=='') {
  getPokemon(nombre.toLowerCase());
    } else {
      setPokemon(null);
      setError(null);
    }
  }, [nombre]); 
    
  
  return (
    <>
      <Formulario nombre={nombre} setNombre={setNombre} />
      <PokemonInfo pokemon={pokemon} error={error} />
    </>
   
  )
}
export default App;
