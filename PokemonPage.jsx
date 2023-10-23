import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonPage.css';

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm1, setSearchTerm1] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');

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

  const handleSearch1 = (e) => {
    setSearchTerm1(e.target.value.toLowerCase());
  };

  const handleSearch2 = (e) => {
    setSearchTerm2(e.target.value.toLowerCase());
  };

  const handleBattle = () => {
    const pokemon1 = pokemon.find(poke => poke.name === searchTerm1);
    const pokemon2 = pokemon.find(poke => poke.name === searchTerm2);

    if (!pokemon1 || !pokemon2) {
      alert("Selecciona dos Pokémon de la lista para la batalla.");
      return;
    }

    const health1 = pokemon1.stats.find(stat => stat.stat.name === 'hp').base_stat;
    const health2 = pokemon2.stats.find(stat => stat.stat.name === 'hp').base_stat;

    let result = '';
    if (health1 > health2) {
      result = `Enhorabuena ${pokemon1.name} ha ganado la batalla`;
      alert(result);
    } else if (health2 > health1) {
      result = `Enhorabuena ${pokemon2.name} ha ganado la batalla`;
      alert(result);
    } else {
      result = "¡Ohhhhhh, es un empate, solo hay una opción!";
      alert(result);
    }
  };

  const handleCardFlip = (index) => {
    const cards = document.querySelectorAll('.card');
    cards[index].classList.toggle('flipped');
  };

  return (
    <div className='container'>
      <img
        className='logopoke'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
        alt='Logo de Pokemon'
      />

      <div className='cont-search'>
        <input
          className='search'
          type='text'
          placeholder='Elige tu Pokémon'
          value={searchTerm1}
          onChange={handleSearch1}
          style={{ color: 'black', fontSize: '16px' }}
        />
      </div>

      <div className='cont-search'>
        <input
          className='search'
          type='text'
          placeholder='Elige tu Pokémon'
          value={searchTerm2}
          onChange={handleSearch2}
          style={{ color: 'black', fontSize: '16px' }}
        />
      </div>

      <button className='battle-button' onClick={handleBattle}>
        ¡Luchar!
      </button>

      <ul className='vox'>
        {pokemon.map((poke, index) => (
          <li className='lista' key={index}>
            <div className='card' onMouseEnter={() => handleCardFlip(index)} onMouseLeave={() => handleCardFlip(index)}>
              <div className='card-inner'>
                <div className='card-front'>
                  <p className='word'>{poke.name}</p>
                  <img
                    className='imgs' 
                    src={poke.sprites.front_default}
                    alt={poke.name}
                  />
                </div>
                <div className='card-back'>
                  
                  <ul className='ul-back'>
                  <p className='xp'>{poke.base_experience}XP</p>
                    {poke.stats.map((stat, statIndex) => (
                      <li key={statIndex}>{stat.stat.name}: {stat.base_stat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
