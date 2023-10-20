import React, { useState } from 'react';
import axios from 'axios';
import './ContactPage.css'

export default function ContactPage() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [result, setResult] = useState(null);
  const [pokemonImage, setPokemonImage] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const getRandomPokemon = async () => {
    const randomPokemonId = Math.floor(Math.random() * 151) + 1;
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
      const pokemonName = response.data.name;
      const pokemonImageUrl = response.data.sprites.front_default;
      setPokemonImage(pokemonImageUrl);
      setResult(`Enhorabuena, ${name}! Según tu fecha de nacimiento ${birthdate}, eres un Pokémon ${pokemonName}.`);
      setShowResult(true);
    } catch (error) {
      setResult('Ha ocurrido un error al obtener tu Pokémon');
      setShowResult(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRandomPokemon();
  };

  return (
    <div><div className='head'>
      </div>
      <h1 className='title'>Descubre tu Pokemon</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label className='' htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
          style={{ color: 'black', fontSize: '16px' }}
        />
        <label className='lab' htmlFor="birthdate">Fecha de nacimiento</label>
        <input
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={handleBirthdateChange}
          required
          style={{ color: 'black', fontSize: '16px' }}
        />
        <button type="submit">Descúbrelo</button>
      </form>
      {showResult && result && <p>{result}</p>}
      {showResult && pokemonImage && <img className='pokemon' src={pokemonImage} alt="Imagen del pokemon" />}
    </div>
  );
}
