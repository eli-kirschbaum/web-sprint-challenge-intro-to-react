import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  const [people, setPeople] = useState([]);
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
  console.log('TEST TEST TEST')
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log(res.data)
        setPeople(res.data.results ?? res.data)
      }).catch(error => {throw 'ERROR ERROR ERROR'})
    
  }, []);

  return (
    <div className="App">
      <h1>Characters of Star Wars</h1>
        {
          
        people?.map(person => {
          return <Character key={person.name} person={person}/>
        })
        }


    </div>
  );
}

export default App;
