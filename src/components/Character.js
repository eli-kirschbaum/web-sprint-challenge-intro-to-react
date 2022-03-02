// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacterCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    justify-content: space-between;
    padding: .5px;
    margin: 3px;
    border: 2px solid #DAA520;
    background-color: coral;
`

const Character = (props) => {

    const { person } = props;
    const { name, gender, birth_year, height, mass } = person;

    return (
        <StyledCharacterCard>
            <article key={`App-peopleMap-personId-${person.id}`}>
            {name}
                <p>Gender: {gender}</p>
                <p>Birth-Year: {birth_year}</p>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
        </article>


        </StyledCharacterCard>
        
        
    )
    

}

export default Character;


