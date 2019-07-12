import React, { useState, useEffect } from 'react';

const Char = props => {
  const info = useState(props.info)[0];
  const [homeworld, setHomeworld] = useState('');

  useEffect(() => getPlanet(info.homeworld), [info]);

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

  if (!props.info) {
    return <h2 className='text-center text-gray-400'>Loading...</h2>;
  } else {
    const { name, birth_year, height, mass, films } = info;
    return (
      <div className='w-full p-4 bg-graytrans my-4'>
        <h2 className='text-lg font-bold my-2'>{name}</h2>
        <ul className='pl-4'>
          <li className='text-gray-600 mb-2'>
            Homeworld: <span className='text-black'>{homeworld}</span>
          </li>
          <li className='text-gray-600 mb-2'>
            Birth Year: <span className='text-black'>{birth_year}cm</span>
          </li>
          <li className='text-gray-600 mb-2'>
            Height: <span className='text-black'>{height}cm</span>
          </li>
          <li className='text-gray-600 mb-2'>
            Weight: <span className='text-black'>{mass}kg</span>
          </li>
        </ul>
        Appears in {films.length} films
      </div>
    );
  }
};

export default Char;
