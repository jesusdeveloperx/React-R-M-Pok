import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CharacterPage.css'

export default function CharacterPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios('https://rickandmortyapi.com/api/character')
      .then((response) => {
        setCharacters(response.data.results);
      })
      
  }, []);

  return (
    <div className='containers'>
      
      <h1 className='title'>Rick & Mort</h1>
      <div className="character-img">
        {characters.map((character, i) => (<div className='box'>
          <img className='imgs' key={i} src={character.image} alt={character.name}/><div className='name'>{character.name}</div><div className='species'>{character.species}</div><div className='status'>{character.status}</div></div>
        ))}
      </div>
    </div>
  );
}


