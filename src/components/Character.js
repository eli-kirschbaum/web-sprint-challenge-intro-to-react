// Write your Character component here
import React from 'react';


const Character = (props) => {

    const { person } = props
    
    return (
        <div className='character-container'>
            <h2>NAME GOES HERE</h2>
            <p>GENDER GOES HERE</p>
            <p>AGE GOES HERE</p>
            <p>BIRTHYEAR GOES HERE</p>
            <p>HEIGHT</p>
            <p>MASS</p>
        </div>
    )

}

export default Character