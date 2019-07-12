import React, { useState, useEffect } from 'react';
import Char from './components/Char';

function App() {
  const [starwarsChars, setChars] = useState([]);

  const getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setChars(data.results);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  useEffect(() => getCharacters('https://swapi.co/api/people/'), []);

  return (
    <div className='text-center'>
      <h1 className='text-gray-300 text-6xl text-glow font-audiowide'>
        React Wars
      </h1>
      <div className='text-left my-4 mx-auto max-w-2xl'>
        {starwarsChars.map(char => (
          <Char info={char} key={char.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
