

function PokemonInfo({ pokemon, error, loading }) {
    if (loading) return <p>⌛</p>
    if (error) return <p style={{ color: 'red' }}>{error}</p>
    if (!pokemon) return <p>Busca un Pokémon</p>


return (
    <>
    {pokemon && (
    <div className='cardPoke'>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
    )}
    </>
  )
};

export default PokemonInfo;



