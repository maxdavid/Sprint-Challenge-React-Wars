import React, { useState, useEffect } from 'react';
import './StarWars.scss';

const Char = props => {
  const info = useState(props.info)[0];
  const [homeworld, setHomeworld] = useState('');

  useEffect(() => getPlanet(info.homeworld), []);

  const getPlanet = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setHomeworld(data.name);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  const { name, birth_year, height, mass, films } = info;
  return (
    <div className='char'>
      <h2>{name}</h2>
      <ul>
        <li>
          Homeworld: <span className='value'>{homeworld}</span>
        </li>
        <li>
          Birth Year: <span className='value'>{birth_year}cm</span>
        </li>
        <li>
          Height: <span className='value'>{height}cm</span>
        </li>
        <li>
          Weight: <span className='value'>{mass}kg</span>
        </li>
      </ul>
      Appears in {films.length} films
    </div>
  );
};

export default Char;
