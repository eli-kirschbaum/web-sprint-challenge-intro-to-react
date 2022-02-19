// Write your Character component here
import React from 'react';


const Character = (props) => {

    const { person } = props

    return (
        <div className='character-container'>
            <h2>{person.name}</h2>
            <div className='character-stats'>
                <p>Gender: {person.gender}</p>
                <p>Birth-Year: {person.birth_year}</p>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
            </div>  
        </div>
    )

}

export default Character