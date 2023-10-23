import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DigimonPage.css'
export default function DigimonPage() {
  const [digimonData, setDigimonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://digimon-api.vercel.app/api/digimon')
      .then((response) => {
        const data = response.data;
        setDigimonData(data);
      });
  }, []);

  const handleSearch = () => {
    const filteredDigimon = digimonData.filter((digimon) =>
      digimon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDigimonData(filteredDigimon);
  };

  return (
    <div>
      <h1 className='titleDigi'>
<img className='titulo' src='https://i.pinimg.com/originals/fa/a9/fd/faa9fd4c09fe977ab69980d0e6a1818d.png' alt='logo digimon'/>
</h1>

      <div>
        <div>
          <input
            type="text" style={{ color: 'black', fontSize: '16px' }}
            placeholder="Nombre del Digimon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </div>

      <div>
        <ul className='list-digi'>
          {digimonData.map((digimon) => (
            <li className='listaDigi' key={digimon.id}>
              <img className='image-digi' src={digimon.img} alt={digimon.name} />
              <h2>{digimon.name}</h2>
              <p>ID: {digimon.id}</p>
              <p>Tipo: {digimon.type}</p>
              <p>Nivel: {digimon.level}</p>
              <p>Atributos: {digimon.attribute}</p>
              <p>Fuerza: {digimon.power}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
