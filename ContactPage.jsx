import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactPage.css'

export default function ContactPage() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [result, setResult] = useState(null);
  const [pokemonImage, setPokemonImage] = useState('');

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
    } catch (error) {
      setResult('Ha ocurrido un error al obtener tu Pokémon');
    }
  };

  useEffect(() => {
    getRandomPokemon();
  }, []); //cargar el componente

  const handleSubmit = (e) => {
    e.preventDefault();
    getRandomPokemon();
  };

  return (
    <div>
      <h1 className='title'>Descubre tu Pokemon</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label className='' htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <label className='lab' htmlFor="birthdate">Fecha de nacimiento</label>
        <input
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={handleBirthdateChange}
          required
        />
        <button type="submit">Descubrir</button>
      </form>
      {result && <p>{result}</p>}
      {pokemonImage && <img className='pokemon'src={pokemonImage} alt="Imagen del Pokémon" />}
    </div>
  );
}

