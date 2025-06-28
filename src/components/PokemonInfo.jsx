import { useEffect, useState } from 'react'

function PokemonInfo({ pokemon, error }) {
    if (error) return <p>{error}</p>
    if (!pokemon) return <p>Busca un Pokémon</p>


return (
    <>
    {pokemon && (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
    )}
    </>
  )
};

export default PokemonInfo;



