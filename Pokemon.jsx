import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pokemon.css';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(async (response) => {
        const data = response.data.results;
        const pokemonData = await Promise.all(data.map(async (pokemon) => {
          const response = await axios(pokemon.url);
          return response.data;
        }));
        setPokemon(pokemonData);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.includes(searchTerm)
  );

  return (
    <div className='container'>
      <h1 className='title'>Pokemon</h1>
<div className='cont-search'>
      <input className='search'
        type='text'
        placeholder='Encuentra tu Pokémon'
        value={searchTerm}
        onChange={handleSearch}
     /> <img className='logo' src='https://static.vecteezy.com/system/resources/previews/027/127/591/original/pokemon-logo-pokemon-icon-transparent-free-png.png' alt='log'/>
      </div>
      <ul className='vox'>
        {filteredPokemon.map((poke, index) => (
          <li className='lista' key={index}>
            <p className='word'>{poke.name}</p>
            <img className='imgs'
              src={poke.sprites.front_default}
              alt={poke.name}
            />
          </li>
          
        ))}
      </ul>
      
    </div>
  );
}
