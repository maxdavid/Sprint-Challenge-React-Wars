import React, { useState, useEffect } from 'react';
import './App.css';
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
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <div className='chars-list'>
        {starwarsChars.map(char => (
          <Char info={char} key={char.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
