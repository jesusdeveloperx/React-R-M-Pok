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
            <img className='logopoke' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' alt='Logo de pokemon'/>

<div className='cont-search'>
      <input className='search'
        type='text'
        placeholder='Encuentra tu Pokémon'
        value={searchTerm}
        onChange={handleSearch}
     /> <img className='logo' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73059838-a3f0-40f2-83b3-183538d7c092/d8hwdh9-ef3ca51a-576c-4d3c-a43a-c5ff20b8b8a7.png/v1/fill/w_367,h_383/fancy_pokeball_logo_thing_by_bunni89_d8hwdh9-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzgzIiwicGF0aCI6IlwvZlwvNzMwNTk4MzgtYTNmMC00MGYyLTgzYjMtMTgzNTM4ZDdjMDkyXC9kOGh3ZGg5LWVmM2NhNTFhLTU3NmMtNGQzYy1hNDNhLWM1ZmYyMGI4YjhhNy5wbmciLCJ3aWR0aCI6Ijw9MzY3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2NDBlEUNY8WicPMRdELVlzh-Bn1N1K55Mjsc45xp7JM' alt='log'/>
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
