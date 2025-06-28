import './App.css';
import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import PokemonInfo from './components/PokemonInfo';


function App() {
    const [nombre, setNombre] = useState('')
    const [pokemon, setPokemon] = useState(null)
    const [error, setError] = useState(null)
    
const getPokemon = async (nombre) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    try {
      if(!res.ok) throw new Error('Error al traer los datos')
      const data = await res.json()
      setPokemon(data)
    } catch (err) {
      console.log(err)
    }
  }
 
  useEffect(() => {
    if(nombre.trim() !=='') {
  getPokemon(nombre.toLowerCase());
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
