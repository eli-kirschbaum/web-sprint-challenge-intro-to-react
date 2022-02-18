import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [peopleUrls, setPeopleUrls] = useState([]);
  const [people, setPeople] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/films')
      .then(res => {
        //console.log(res.data.results)
        res.data.results.forEach(movie => {
          setPeopleUrls(movie.characters)
        })
        
      })
      .catch(err => console.error(err))

      console.log(peopleUrls)
  }, [])

  
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
